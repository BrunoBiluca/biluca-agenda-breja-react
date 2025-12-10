import { render } from "vitest-browser-react";
import { locators, page, type Locator } from "vitest/browser";
import { Breweries } from "./breweries";
import { beforeEach, describe, expect, test } from "vitest";
import { MockBreweriesDataContext } from "@testing/mocks/breweries-data-context.mock";
import { MockBreweriesData } from "@testing/mocks/breweries-data.mock";
import { BrowserRouter } from "react-router";

declare module "vitest/browser" {
  interface LocatorSelectors {
    // if the custom method returns a string, it will be converted into a locator
    // if it returns anything else, then it will be returned as usual
    getBreweryItem(name: string): Locator;
  }
}

locators.extend({
  getBreweryItem(name) {
    return page.getByRole("listitem").filter({ hasText: name }).first();
  },
});

describe("Breweries with valid (mock) data", () => {
  const mock = new MockBreweriesData();
  beforeEach(() => {
    render(
      <BrowserRouter>
        <MockBreweriesDataContext mockValue={mock}>
          {<Breweries />}
        </MockBreweriesDataContext>
      </BrowserRouter>
    );
  });

  test("should have title called 'Cervejarias'", async () => {
    await expect.element(page.getByText("Cervejarias")).toBeInTheDocument();
  });

  test("should start with a loading indicator", async () => {
    await expect.element(page.getByRole("status")).toBeInTheDocument();
  });

  test("should have a list of breweries", async () => {
    await expect.element(page.getByRole("list")).toBeInTheDocument();

    await expect
      .element(page.getByText(mock.items[0].name))
      .toBeInTheDocument();
    await expect
      .element(page.getByText(mock.items[0].address_1))
      .toBeInTheDocument();

    await expect
      .element(page.getByText(mock.items[1].name))
      .toBeInTheDocument();
    await expect
      .element(page.getByText(mock.items[1].address_1))
      .toBeInTheDocument();
  });

  test("should open brewery details when brewery item is clicked", async () => {
    await expect.element(page.getByRole("list")).toBeInTheDocument();

    for (const b of mock.items) {
      const breweryItem = page.getBreweryItem(b.name);
      expect(breweryItem).toBeVisible();
      expect(breweryItem).toHaveAttribute("href", "/" + b.id);
    }
  });
});

describe("Breweries edge cases", () => {
  const mock = new MockBreweriesData(true);
  beforeEach(() => {
    render(
      <MockBreweriesDataContext mockValue={mock}>
        {<Breweries />}
      </MockBreweriesDataContext>
    );
  });

  test("should have no breweries", async () => {
    await expect
      .element(page.getByText("Nenhuma cervejaria encontrada"))
      .toBeInTheDocument();
  });
});

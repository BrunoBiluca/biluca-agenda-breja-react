import { render } from "vitest-browser-react";
import { page } from "vitest/browser";
import { Breweries } from "./Breweries";
import { describe, expect, test } from "vitest";
import { MockBreweriesDataContext } from "@testing/mocks/breweries-data-context.mock";
import { MockBreweriesData } from "@testing/mocks/breweries-data.mock";

describe("Breweries", () => {
  test("should have title called 'Cervejarias'", async () => {
    render(
      <MockBreweriesDataContext mockValue={new MockBreweriesData()}>
        {<Breweries />}
      </MockBreweriesDataContext>
    );

    await expect.element(page.getByText("Cervejarias")).toBeInTheDocument();
  });

  test("should start with a loading indicator", async () => {
    render(
      <MockBreweriesDataContext mockValue={new MockBreweriesData()}>
        {<Breweries />}
      </MockBreweriesDataContext>
    );

    await expect.element(page.getByRole("status")).toBeInTheDocument();
  });

  test("should have a list of breweries", async () => {
    const mock = new MockBreweriesData();
    render(
      <MockBreweriesDataContext mockValue={mock}>
        {<Breweries />}
      </MockBreweriesDataContext>
    );

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
});

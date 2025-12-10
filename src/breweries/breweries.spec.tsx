import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import { Breweries } from "./breweries";
import { BrowserRouter } from "react-router";

test("should have the main components", () => {
  const { getByRole, container } = render(
    <BrowserRouter>
      <Breweries />
    </BrowserRouter>,
  );

  expect(getByRole("heading", { level: 2 })).not.toBeUndefined();
  expect(container.querySelector(".container")).not.toBeUndefined();
});

import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import { Breweries } from "./Breweries";

test("should have the main components", () => {
  const { getByRole, container } = render(<Breweries />);

  expect(getByRole("heading", { level: 2 })).not.toBeUndefined();
  expect(container.querySelector(".container")).not.toBeUndefined();
});

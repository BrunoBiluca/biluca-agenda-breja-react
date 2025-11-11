import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { Breweries } from "./Breweries";

test("should have the main components", () => {
  render(<Breweries />);

  // Query by text content
  const element = screen.getByText("Breweries");
  expect(element).not.toBeUndefined();
});

import { render } from "vitest-browser-react";
import { page } from "vitest/browser";
import { Breweries } from "./Breweries";
import { expect, test } from "vitest";

test("should have title called 'Cervejarias'", async () => {
  render(<Breweries />);

  await expect
    .element(page.getByText("Cervejarias"))
    .toBeInTheDocument();
});

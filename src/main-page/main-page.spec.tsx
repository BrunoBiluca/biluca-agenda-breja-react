import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { MainPage } from "./main-page";

describe("MainPage", () => {
  test("should have the main components", () => {
    const { container } = render(<MainPage />);

    expect(container.querySelector("header")).not.toBeUndefined();
    expect(container.querySelector("#schedule")).not.toBeUndefined();
    expect(container.querySelector("#breweries")).not.toBeUndefined();
  });
});

import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { MainPage } from "./main-page";
import { BrowserRouter } from "react-router";

describe("MainPage", () => {
  test("should have the main components", () => {
    const { container } = render(
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>,
    );

    expect(container.querySelector("header")).not.toBeUndefined();
    expect(container.querySelector("#schedule")).not.toBeUndefined();
    expect(container.querySelector("#breweries")).not.toBeUndefined();
  });
});

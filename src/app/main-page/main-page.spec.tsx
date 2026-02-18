import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { MainPage } from "./main-page";
import { BrowserRouter } from "react-router";
import { AuthServiceProvider } from "@app/auth/services/auth-context";
import { LocalAuthService } from "@app/testing/standalone-mode/services/local-auth-service";

describe("MainPage", () => {
  test("should have the main components", () => {
    const auth = new LocalAuthService();
    auth.signup("email", "password", "name");
    auth.login("email", "password");

    const { container } = render(
      <AuthServiceProvider authService={auth}>
        <BrowserRouter>
          <MainPage />
        </BrowserRouter>
      </AuthServiceProvider>,
    );

    expect(container.querySelector("header")).not.toBeUndefined();
    expect(container.querySelector("#schedule")).not.toBeUndefined();
    expect(container.querySelector("#breweries")).not.toBeUndefined();
  });
});

import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { MainPage } from "./main-page";
import { BrowserRouter } from "react-router";
import { AuthServiceProvider } from "@app/auth/services/auth-context";
import { LocalAuthService } from "@app/testing/standalone-mode/services/local-auth-service";
import { BreweriesDataProvider } from "@core/breweries/breweries-data-context";
import { BreweryScheduleDataProvider } from "@core/brewery-schedule/brewery-schedule-context";
import { MemoryBreweriesData } from "@app/testing/standalone-mode/services/memory-breweries-data";
import { MemoryScheduleData } from "@app/testing/standalone-mode/services/memory-schedule-data";

describe("MainPage", () => {
  test("should have the main components", () => {
    const auth = new LocalAuthService();
    auth.signup("email", "password", "name");
    auth.login("email", "password");

    const { container } = render(
      <AuthServiceProvider authService={auth}>
        <BreweriesDataProvider breweriesData={new MemoryBreweriesData()}>
          <BreweryScheduleDataProvider
            breweryScheduleData={new MemoryScheduleData()}
          >
            <BrowserRouter>
              <MainPage />
            </BrowserRouter>
          </BreweryScheduleDataProvider>
        </BreweriesDataProvider>
      </AuthServiceProvider>,
    );

    expect(container.querySelector("header")).not.toBeUndefined();
    expect(container.querySelector("#schedule")).not.toBeUndefined();
    expect(container.querySelector("#breweries")).not.toBeUndefined();
  });
});

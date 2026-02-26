import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import { Breweries } from "./breweries";
import { BrowserRouter } from "react-router";
import { MemoryBreweriesData } from "@app/testing/standalone-mode/services/memory-breweries-data";
import { MemoryScheduleData } from "@app/testing/standalone-mode/services/memory-schedule-data";
import { BreweriesDataProvider } from "@core/breweries/breweries-data-context";
import { BreweryScheduleDataProvider } from "@core/brewery-schedule/brewery-schedule-context";

test("should have the main components", () => {
  const { getByRole, container } = render(
    <BreweriesDataProvider breweriesData={new MemoryBreweriesData()}>
      <BreweryScheduleDataProvider
        breweryScheduleData={new MemoryScheduleData()}
      >
        <BrowserRouter>
          <Breweries />
        </BrowserRouter>
      </BreweryScheduleDataProvider>
    </BreweriesDataProvider>,
  );

  expect(getByRole("heading", { level: 2 })).not.toBeUndefined();
  expect(container.querySelector(".container")).not.toBeUndefined();
});

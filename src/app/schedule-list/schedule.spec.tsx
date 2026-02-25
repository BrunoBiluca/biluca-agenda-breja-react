import { expect, test } from "vitest";
import { ScheduleList } from "./schedule-list";
import { render } from "@testing-library/react";
import { BreweryScheduleDataProvider } from "../../core/brewery-schedule/brewery-schedule-context";
import { MemoryBreweriesData } from "@app/testing/standalone-mode/services/memory-breweries-data";
import { MemoryScheduleData } from "@app/testing/standalone-mode/services/memory-schedule-data";
import { BreweriesDataProvider } from "@core/breweries/breweries-data-context";

test("should have the main components", () => {
  const { getByRole, container } = render(
    <BreweriesDataProvider breweriesData={new MemoryBreweriesData()}>
      <BreweryScheduleDataProvider
        breweryScheduleData={new MemoryScheduleData()}
      >
        <ScheduleList />
      </BreweryScheduleDataProvider>
    </BreweriesDataProvider>,
  );

  expect(getByRole("heading", { level: 2 })).not.toBeUndefined();
  expect(container.querySelector(".schedule-list")).not.toBeUndefined();
});

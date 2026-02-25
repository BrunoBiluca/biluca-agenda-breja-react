import { render } from "vitest-browser-react";
import { page } from "vitest/browser";
import { expect, test } from "vitest";
import { ScheduleList } from "./schedule-list";
import { BreweryScheduleDataProvider } from "../../core/brewery-schedule/brewery-schedule-context";
import { BreweriesDataProvider } from "@core/breweries/breweries-data-context";
import { MemoryBreweriesData } from "@app/testing/standalone-mode/services/memory-breweries-data";
import { MemoryScheduleData } from "@app/testing/standalone-mode/services/memory-schedule-data";

test("should have title called 'Visitas agendadas'", async () => {
  render(
    <BreweriesDataProvider breweriesData={new MemoryBreweriesData()}>
      <BreweryScheduleDataProvider
        breweryScheduleData={new MemoryScheduleData()}
      >
        <ScheduleList />
      </BreweryScheduleDataProvider>
    </BreweriesDataProvider>,
  );

  await expect.element(page.getByText("Visitas agendadas")).toBeInTheDocument();
});

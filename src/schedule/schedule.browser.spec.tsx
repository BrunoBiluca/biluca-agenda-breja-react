import { render } from "vitest-browser-react";
import { page } from "vitest/browser";
import { expect, test } from "vitest";
import { ScheduleList } from "./schedule-list";
import { BreweryScheduleDataProvider } from "./services/brewery-schedule-context";
import { BreweriesDataProvider } from "@app/breweries/services/BreweriesDataContext";

test("should have title called 'Visitas agendadas'", async () => {
  render(
    <BreweriesDataProvider>
      <BreweryScheduleDataProvider>
        <ScheduleList />
      </BreweryScheduleDataProvider>
    </BreweriesDataProvider>,
  );

  await expect.element(page.getByText("Visitas agendadas")).toBeInTheDocument();
});

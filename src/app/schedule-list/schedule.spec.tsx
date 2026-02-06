import { expect, test } from "vitest";
import { ScheduleList } from "./schedule-list";
import { render } from "@testing-library/react";
import { BreweryScheduleDataProvider } from "../../core/brewery-schedule/brewery-schedule-context";

test("should have the main components", () => {
  const { getByRole, container } = render(
    <BreweryScheduleDataProvider>
      <ScheduleList />
    </BreweryScheduleDataProvider>,
  );

  expect(getByRole("heading", { level: 2 })).not.toBeUndefined();
  expect(container.querySelector(".schedule-list")).not.toBeUndefined();
});

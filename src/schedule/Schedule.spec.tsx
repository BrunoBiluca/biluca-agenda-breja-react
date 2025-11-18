import { expect, test } from "vitest";
import { Schedule } from "./Schedule";
import { render } from "@testing-library/react";

test("should have the main components", () => {
  const { getByRole, container } = render(<Schedule />);

  expect(getByRole("heading", { level: 2 })).not.toBeUndefined();
  expect(container.querySelector(".schedule-list")).not.toBeUndefined();
});

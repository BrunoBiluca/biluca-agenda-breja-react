import { render } from "vitest-browser-react";
import { page } from "vitest/browser";
import { expect, test } from "vitest";
import { Schedule } from "./Schedule";

test("should have title called 'Visitas agendadas'", async () => {
  render(<Schedule />);

  await expect.element(page.getByText("Visitas agendadas")).toBeInTheDocument();
});

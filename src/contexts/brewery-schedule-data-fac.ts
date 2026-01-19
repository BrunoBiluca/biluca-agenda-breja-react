import { isStandalone } from "@app/app-config";
import { MemoryScheduleData } from "@app/testing/standalone-mode/memory-schedule-data";

export function breweryScheduleDataFac() {
  return isStandalone() ? new MemoryScheduleData() : new MemoryScheduleData();
}

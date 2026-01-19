import { Observable } from "@lib/observable";
import type { BreweryScheduleRequest } from "./brewery-schedule-request.model";
import type { BrewerySchedule } from "./brewery-schedule.model";

export abstract class BreweryScheduleData {
  onNewSchedule: Observable = new Observable();
  onScheduleCanceled: Observable = new Observable();

  abstract getAll(): Promise<BrewerySchedule[]>;
  abstract create(request: BreweryScheduleRequest): Promise<BrewerySchedule>;
  abstract cancel(schedule: BrewerySchedule): Promise<void>;
}

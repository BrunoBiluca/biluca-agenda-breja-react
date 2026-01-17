import type { BrewerySchedule } from "./brewery-schedule.model";

export abstract class BreweryScheduleData {
  abstract getAll(): Promise<BrewerySchedule[]>;
}

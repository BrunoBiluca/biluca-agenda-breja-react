import type { BreweryScheduleRequest } from "@app/schedule/models/brewery-schedule-request.model";
import type { BrewerySchedule } from "@app/schedule/models/brewery-schedule.model";
import { BreweryScheduleData } from "@app/schedule/services/brewery-schedule-data";

export class SupabaseBreweryScheduleData extends BreweryScheduleData {
  getAll(): Promise<BrewerySchedule[]> {
    throw new Error("Method not implemented.");
  }

  create(request: BreweryScheduleRequest): Promise<BrewerySchedule> {
    throw new Error("Method not implemented.");
  }

  cancel(schedule: BrewerySchedule): Promise<void> {
    throw new Error("Method not implemented.");
  }
}

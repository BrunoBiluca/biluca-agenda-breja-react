import type { BreweryScheduleRequest } from "@app/core/brewery-schedule/models/brewery-schedule-request.model";
import type { BrewerySchedule } from "@app/core/brewery-schedule/models/brewery-schedule.model";
import { delay } from "../standalone-functions";
import { BreweryScheduleData } from "@core/brewery-schedule/brewery-schedule-data";
import { defaultSetting, getSettingBoolean } from "../standalone-mode";

const scheduleCreateErrorKey = "schedule-create-error";

export class MemoryScheduleData extends BreweryScheduleData {
  constructor() {
    super();
    defaultSetting(scheduleCreateErrorKey, false);
  }

  schedules: BrewerySchedule[] = [
    {
      id: "1",
      breweryId: "5128df48-79fc-4f0f-8b52-d06be54d0cec",
      breweryName: "Bar do Jola",
      visitDate: new Date(),
      party: ["Bruno", "Ariane"],
      notes: "Presentes para o Bruno deve ser bons",
    },
  ];

  getAll(): Promise<BrewerySchedule[]> {
    return delay(() => [...this.schedules], "getAll-schedules");
  }

  create(request: BreweryScheduleRequest): Promise<BrewerySchedule> {
    const newSchedule = {
      id: request.id,
      breweryId: request.breweryId,
      breweryName: request.breweryName,
      visitDate: request.visitDate,
      party: request.party,
      notes: request.notes,
    };

    return delay(() => {
      if (getSettingBoolean(scheduleCreateErrorKey)) {
        throw new Error("Error creating schedule");
      }

      this.schedules = [...this.schedules, newSchedule];
      this.onUpdateSchedules.notify(this.schedules);
      return newSchedule;
    });
  }

  cancel(schedule: BrewerySchedule): Promise<void> {
    return delay(() => {
      this.schedules = this.schedules.filter((item) => item.id !== schedule.id);
      this.onUpdateSchedules.notify(this.schedules);
    });
  }
}

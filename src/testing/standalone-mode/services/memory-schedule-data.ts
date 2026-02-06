import type { BreweryScheduleRequest } from "@app/core/brewery-schedule/models/brewery-schedule-request.model";
import type { BrewerySchedule } from "@app/core/brewery-schedule/models/brewery-schedule.model";
import { delay } from "../standalone-functions";
import { BreweryScheduleData } from "@core/brewery-schedule/brewery-schedule-data";

export class MemoryScheduleData extends BreweryScheduleData {
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
    this.schedules = [...this.schedules, newSchedule];
    this.onUpdateSchedules.notify(this.schedules);
    return Promise.resolve(newSchedule);
  }

  cancel(schedule: BrewerySchedule): Promise<void> {
    return delay(() => {
      this.schedules = this.schedules.filter((item) => item.id !== schedule.id);
      this.onUpdateSchedules.notify(this.schedules);
    });
  }
}

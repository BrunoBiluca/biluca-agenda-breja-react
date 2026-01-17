import { BreweryScheduleData } from "@app/schedule/services/brewery-schedule-data";
import type { BreweryScheduleRequest } from "@app/schedule/services/brewery-schedule-request.model";
import type { BrewerySchedule } from "@app/schedule/services/brewery-schedule.model";

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
    return Promise.resolve([...this.schedules]);
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
    this.schedules.push(newSchedule);
    this.onNewSchedule.notify(newSchedule);
    return Promise.resolve(newSchedule);
  }
}

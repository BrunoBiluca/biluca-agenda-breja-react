import type { BreweriesData } from "@app/breweries/services/BreweriesData";
import { BreweryScheduleData } from "@app/schedule/services/brewery-schedule-data";
import type { BrewerySchedule } from "@app/schedule/services/brewery-schedule.model";

export class MemoryScheduleData extends BreweryScheduleData {
  initial_schedule: BrewerySchedule[] = [];
  other_schedule: BrewerySchedule[] = [];

  constructor(breweriesData: BreweriesData) {
    super();

    breweriesData.getAll().then((breweries) => {
      const brewery = breweries[0];

      this.initial_schedule.push({
        id: "1",
        breweryId: brewery.id,
        breweryName: brewery.name,
        visitDate: new Date(),
        party: ["Bruno", "Ariane"],
        notes: "Presentes para o Bruno deve ser bons",
      });
    });
  }

  getAll(): Promise<BrewerySchedule[]> {
    return Promise.resolve([...this.initial_schedule, ...this.other_schedule]);
  }
}

import type { BreweryScheduleRequest } from "@app/schedule/models/brewery-schedule-request.model";
import type { BrewerySchedule } from "@app/schedule/models/brewery-schedule.model";
import { BreweryScheduleData } from "@app/schedule/services/brewery-schedule-data";
import { database } from "./client";
import { authServiceFac } from "@app/contexts/auth-service-fac";

export class SupabaseBreweryScheduleData extends BreweryScheduleData {
  async getAll(): Promise<BrewerySchedule[]> {
    const allSchedules = await database.from("brewery_schedules").select("*");

    if (allSchedules.error) {
      throw new Error(allSchedules.error.message);
    }

    return allSchedules.data?.map((item) =>
      this.mapSchedule(item),
    ) as BrewerySchedule[];
  }

  async create(request: BreweryScheduleRequest): Promise<BrewerySchedule> {
    const auth = authServiceFac();
    const user = auth.getLoggedUser()!;
    const userId = user.id!;
    const newSchedule = {
      id: request.id,
      brewery_id: request.breweryId,
      brewery_name: request.breweryName,
      visit_date: request.visitDate.toDateString(),
      party: request.party.join(","),
      notes: request.notes,
      user_id: userId,
    };
    const { data, error } = await database
      .from("brewery_schedules")
      .insert(newSchedule)
      .select();

    if (error) {
      throw new Error(error.message);
    }

    const allSchedules = await this.getAll();
    this.onUpdateSchedules.notify(allSchedules);
    return this.mapSchedule(data![0]);
  }

  async cancel(schedule: BrewerySchedule): Promise<void> {
    const { error } = await database
      .from("brewery_schedules")
      .delete()
      .eq("id", schedule.id);

    if (error) {
      throw new Error(error.message);
    }

    const allSchedules = await this.getAll();
    this.onUpdateSchedules.notify(allSchedules);
  }

  private mapSchedule(item: any): BrewerySchedule {
    return {
      id: item.id,
      breweryId: item.brewery_id,
      breweryName: item.brewery_name,
      visitDate: new Date(item.visit_date),
      party: item.party ? item.party.split(",") : [],
      notes: item.notes,
    };
  }
}

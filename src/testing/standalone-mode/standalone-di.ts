import type { AppFactory } from "@app/app-factory";
import { LocalAuthService } from "./services/local-auth-service";
import { MemoryBreweriesData } from "./services/memory-breweries-data";
import { MemoryScheduleData } from "./services/memory-schedule-data";
import type { BreweryScheduleData } from "@core/brewery-schedule/brewery-schedule-data";

class StandaloneDI implements AppFactory {
  authService() {
    return new LocalAuthService();
  }

  breweriesData() {
    return new MemoryBreweriesData();
  }

  breweriesScheduleData(): BreweryScheduleData {
    return new MemoryScheduleData();
  }
}

export const standaloneDI = new StandaloneDI();

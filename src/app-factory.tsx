import type { AuthService } from "./auth/services/auth-service";
import { BreweriesData } from "./core/breweries/BreweriesData";
import type { BreweryScheduleData } from "./core/brewery-schedule/brewery-schedule-data";
import { OpenBreweryDB } from "./integrations/openbrewerydb/ExternalBreweriesData";
import { SupabaseAuthService } from "./integrations/supabase/supabase-auth-service";
import { SupabaseBreweryScheduleData } from "./integrations/supabase/supabase-brewery-schedule-data";
import { isStandalone } from "./testing/standalone-mode/standalone-mode";
import { standaloneDI } from "./testing/standalone-mode/standalone-di";

export class AppFactory {
  authService(): AuthService {
    return new SupabaseAuthService();
  }

  breweriesData(): BreweriesData {
    return new OpenBreweryDB();
  }

  breweriesScheduleData(): BreweryScheduleData {
    return new SupabaseBreweryScheduleData(new SupabaseAuthService());
  }
}

export const appfac = isStandalone() ? standaloneDI : new AppFactory();

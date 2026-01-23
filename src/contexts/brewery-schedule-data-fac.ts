import { SupabaseBreweryScheduleData } from "@app/integrations/supabase/supabase-brewery-schedule-data";
import { MemoryScheduleData } from "@app/testing/standalone-mode/services/memory-schedule-data";
import { StandaloneModeConfig } from "@app/testing/standalone-mode/standalone-mode";

export function breweryScheduleDataFac() {
  return StandaloneModeConfig.isStandalone()
    ? new MemoryScheduleData()
    : new SupabaseBreweryScheduleData();
}

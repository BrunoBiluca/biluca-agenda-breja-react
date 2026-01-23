import { SupabaseBreweryScheduleData } from "@app/integrations/supabase/supabase-brewery-schedule-data";
import { MemoryScheduleData } from "@app/testing/standalone-mode/services/memory-schedule-data";
import { isStandalone } from "@app/testing/standalone-mode/standalone-mode";

export function breweryScheduleDataFac() {
  return isStandalone()
    ? new MemoryScheduleData()
    : new SupabaseBreweryScheduleData();
}

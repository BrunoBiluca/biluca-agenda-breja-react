import { ExternalBreweriesData } from "@app/integrations/openbrewerydb/ExternalBreweriesData";
import { MemoryBreweriesData } from "@app/testing/standalone-mode/services/memory-breweries-data";
import { StandaloneModeConfig } from "@app/testing/standalone-mode/standalone-mode";

export function BreweriesDataFac() {
  return StandaloneModeConfig.isStandalone()
    ? new MemoryBreweriesData()
    : new ExternalBreweriesData();
}

import { ExternalBreweriesData } from "@app/integrations/openbrewerydb/ExternalBreweriesData";
import { MemoryBreweriesData } from "@app/testing/standalone-mode/services/memory-breweries-data";
import { isStandalone } from "@app/testing/standalone-mode/standalone-mode";

export function BreweriesDataFac() {
  return isStandalone()
    ? new MemoryBreweriesData()
    : new ExternalBreweriesData();
}

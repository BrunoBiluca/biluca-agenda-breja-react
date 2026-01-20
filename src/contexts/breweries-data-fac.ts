import { ExternalBreweriesData } from "@app/integrations/openbrewerydb/ExternalBreweriesData";
import { MemoryBreweriesData } from "@app/testing/standalone-mode/memory-breweries-data";

export function BreweriesDataFac() {
  const isStandalone = import.meta.env.VITE_STANDALONE === "true";
  return isStandalone ? new MemoryBreweriesData() : new ExternalBreweriesData();
}

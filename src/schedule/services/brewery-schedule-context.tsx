import { MemoryScheduleData } from "@app/testing/standalone-mode/memory-schedule-data";
import { createContext, useContext } from "react";
import type { BreweryScheduleData } from "./brewery-schedule-data";
import { BreweriesDataFac } from "@app/breweries/services/BreweriesDataContext";

function BreweryScheduleDataFac() {
  const breweriesData = BreweriesDataFac();

  const isStandalone = import.meta.env.VITE_STANDALONE === "true";
  return isStandalone
    ? new MemoryScheduleData(breweriesData)
    : new MemoryScheduleData(breweriesData);
}

export const BreweryScheduleDataContext = createContext<BreweryScheduleData>(
  BreweryScheduleDataFac(),
);

export function BreweryScheduleDataProvider({ children }: any) {
  return (
    <BreweryScheduleDataContext.Provider value={BreweryScheduleDataFac()}>
      {children}
    </BreweryScheduleDataContext.Provider>
  );
}

export function useBreweryScheduleData() {
  return useContext(BreweryScheduleDataContext);
}

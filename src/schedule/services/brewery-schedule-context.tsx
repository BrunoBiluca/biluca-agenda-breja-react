import { MemoryScheduleData } from "@app/testing/standalone-mode/memory-schedule-data";
import { createContext, useContext } from "react";
import type { BreweryScheduleData } from "./brewery-schedule-data";

function BreweryScheduleDataFac() {
  const isStandalone = import.meta.env.VITE_STANDALONE === "true";
  return isStandalone ? new MemoryScheduleData() : new MemoryScheduleData();
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

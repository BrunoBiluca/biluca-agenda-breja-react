import { createContext, useContext } from "react";
import type { BreweryScheduleData } from "./brewery-schedule-data";
import { breweryScheduleDataFac } from "@app/contexts/brewery-schedule-data-fac";

export const BreweryScheduleDataContext = createContext<BreweryScheduleData>(
  breweryScheduleDataFac(),
);

export function BreweryScheduleDataProvider({ children }: any) {
  return (
    <BreweryScheduleDataContext.Provider value={breweryScheduleDataFac()}>
      {children}
    </BreweryScheduleDataContext.Provider>
  );
}

export function useBreweryScheduleData() {
  return useContext(BreweryScheduleDataContext);
}

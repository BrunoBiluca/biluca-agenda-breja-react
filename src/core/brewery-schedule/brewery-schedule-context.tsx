import { createContext, useContext } from "react";
import type { BreweryScheduleData } from "@core/brewery-schedule/brewery-schedule-data";
const BreweryScheduleDataContext = createContext<BreweryScheduleData | null>(null);

export function BreweryScheduleDataProvider({ children, breweryScheduleData }: {
  children: any;
  breweryScheduleData: BreweryScheduleData;
}) {
  return (
    <BreweryScheduleDataContext.Provider value={breweryScheduleData}>
      {children}
    </BreweryScheduleDataContext.Provider>
  );
}

export function useBreweryScheduleData() {
  return useContext(BreweryScheduleDataContext)!;
}

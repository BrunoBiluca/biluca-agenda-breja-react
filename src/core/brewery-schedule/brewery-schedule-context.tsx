import { createContext, useContext } from "react";
import type { BreweryScheduleData } from "@core/brewery-schedule/brewery-schedule-data";
import { appfac } from "@app/app-factory";

const BreweryScheduleDataContext = createContext<BreweryScheduleData>(
  appfac.breweriesScheduleData(),
);

export function BreweryScheduleDataProvider({ children }: any) {
  return (
    <BreweryScheduleDataContext.Provider value={appfac.breweriesScheduleData()}>
      {children}
    </BreweryScheduleDataContext.Provider>
  );
}

export function useBreweryScheduleData() {
  return useContext(BreweryScheduleDataContext);
}

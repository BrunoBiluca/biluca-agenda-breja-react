import { createContext, useContext } from "react";
import type { BreweriesData } from "@app/core/breweries/BreweriesData";
import { appfac } from "@app/app-factory";

export const BreweriesDataContext = createContext<BreweriesData>(
  appfac.breweriesData(),
);

export function BreweriesDataProvider({
  children,
  breweriesData,
}: {
  children: any;
  breweriesData: BreweriesData;
}) {
  return (
    <BreweriesDataContext.Provider value={breweriesData}>
      {children}
    </BreweriesDataContext.Provider>
  );
}

export function useBreweriesData() {
  return useContext(BreweriesDataContext);
}

import { createContext, useContext } from "react";
import type { BreweriesData } from "@app/core/breweries/BreweriesData";

export const BreweriesDataContext = createContext<BreweriesData | null>(null);

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
  return useContext(BreweriesDataContext)!;
}

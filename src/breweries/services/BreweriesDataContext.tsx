import { createContext } from "react";
import type { BreweriesData } from "./BreweriesData";
import { BreweriesDataFac } from "@app/contexts/breweries-data-fac";

export const BreweriesDataContext =
  createContext<BreweriesData>(BreweriesDataFac());

export function BreweriesDataProvider({ children }: any) {
  return (
    <BreweriesDataContext.Provider value={BreweriesDataFac()}>
      {children}
    </BreweriesDataContext.Provider>
  );
}

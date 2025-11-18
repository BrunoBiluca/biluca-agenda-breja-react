import { createContext } from "react";
import { LocalBreweriesData } from "./LocalBreweriesData";
import type { BreweriesData } from "./BreweriesData";

export const BreweriesDataContext = createContext<BreweriesData>(
  new LocalBreweriesData()
);

export function BreweriesDataProvider({ children }: any) {
  return (
    <BreweriesDataContext.Provider value={new LocalBreweriesData()}>
      {children}
    </BreweriesDataContext.Provider>
  );
}

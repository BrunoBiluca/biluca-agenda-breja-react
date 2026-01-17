import { createContext } from "react";
import { MemoryBreweriesData } from "@app/testing/standalone-mode/memory-breweries-data";
import type { BreweriesData } from "./BreweriesData";
import { ExternalBreweriesData } from "./ExternalBreweriesData";

export function BreweriesDataFac() {
  const isStandalone = import.meta.env.VITE_STANDALONE === "true";
  return isStandalone ? new MemoryBreweriesData() : new ExternalBreweriesData();
}

export const BreweriesDataContext =
  createContext<BreweriesData>(BreweriesDataFac());

export function BreweriesDataProvider({ children }: any) {
  return (
    <BreweriesDataContext.Provider value={BreweriesDataFac()}>
      {children}
    </BreweriesDataContext.Provider>
  );
}

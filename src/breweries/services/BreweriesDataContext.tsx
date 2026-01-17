import { createContext } from "react";
import { LocalBreweriesData } from "@testing/standalone-mode/LocalBreweriesData";
import type { BreweriesData } from "./BreweriesData";
import { ExternalBreweriesData } from "./ExternalBreweriesData";

export function BreweriesDataFac() {
  const isStandalone = import.meta.env.VITE_STANDALONE === "true";
  return isStandalone ? new LocalBreweriesData() : new ExternalBreweriesData();
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

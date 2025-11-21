import { BreweriesDataContext } from "@app/breweries-data/BreweriesDataContext";

export const MockBreweriesDataContext = ({ children, mockValue }: any) => {
  return (
    <BreweriesDataContext.Provider value={mockValue}>
      {children}
    </BreweriesDataContext.Provider>
  );
};

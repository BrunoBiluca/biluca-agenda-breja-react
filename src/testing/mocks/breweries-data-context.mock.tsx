import { BreweriesDataContext } from "@core/breweries/breweries-data-context";

export const MockBreweriesDataContext = ({ children, mockValue }: any) => {
  return (
    <BreweriesDataContext.Provider value={mockValue}>
      {children}
    </BreweriesDataContext.Provider>
  );
};

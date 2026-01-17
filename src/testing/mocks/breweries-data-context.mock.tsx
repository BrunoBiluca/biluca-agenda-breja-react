import { BreweriesDataContext } from "@app/breweries/services/BreweriesDataContext";

export const MockBreweriesDataContext = ({ children, mockValue }: any) => {
  return (
    <BreweriesDataContext.Provider value={mockValue}>
      {children}
    </BreweriesDataContext.Provider>
  );
};

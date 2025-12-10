import { useContext, useEffect, useState } from "react";
import { BreweryItem } from "./brewery-item";
import { BreweriesDataContext } from "@app/breweries-data/BreweriesDataContext";

export function Breweries() {
  const data = useContext(BreweriesDataContext);
  const [breweries, setBreweries] = useState<any[] | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      setBreweries(await data.getAll());
    };

    fetchData();

    return () => {};
  }, []);

  return (
    <>
      <h2 className="mb-3">Cervejarias</h2>
      {breweries === undefined ? (
        <div role="status" aria-label="Loading">
          <span>Loading...</span>
        </div>
      ) : breweries.length === 0 ? (
        <p>Nenhuma cervejaria encontrada</p>
      ) : (
        <div
          className="container grid max-w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          role="list"
        >
          {breweries.map((brewery) => (
            <BreweryItem key={brewery.id} brewery={brewery} />
          ))}
        </div>
      )}
    </>
  );
}

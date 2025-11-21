import { useContext, useEffect, useState } from "react";
import { BreweryItem } from "./BreweryItem";
import { BreweriesDataContext } from "@app/breweries-data/BreweriesDataContext";

export function Breweries() {
  const data = useContext(BreweriesDataContext);
  const [isLoading, setIsLoading] = useState(true);
  const [breweries, setBreweries] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setBreweries(await data.getAll());
      setIsLoading(false);
    };

    fetchData();

    return () => {};
  }, []);

  return (
    <>
      <h2>Cervejarias</h2>
      {isLoading ? (
        <div role="status" aria-label="Loading">
          <span>Loading...</span>
        </div>
      ) : (
        <div className="container grid grid-cols-4 gap-4">
          {breweries.map((brewery) => (
            <BreweryItem key={brewery.id} brewery={brewery} />
          ))}
        </div>
      )}
    </>
  );
}

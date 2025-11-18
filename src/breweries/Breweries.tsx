import { useContext, useEffect, useState } from "react";
import { BreweryItem } from "./BreweryItem";
import { BreweriesDataContext } from "src/breweries-data/BreweriesDataContext";

export function Breweries() {
  const data = useContext(BreweriesDataContext);
  const [breweries, setBreweries] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setBreweries(await data.getAll());
    };

    fetchData();

    return () => {};
  }, []);

  return (
    <>
      <h2>Cervejarias</h2>
      <div className="container grid grid-cols-4 gap-4">
        {breweries.map((brewery) => (
          <BreweryItem key={brewery.id} brewery={brewery} />
        ))}
      </div>
    </>
  );
}

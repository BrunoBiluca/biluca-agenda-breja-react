import { BreweryItem } from "./BreweryItem";

export function Breweries() {
  return (
    <>
      <h2>Cervejarias</h2>
      <div className="container grid grid-cols-4 gap-4">
        <BreweryItem />
        <BreweryItem />
        <BreweryItem />
        <BreweryItem />
      </div>
    </>
  );
}

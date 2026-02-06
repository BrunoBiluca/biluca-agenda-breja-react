import { useEffect, useState } from "react";
import { BreweryItem } from "./brewery-item";
import { useBreweriesData } from "@core/breweries/breweries-data-context";
import type { Brewery } from "@core/breweries/Brewery.model";
import { Spinner } from "@ui/spinner";

export function Breweries() {
  const data = useBreweriesData();
  const [breweries, setBreweries] = useState<Brewery[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(false);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    setLoading(true);
    const recentBreweries = await data.getPage(page);
    setBreweries([...breweries, ...recentBreweries]);
    setLoading(false);

    if (recentBreweries.length < data.pageSize) {
      setHasMore(false);
      return;
    }

    setPage(page + 1);
    setHasMore(true);
  };

  useEffect(() => {
    fetchData();
    return () => {};
  }, []);

  return (
    <>
      <h2 className="mb-3">Cervejarias</h2>
      {!hasMore && loading ? (
        <div
          role="status"
          aria-label="Loading"
          className="flex h-[200px] flex-col items-center justify-center"
        >
          <Spinner />
          <span className="mb-3 text-center text-sm text-gray-500">
            Carregando cervejarias...
          </span>
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
      {hasMore && (
        <>
          <div className="m-4 flex justify-center align-middle">
            {loading && (
              <div className="flex h-[200px] flex-col items-center justify-center">
                <Spinner />
                <span className="mb-3 text-center text-sm text-gray-500">
                  Carregando cervejarias...
                </span>
              </div>
            )}
          </div>
          <div className="m-4 flex justify-center align-middle">
            <button
              className="bg-orange-base flex items-center gap-2 rounded-lg border border-gray-500 px-3 py-2 transition hover:cursor-pointer hover:bg-gray-100"
              onClick={fetchData}
            >
              <span>Carregar mais</span>
            </button>
          </div>
        </>
      )}
    </>
  );
}

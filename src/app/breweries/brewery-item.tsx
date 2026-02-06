import { Card, CardDescription, CardHeader, CardTitle } from "@ui/card";
import { NavLink } from "react-router";
import type { Brewery } from "../../core/breweries/Brewery.model";

export function BreweryItem({ brewery }: { brewery: Brewery }) {
  return (
    <NavLink to={`/${brewery.id}`} role="listitem">
      <Card role="listitem">
        <img
          className="rounded-t-lg"
          src="https://placehold.co/600x400"
          alt=""
        />
        <CardHeader className="p-6">
          <CardTitle>{brewery.name}</CardTitle>
          <CardDescription className="text-gray-500">
            {brewery.address_1}
          </CardDescription>
        </CardHeader>
      </Card>
    </NavLink>
  );
}

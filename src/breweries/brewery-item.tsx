import { Card, CardDescription, CardHeader, CardTitle } from "@ui/card";
import { NavLink } from "react-router";

export function BreweryItem({ brewery }: any) {
  return (
    <NavLink to={`/${brewery.id}`} role="listitem">
      <Card role="listitem">
        <img src="https://placehold.co/600x400" />
        <CardHeader>
          <CardTitle>{brewery.name}</CardTitle>
          <CardDescription>{brewery.address_1}</CardDescription>
        </CardHeader>
      </Card>
    </NavLink>
  );
}

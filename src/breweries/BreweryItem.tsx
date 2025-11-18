import { Card, CardDescription, CardHeader, CardTitle } from "@ui/card";

export function BreweryItem({ brewery }: any) {
  return (
    <Card>
      <img src="https://placehold.co/600x400" />
      <CardHeader>
        <CardTitle>{brewery.name}</CardTitle>
        <CardDescription>{brewery.address_1}</CardDescription>
      </CardHeader>
    </Card>
  );
}

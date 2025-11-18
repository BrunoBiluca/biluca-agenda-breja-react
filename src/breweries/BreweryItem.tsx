import { Card, CardDescription, CardHeader, CardTitle } from "@ui/card";

export function BreweryItem() {
  return (
    <Card>
      <img src="https://placehold.co/600x400" />
      <CardHeader>
        <CardTitle>Cervejaria do Alemão</CardTitle>
        <CardDescription>Rua Joaquim Policarpio da Costa, 543</CardDescription>
      </CardHeader>{" "}
    </Card>
  );
}

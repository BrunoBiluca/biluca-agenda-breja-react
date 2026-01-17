import type { Brewery } from "./Brewery.model";

export abstract class BreweriesData {
  abstract get(breweryId: string): Promise<Brewery>;
  abstract getAll(): Promise<Brewery[]>;
}

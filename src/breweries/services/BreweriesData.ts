import type { Brewery } from "./Brewery.model";

export abstract class BreweriesData {
  abstract getAll(): Promise<Brewery[]>;
}

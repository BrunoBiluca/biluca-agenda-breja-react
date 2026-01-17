import type { BreweriesData } from "./BreweriesData";
import type { Brewery } from "./Brewery.model";

export class ExternalBreweriesData implements BreweriesData {
  async get(breweryId: string): Promise<Brewery> {
    return this.getAll().then(
      (breweries) => breweries.find((brewery) => brewery.id === breweryId)!,
    );
  }

  async getAll(): Promise<Brewery[]> {
    try {
      const result = await fetch("https://api.openbrewerydb.org/v1/breweries");
      const json = await result.json();
      return json.map((brewery: any) => ({
        id: brewery.id,
        name: brewery.name,
        brewery_type: brewery.brewery_type,
        address_1: brewery.address_1,
        address_2: brewery.address_2,
        address_3: brewery.address_3,
        city: brewery.city,
        state_province: brewery.state,
        postal_code: brewery.postal_code,
        country: brewery.country,
        longitude: brewery.longitude,
        latitude: brewery.latitude,
        phone: brewery.phone,
        website_url: brewery.website_url,
        state: brewery.state,
        street: brewery.street,
      }));
    } catch (error) {
      console.log(error);
      return [];
    }
  }
}

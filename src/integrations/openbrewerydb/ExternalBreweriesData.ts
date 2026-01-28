import { BreweriesData } from "../../breweries/services/BreweriesData";
import type { Brewery } from "../../breweries/services/Brewery.model";

export class OpenBreweryDB extends BreweriesData {
  async get(breweryId: string): Promise<Brewery> {
    return this.getAll().then(
      (breweries) => breweries.find((brewery) => brewery.id === breweryId)!,
    );
  }

  async getPage(page: number): Promise<Brewery[]> {
    try {
      const result = await fetch(
        `https://api.openbrewerydb.org/v1/breweries?page=${page}&per_page=${this.pageSize}`,
      );
      const json = await result.json();
      return json.map(this.mapper);
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  async getAll(): Promise<Brewery[]> {
    try {
      const result = await fetch("https://api.openbrewerydb.org/v1/breweries");
      const json = await result.json();
      return json.map(this.mapper);
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  private mapper(brewery: Brewery) {
    return {
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
    };
  }
}

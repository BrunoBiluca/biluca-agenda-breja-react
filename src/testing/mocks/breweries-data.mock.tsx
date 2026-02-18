import { BreweriesData } from "@app/core/breweries/BreweriesData";
import type { Brewery } from "@app/core/breweries/Brewery.model";

export class MockBreweriesData extends BreweriesData {
  public items: any[] = [
    {
      id: "5128df48-79fc-4f0f-8b52-d06be54d0cec",
      name: "(405) Brewing Co",
      brewery_type: "micro",
      address_1: "1716 Topeka St",
      address_2: null,
      address_3: null,
      city: "Norman",
      state_province: "Oklahoma",
      postal_code: "73069-8224",
      country: "United States",
      longitude: -97.46818222,
      latitude: 35.25738891,
      phone: "4058160490",
      website_url: "http://www.405brewing.com",
      state: "Oklahoma",
      street: "1716 Topeka St",
    },
    {
      id: "9c5a66c8-cc13-416f-a5d9-0a769c87d318",
      name: "(512) Brewing Co",
      brewery_type: "micro",
      address_1: "407 Radam Ln Ste F200",
      address_2: null,
      address_3: null,
      city: "Austin",
      state_province: "Texas",
      postal_code: "78745-1197",
      country: "United States",
      longitude: -97.46818222,
      latitude: 35.25738891,
      phone: "5128160490",
      website_url: "http://www.512brewing.com",
      state: "Texas",
      street: "407 Radam Ln Ste F200",
    },
  ];
  constructor(private noData: boolean = false) {
    super();
  }

  getPage(page: number): Promise<Brewery[]> {
    if (this.noData) {
      return Promise.resolve([]);
    }
    return Promise.resolve([
      ...this.items.splice((page - 1) * this.pageSize, this.pageSize),
    ]);
  }

  getAll() {
    if (this.noData) {
      return Promise.resolve([]);
    }
    return Promise.resolve([...this.items]);
  }

  get(breweryId: string): Promise<Brewery> {
    return Promise.resolve(
      this.items.find((brewery) => brewery.id === breweryId)!,
    );
  }
}

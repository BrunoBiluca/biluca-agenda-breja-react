import { BreweriesData } from "@app/core/breweries/BreweriesData";
import { type Brewery } from "@app/core/breweries/Brewery.model";
import { delay } from "../standalone-functions";
import {
  defaultSetting,
  getSettingBoolean,
  getSettingNumber,
} from "../standalone-mode";
import { CatastrophicExternalError, ExternalError } from "@lib/external-error";

const breweriesCountKey = "breweries-count";
const getBreweriesFailedFirstTimeKey = "get-breweries-failed-first-time";
const getBreweriesServerErrorKey = "get-breweries-server-error";
const getBreweriesDelayKey = "get-breweries";

export class MemoryBreweriesData extends BreweriesData {
  breweries: Brewery[] = [];
  isFirstTime = 0;

  constructor() {
    super();
    defaultSetting(breweriesCountKey, 10);
    defaultSetting(getBreweriesFailedFirstTimeKey, false);
    defaultSetting(getBreweriesServerErrorKey, false);
    const count = getSettingNumber(breweriesCountKey);
    this.breweries = Array.from({ length: count }, mockBreweriesData);
  }

  get(breweryId: string): Promise<Brewery> {
    const brewery = this.breweries.find((brewery) => brewery.id === breweryId);

    if (!brewery) {
      return Promise.reject(new Error("Brewery not found"));
    }
    return Promise.resolve(brewery!);
  }

  getPage(page: number): Promise<Brewery[]> {
    return delay(() => {
      if (getSettingBoolean(getBreweriesServerErrorKey)) {
        return Promise.reject(new CatastrophicExternalError("get breweries"));
      }

      if (
        getSettingBoolean(getBreweriesFailedFirstTimeKey) &&
        this.isFirstTime <= 1
      ) {
        this.isFirstTime += 1;
        return Promise.reject(new ExternalError("get breweries"));
      }
      return this.breweries.slice(
        (page - 1) * this.pageSize,
        page * this.pageSize,
      );
    }, getBreweriesDelayKey);
  }

  getAll(): Promise<Brewery[]> {
    return delay(() => [...this.breweries], getBreweriesDelayKey);
  }
}

function mockBreweriesData(): Brewery {
  const id = crypto.randomUUID();
  const name = `Bar do ${id.split("-")[0]}`;
  return {
    id: id,
    name: name,
    brewery_type: "micro",
    address_1: `Endereço de ${name}`,
    address_2: null,
    address_3: null,
    city: "Austin",
    state_province: "Texas",
    postal_code: "78745-1197",
    country: "Estragos Unidos",
    longitude: null,
    latitude: null,
    phone: "5129211545",
    website_url: "http://www.512brewing.com",
    state: "Texas",
    street: "407 Radam Ln Ste F200",
  };
}

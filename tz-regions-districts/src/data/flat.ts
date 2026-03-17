import type { FlatDistrict } from "../types";
import { regionsWithDistricts } from "./regions";

export const districts: FlatDistrict[] = regionsWithDistricts.flatMap((region) =>
  region.districts.map((district) => ({
    ...district,
    region: region.name,
    regionCode: region.code
  }))
);

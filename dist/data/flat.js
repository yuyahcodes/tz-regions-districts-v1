import { regionsWithDistricts } from "./regions";
export const districts = regionsWithDistricts.flatMap((region) => region.districts.map((district) => ({
    ...district,
    region: region.name,
    regionCode: region.code
})));

export * from "./types";
export { regionsWithDistricts, regionNames } from "./data/regions";
export { districts } from "./data/flat";
export declare function getRegions(): string[];
export declare function getDistricts(): string[];
export declare function getDistrictsByRegion(regionName: string): string[];
export declare function findRegionByDistrict(districtName: string): string | null;
export declare function isValidRegion(regionName: string): boolean;
export declare function isValidDistrict(districtName: string): boolean;

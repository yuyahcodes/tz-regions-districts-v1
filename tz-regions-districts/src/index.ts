import { districts } from "./data/flat";
import { regionNames, regionsWithDistricts } from "./data/regions";

export * from "./types";
export { regionsWithDistricts, regionNames } from "./data/regions";
export { districts } from "./data/flat";


export function getRegions(): string[] {
  return [...new Set(regionNames)];
}

export function getDistricts(): string[] {
  return districts.map((district) => district.name);
}

export function getDistrictsByRegion(regionName: string): string[] {
  const normalized = regionName.trim().toLowerCase();

  return districts
    .filter((district) => district.region.toLowerCase() === normalized)
    .map((district) => district.name);
}

export function findRegionByDistrict(districtName: string): string | null {
  const normalized = districtName.trim().toLowerCase();
  const match = districts.find((district) => district.name.toLowerCase() === normalized);
  return match?.region ?? null;
}

export function isValidRegion(regionName: string): boolean {
  const normalized = regionName.trim().toLowerCase();
  return regionNames.some((region) => region.toLowerCase() === normalized);
}

export function isValidDistrict(districtName: string): boolean {
  const normalized = districtName.trim().toLowerCase();
  return districts.some((district) => district.name.toLowerCase() === normalized);
}

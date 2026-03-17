import { districts } from "./data/flat";
import { regionNames } from "./data/regions";
export * from "./types";
export { regionsWithDistricts, regionNames } from "./data/regions";
export { districts } from "./data/flat";
export function getRegions() {
    return [...new Set(regionNames)];
}
export function getDistricts() {
    return districts.map((district) => district.name);
}
export function getDistrictsByRegion(regionName) {
    const normalized = regionName.trim().toLowerCase();
    return districts
        .filter((district) => district.region.toLowerCase() === normalized)
        .map((district) => district.name);
}
export function findRegionByDistrict(districtName) {
    const normalized = districtName.trim().toLowerCase();
    const match = districts.find((district) => district.name.toLowerCase() === normalized);
    return match?.region ?? null;
}
export function isValidRegion(regionName) {
    const normalized = regionName.trim().toLowerCase();
    return regionNames.some((region) => region.toLowerCase() === normalized);
}
export function isValidDistrict(districtName) {
    const normalized = districtName.trim().toLowerCase();
    return districts.some((district) => district.name.toLowerCase() === normalized);
}

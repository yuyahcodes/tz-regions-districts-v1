# tz-regions-districts

A starter npm package for Tanzania regions and their respective districts.

## Install

```bash
npm install tz-regions-districts
```

## Usage

```ts
import {
  regionsWithDistricts,
  districts,
  getRegions,
  getDistrictsByRegion,
  findRegionByDistrict,
  isValidRegion,
  isValidDistrict
} from "tz-regions-districts";

console.log(getRegions());
console.log(getDistrictsByRegion("Dar es Salaam"));
console.log(findRegionByDistrict("Kinondoni"));
console.log(isValidRegion("Dodoma"));
console.log(isValidDistrict("Arusha City"));
```

## Exports

- `regionsWithDistricts`
- `districts`
- `getRegions()`
- `getDistricts()`
- `getDistrictsByRegion(regionName)`
- `findRegionByDistrict(districtName)`
- `isValidRegion(regionName)`
- `isValidDistrict(districtName)`

## Important note

This package scaffold is ready to publish, but the district dataset is still a **starter dataset**.
The region list is aligned to the 2022 Tanzania PHC/NBS-era region naming, while district coverage in the included file is only partially filled so you can start coding immediately and then finish data verification before publishing `1.0.0`.

## Suggested next step before publish

Replace `src/data/regions.ts` with a fully verified district list from your preferred official or maintained source, then run:

```bash
npm run build
npm publish --access public
```

## Sources used for package direction

- Tanzania National Bureau of Statistics 2022 PHC administrative units publications
- Public community-maintained Tanzania region/district datasets used only as scaffolding input

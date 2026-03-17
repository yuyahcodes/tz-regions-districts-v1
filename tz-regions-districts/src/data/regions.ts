import type { Region } from "../types";

/**
 * Starter dataset for Tanzania regions and districts.
 *
 * Regions list is aligned with the 2022 PHC/NBS-era region naming.
 * District entries below are intentionally a starter subset so the package structure,
 * API, and typings are ready immediately. Expand/verify districts before publishing
 * a 1.0.0 package that claims full national coverage.
 */
export const regionsWithDistricts: Region[] = [
  {
    name: "Arusha",
    code: "TZ-01",
    districts: [
      { name: "Arusha City", type: "city" },
      { name: "Arusha District", type: "district" },
      { name: "Karatu", type: "district" },
      { name: "Longido", type: "district" },
      { name: "Meru", type: "district" },
      { name: "Monduli", type: "district" },
      { name: "Ngorongoro", type: "district" }
    ]
  },
  {
    name: "Dar es Salaam",
    code: "TZ-02",
    districts: [
      { name: "Ilala", type: "municipal" },
      { name: "Kinondoni", type: "municipal" },
      { name: "Kigamboni", type: "municipal" },
      { name: "Temeke", type: "municipal" },
      { name: "Ubungo", type: "municipal" }
    ]
  },
  {
    name: "Dodoma",
    code: "TZ-03",
    districts: [
      { name: "Bahi", type: "district" },
      { name: "Chamwino", type: "district" },
      { name: "Chemba", type: "district" },
      { name: "Dodoma City", type: "city" },
      { name: "Kondoa", type: "district" },
      { name: "Kongwa", type: "district" },
      { name: "Mpwapwa", type: "district" }
    ]
  },
  {
    name: "Geita",
    code: "TZ-27",
    districts: [
      { name: "Bukombe", type: "district" },
      { name: "Chato", type: "district" },
      { name: "Geita", type: "district" },
      { name: "Mbogwe", type: "district" },
      { name: "Nyang'hwale", type: "district" }
    ]
  },
  {
    name: "Iringa",
    code: "TZ-04",
    districts: [
      { name: "Iringa Municipal", type: "municipal" },
      { name: "Kilolo", type: "district" },
      { name: "Mafinga Town", type: "town" },
      { name: "Mufindi", type: "district" }
    ]
  },
  {
    name: "Kagera",
    code: "TZ-05",
    districts: [
      { name: "Biharamulo", type: "district" },
      { name: "Bukoba Municipal", type: "municipal" },
      { name: "Bukoba District", type: "district" },
      { name: "Kakonko", type: "district" },
      { name: "Karagwe", type: "district" },
      { name: "Kyerwa", type: "district" },
      { name: "Missenyi", type: "district" },
      { name: "Muleba", type: "district" },
      { name: "Ngara", type: "district" }
    ]
  },
  {
    name: "Katavi",
    code: "TZ-28",
    districts: [
      { name: "Mlele", type: "district" },
      { name: "Mpanda Municipal", type: "municipal" },
      { name: "Mpanda District", type: "district" },
      { name: "Tanganyika", type: "district" }
    ]
  },
  {
    name: "Kigoma",
    code: "TZ-08",
    districts: [
      { name: "Buhigwe", type: "district" },
      { name: "Kakonko", type: "district" },
      { name: "Kasulu District", type: "district" },
      { name: "Kasulu Town", type: "town" },
      { name: "Kibondo", type: "district" },
      { name: "Kigoma District", type: "district" },
      { name: "Kigoma Ujiji", type: "municipal" },
      { name: "Uvinza", type: "district" }
    ]
  },
  {
    name: "Kilimanjaro",
    code: "TZ-09",
    districts: [
      { name: "Hai", type: "district" },
      { name: "Moshi District", type: "district" },
      { name: "Moshi Municipal", type: "municipal" },
      { name: "Mwanga", type: "district" },
      { name: "Rombo", type: "district" },
      { name: "Same", type: "district" },
      { name: "Siha", type: "district" }
    ]
  },
  { name: "Lindi", code: "TZ-12", districts: [] },
  { name: "Manyara", code: "TZ-26", districts: [] },
  { name: "Mara", code: "TZ-13", districts: [] },
  { name: "Mbeya", code: "TZ-14", districts: [] },
  { name: "Morogoro", code: "TZ-16", districts: [] },
  { name: "Mtwara", code: "TZ-17", districts: [] },
  { name: "Mwanza", code: "TZ-18", districts: [] },
  { name: "Njombe", code: "TZ-29", districts: [] },
  { name: "Pemba North", code: "TZ-06", districts: [] },
  { name: "Pemba South", code: "TZ-10", districts: [] },
  { name: "Pwani", code: "TZ-19", districts: [] },
  { name: "Rukwa", code: "TZ-20", districts: [] },
  { name: "Ruvuma", code: "TZ-21", districts: [] },
  { name: "Shinyanga", code: "TZ-22", districts: [] },
  { name: "Simiyu", code: "TZ-30", districts: [] },
  { name: "Singida", code: "TZ-23", districts: [] },
  { name: "Songwe", code: "TZ-31", districts: [] },
  { name: "Tabora", code: "TZ-24", districts: [] },
  { name: "Tanga", code: "TZ-25", districts: [] },
  { name: "Unguja North", code: "TZ-07", districts: [] },
  { name: "Unguja South", code: "TZ-11", districts: [] },
  { name: "Unguja West", code: "TZ-15", districts: [] }
];

export const regionNames = regionsWithDistricts.map((region) => region.name);

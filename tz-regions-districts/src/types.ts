export interface District {
  name: string;
  code?: string;
  type?: "district" | "city" | "municipal" | "town" | "council";
}

export interface Region {
  name: string;
  code?: string;
  districts: District[];
}

export interface FlatDistrict extends District {
  region: string;
  regionCode?: string;
}

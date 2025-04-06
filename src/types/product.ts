export interface Vendor {
  id: string;
  name: string;
  url: string;
  currentPrice: number;
  maxPrice: number;
  minPrice: number;
  lastUpdated: string;
  warranty: number; // in months
  originalTitle: string; // Original product title from vendor
}

export interface ProductData {
  id: string;
  title: string;
  vendors: Vendor[];
}

export type SortOption =
  | "lowest-price"
  | "highest-price"
  | "highest-warranty"
  | "lowest-warranty";

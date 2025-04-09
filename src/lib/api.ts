export interface SearchResult {
  _id: string;
  name: string;
  vendor: string;
  price_low: number;
  price_high: string;
  warranty: string;
  category: string;
  available: boolean;
  link: string;
  created_at: string;
  updated_at: string;
  standard_name: string;
  score: number;
}

export interface SearchResponse {
  status: number;
  success: boolean;
  message: string;
  length: number;
  data: SearchResult[];
}

export interface PaginationInfo {
  total: number;
  page: number;
  limit: number;
  pages: number;
}

export interface AllProductsResponse {
  status: number;
  success: boolean;
  message: string;
  pagination: PaginationInfo;
  length: number;
  data: ProductItem[];
}

export interface ProductItem {
  name?: string;
  vendor?: string;
  price_low?: number;
  price_high?: string;
  warranty?: string;
  category?: string;
  available?: boolean;
  link?: string;
  created_at?: string;
  updated_at?: string;
  standard_name: string;
  vendors_count?: number; // Added field to show number of vendors
  best_price?: number;
  best_price_vendor?: string;
}

export const getPayloadHash = async (payload: unknown) => {
  const body = JSON.stringify(payload);
  const encoder = new TextEncoder();
  const data = encoder.encode(body);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
  return hashHex;
};

export async function searchProducts(name: string): Promise<SearchResponse> {
  try {
    const payload = { name };
    const payloadHash = await getPayloadHash(payload);
    const apiBaseUrl =
      import.meta.env["VITE_API_URL"] || "http://127.0.0.1:3001";

    const response = await fetch(`${apiBaseUrl}/api/product/searchProduct`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-amz-content-sha256": payloadHash,
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!data.success) {
      throw new Error(data.message || "Failed to search products");
    }

    return data;
  } catch (error) {
    console.error("Error searching products:", error);
    throw error;
  }
}

export async function getProductDetails(name: string): Promise<SearchResponse> {
  try {
    const payload = { name };
    const payloadHash = await getPayloadHash(payload);
    const apiBaseUrl =
      import.meta.env["VITE_API_URL"] || "http://127.0.0.1:3001";

    const response = await fetch(`${apiBaseUrl}/api/product/getProduct`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-amz-content-sha256": payloadHash,
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!data.success) {
      throw new Error(data.message || "Failed to fetch product details");
    }

    return data;
  } catch (error) {
    console.error("Error fetching product details:", error);
    throw error;
  }
}

export async function getAllProducts(
  page: number = 1,
  limit: number = 10
): Promise<AllProductsResponse> {
  try {
    const apiBaseUrl =
      import.meta.env["VITE_API_URL"] || "http://127.0.0.1:3001";

    const response = await fetch(
      `${apiBaseUrl}/api/product/getAllProducts?page=${page}&limit=${limit}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );

    const data = await response.json();

    if (!data.success) {
      throw new Error(data.message || "Failed to fetch all products");
    }

    return data;
  } catch (error) {
    console.error("Error fetching all products:", error);
    throw error;
  }
}

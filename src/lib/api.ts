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

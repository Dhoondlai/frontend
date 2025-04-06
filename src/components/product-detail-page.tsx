"use client";

import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  Github,
  Search,
  ArrowUpDown,
  ExternalLink,
  ChevronDown,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getProductDetails } from "@/lib/api";
import { VendorCard } from "./vendor-card";
import { formatPrice, formatDate, getTimeSinceUpdate } from "@/lib/utils";
import { ProductData, Vendor, SortOption } from "@/types/product";

export default function ProductDetailPage() {
  const [searchParams] = useSearchParams();
  const [product, setProduct] = useState<ProductData | null>(null);
  const [sortedVendors, setSortedVendors] = useState<Vendor[]>([]);
  const [sortOption, setSortOption] = useState<SortOption>("lowest-price");
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [firstBestPriceFound, setFirstBestPriceFound] =
    useState<boolean>(false);

  // Get the product name from URL query parameter
  useEffect(() => {
    const productName = searchParams.get("name");
    if (productName) {
      fetchProductDetails(productName);
    } else {
      setIsLoading(false);
    }
  }, [searchParams]);

  // Fetch product details from API
  const fetchProductDetails = async (name: string) => {
    setIsLoading(true);
    try {
      const response = await getProductDetails(name);

      // Transform API response into our ProductData format
      const productData: ProductData = {
        id: name.replace(/\s+/g, "-").toLowerCase(),
        title: name,
        vendors: response.data.map((item) => ({
          id: item.vendor.toLowerCase().replace(/\s+/g, "-"),
          name: item.vendor,
          url: item.link,
          currentPrice: parseInt(item.price_high, 10),
          maxPrice: parseInt(item.price_high, 10),
          minPrice: item.price_low,
          lastUpdated: item.updated_at,
          // Handle warranty as string for now, will be updated to number later
          warranty: parseInt(item.warranty) || 0,
          originalTitle: item.name,
        })),
      };

      setProduct(productData);

      // Initially sort by lowest price
      const sortedByPrice = [...productData.vendors].sort(
        (a, b) => a.currentPrice - b.currentPrice
      );
      setSortedVendors(sortedByPrice);
    } catch (error) {
      console.error("Failed to fetch product details:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Get best price vendor
  const bestPriceVendor = product?.vendors.length
    ? product.vendors.reduce((prev, current) =>
        prev.currentPrice < current.currentPrice ? prev : current
      )
    : null;

  const lowestPrice = bestPriceVendor?.currentPrice;

  // Sort vendors based on selected option
  useEffect(() => {
    if (product?.vendors) {
      const sorted = [...product.vendors];

      switch (sortOption) {
        case "lowest-price":
          sorted.sort((a, b) => a.currentPrice - b.currentPrice);
          break;
        case "highest-price":
          sorted.sort((a, b) => b.currentPrice - a.currentPrice);
          break;
        case "highest-warranty":
          sorted.sort((a, b) => b.warranty - a.warranty);
          break;
        case "lowest-warranty":
          sorted.sort((a, b) => a.warranty - b.warranty);
          break;
      }

      setSortedVendors(sorted);
    }
  }, [sortOption, product]);

  // Reset the flag when sorted vendors or lowest price changes
  useEffect(() => {
    setFirstBestPriceFound(false);
  }, [sortedVendors, lowestPrice]);

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white backdrop-blur-sm bg-opacity-80">
        <div className="container mx-auto max-w-7xl flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/dhoondlai.svg"
              alt="Dhoondlai Logo"
              className="h-15 w-15 sm:h-15 sm:w-15"
            />
          </Link>

          {/* Search bar in header */}
          <div className="hidden md:flex w-1/3 mx-4">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="search"
                placeholder="Search for PC parts..."
                className="w-full pl-9 py-2 text-sm rounded-lg border-gray-200"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <nav className="hidden md:flex gap-6">
            <Link
              to="/vendor-status"
              className="text-sm font-medium hover:text-yellow-600 transition-colors"
            >
              Vendor Status
            </Link>
            <Link
              to="/contribute"
              className="text-sm font-medium hover:text-yellow-600 transition-colors"
            >
              Contribute
            </Link>
            <Link
              to="#products"
              className="text-sm font-medium hover:text-yellow-600 transition-colors"
            >
              All Products
            </Link>
          </nav>

          <Button
            variant="outline"
            className="hidden md:flex border-yellow-600 text-yellow-600 hover:bg-yellow-50 transition-all"
            onClick={() =>
              window.open("https://github.com/Dhoondlai", "_blank")
            }
          >
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Button>

          <Button variant="ghost" size="sm" className="md:hidden">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>

        {/* Mobile search bar */}
        <div className="md:hidden px-4 pb-3">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="search"
              placeholder="Search for PC parts..."
              className="w-full pl-9 py-2 text-sm rounded-lg border-gray-200"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {isLoading ? (
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-yellow-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-600">Loading product information...</p>
            </div>
          </div>
        ) : product ? (
          <>
            {/* Sticky Product Header */}
            <div className="sticky top-16 z-40 bg-white border-b shadow-sm">
              <div className="container mx-auto max-w-7xl px-4 py-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                      {product.title}
                    </h1>
                    {bestPriceVendor && (
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-lg font-semibold text-yellow-600">
                          Best price:{" "}
                          {formatPrice(bestPriceVendor.currentPrice)}
                        </span>
                        <span className="text-sm text-gray-600">
                          from{" "}
                          <span className="font-medium">
                            {bestPriceVendor.name}
                          </span>
                        </span>
                        <Button
                          variant="link"
                          size="sm"
                          className="text-yellow-600 p-0 h-auto"
                          onClick={() =>
                            window.open(bestPriceVendor.url, "_blank")
                          }
                        >
                          Buy here <ExternalLink className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                    )}
                  </div>

                  {/* Sort dropdown */}
                  <div className="flex items-center">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="gap-2">
                          <ArrowUpDown className="h-4 w-4" />
                          Sort by: {sortOption.replace("-", " ")}
                          <ChevronDown className="h-4 w-4 ml-1" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-48">
                        <DropdownMenuItem
                          onClick={() => setSortOption("lowest-price")}
                        >
                          Sort by lowest price
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => setSortOption("highest-price")}
                        >
                          Sort by highest price
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => setSortOption("highest-warranty")}
                        >
                          Sort by highest warranty
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => setSortOption("lowest-warranty")}
                        >
                          Sort by lowest warranty
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </div>
            </div>

            {/* Vendor Cards Section */}
            <section className="py-8">
              <div className="container mx-auto max-w-4xl px-4">
                <div className="flex flex-col space-y-6">
                  {sortedVendors.length > 0 ? (
                    sortedVendors.map((vendor, index) => {
                      // Determine if this vendor has the best price and is the first one with that price
                      const isBestPrice =
                        vendor.currentPrice === lowestPrice &&
                        sortedVendors.findIndex(
                          (v) => v.currentPrice === lowestPrice
                        ) === index;

                      return (
                        <VendorCard
                          key={`${vendor.id}-${vendor.currentPrice}`}
                          vendor={vendor}
                          isBestPrice={isBestPrice}
                          formatPrice={formatPrice}
                          formatDate={formatDate}
                          getTimeSinceUpdate={getTimeSinceUpdate}
                        />
                      );
                    })
                  ) : (
                    <div className="text-center py-10">
                      <p className="text-gray-600">
                        No vendors found for this product
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </section>
          </>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-gray-700">
              Product not found
            </h2>
            <p className="mt-2 text-gray-600">
              Please try searching for another product.
            </p>
            <Button
              className="mt-6 bg-yellow-600 hover:bg-yellow-700 text-white"
              onClick={() => (window.location.href = "/")}
            >
              Return to Home
            </Button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="w-full border-t py-6 md:py-8 bg-white">
        <div className="container mx-auto max-w-7xl flex flex-col items-center justify-center gap-4 px-4 md:px-6 md:flex-row">
          <p className="text-center text-xs sm:text-sm text-gray-500">
            © {new Date().getFullYear()} Dhoondlai. All rights reserved.
          </p>
          <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
            <Link
              to="#"
              className="text-xs sm:text-sm font-medium text-gray-500 hover:text-yellow-600 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="#"
              className="text-xs sm:text-sm font-medium text-gray-500 hover:text-yellow-600 transition-colors"
            >
              Terms of Service
            </Link>
            <a
              href="https://github.com/Dhoondlai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm font-medium text-gray-500 hover:text-yellow-600 transition-colors"
            >
              GitHub
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

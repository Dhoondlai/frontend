"use client";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Github,
  Search,
  ArrowUpDown,
  ExternalLink,
  Clock,
  Shield,
  TrendingDown,
  TrendingUp,
  Store,
  ChevronDown,
  Tag,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Types
interface Vendor {
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

interface ProductData {
  id: string;
  title: string;
  vendors: Vendor[];
}

// Sample data
const sampleProduct: ProductData = {
  id: "intel-core-i7-13700k",
  title: "Intel Core i7-13700K Desktop Processor",
  vendors: [
    {
      id: "techmatched",
      name: "Techmatched",
      url: "https://techmatched.pk/product/intel-core-i7-13700k",
      currentPrice: 89999,
      maxPrice: 95000,
      minPrice: 85000,
      lastUpdated: "2023-04-05T12:30:00Z",
      warranty: 36,
      originalTitle:
        "Intel Core i7-13700K 16 Cores (8P+8E) Desktop Processor - LGA1700 Socket",
    },
    {
      id: "junaidtech",
      name: "Junaid Tech",
      url: "https://junaidtech.pk/product/intel-core-i7-13700k",
      currentPrice: 92500,
      maxPrice: 98000,
      minPrice: 90000,
      lastUpdated: "2023-04-04T10:15:00Z",
      warranty: 24,
      originalTitle: "Intel Core i7-13700K Processor 30M Cache, up to 5.40 GHz",
    },
    {
      id: "rbtechngames",
      name: "RB Tech N Games",
      url: "https://rbtechngames.com/product/intel-core-i7-13700k",
      currentPrice: 91000,
      maxPrice: 97000,
      minPrice: 88000,
      lastUpdated: "2023-04-05T09:45:00Z",
      warranty: 12,
      originalTitle:
        "Intel 13th Gen Core i7-13700K Desktop Processor (LGA 1700)",
    },
    {
      id: "czone",
      name: "CZone",
      url: "https://czone.com.pk/product/intel-core-i7-13700k",
      currentPrice: 90500,
      maxPrice: 96000,
      minPrice: 87000,
      lastUpdated: "2023-04-03T14:20:00Z",
      warranty: 36,
      originalTitle:
        "Intel Core i7-13700K Raptor Lake 16-Core (8P+8E) LGA 1700 Desktop Processor",
    },
    {
      id: "galaxy",
      name: "Galaxy",
      url: "https://galaxy.pk/product/intel-core-i7-13700k",
      currentPrice: 93000,
      maxPrice: 99000,
      minPrice: 91000,
      lastUpdated: "2023-04-02T16:10:00Z",
      warranty: 24,
      originalTitle:
        "Intel Core i7-13700K 13th Gen Processor with Integrated Graphics",
    },
  ],
};

// Sort types
type SortOption =
  | "lowest-price"
  | "highest-price"
  | "highest-warranty"
  | "lowest-warranty";

export default function ProductDetailPage() {
  const [product, setProduct] = useState<ProductData>(sampleProduct);
  const [sortedVendors, setSortedVendors] = useState<Vendor[]>(
    sampleProduct.vendors
  );
  const [sortOption, setSortOption] = useState<SortOption>("lowest-price");
  const [searchTerm, setSearchTerm] = useState("");

  // Get best price vendor
  const bestPriceVendor = product.vendors.reduce((prev, current) =>
    prev.currentPrice < current.currentPrice ? prev : current
  );

  // Format price in Pakistani Rupees
  const formatPrice = (price: number) => {
    return `Rs. ${price.toLocaleString()}`;
  };

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-PK", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // Sort vendors based on selected option
  useEffect(() => {
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
  }, [sortOption, product]);

  // Calculate time since last update
  const getTimeSinceUpdate = (dateString: string) => {
    const updateDate = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor(
      (now.getTime() - updateDate.getTime()) / (1000 * 60 * 60)
    );

    if (diffInHours < 24) {
      return `${diffInHours} hours ago`;
    } else {
      const diffInDays = Math.floor(diffInHours / 24);
      return `${diffInDays} days ago`;
    }
  };

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
              to="#status"
              className="text-sm font-medium hover:text-yellow-600 transition-colors"
            >
              Product Status
            </Link>
            <Link
              to="#about"
              className="text-sm font-medium hover:text-yellow-600 transition-colors"
            >
              About Us
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
        {/* Sticky Product Header */}
        <div className="sticky top-16 z-40 bg-white border-b shadow-sm">
          <div className="container mx-auto max-w-7xl px-4 py-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                  {product.title}
                </h1>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-lg font-semibold text-yellow-600">
                    Best price: {formatPrice(bestPriceVendor.currentPrice)}
                  </span>
                  <span className="text-sm text-gray-600">
                    from{" "}
                    <span className="font-medium">{bestPriceVendor.name}</span>
                  </span>
                  <Button
                    variant="link"
                    size="sm"
                    className="text-yellow-600 p-0 h-auto"
                    onClick={() => window.open(bestPriceVendor.url, "_blank")}
                  >
                    Buy here <ExternalLink className="ml-1 h-3 w-3" />
                  </Button>
                </div>
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

        {/* Vendor Cards - VERTICAL LAYOUT */}
        <section className="py-8">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="flex flex-col space-y-6">
              {sortedVendors.map((vendor) => (
                <Card
                  key={vendor.id}
                  className="overflow-hidden hover:shadow-md transition-shadow w-full"
                >
                  <CardContent className="p-0">
                    <div className="bg-yellow-50 p-4 flex items-center justify-between border-b">
                      <div className="flex items-center gap-2">
                        <Store className="h-5 w-5 text-yellow-600" />
                        <h3 className="font-semibold text-lg">{vendor.name}</h3>
                      </div>
                      {vendor.id === bestPriceVendor.id && (
                        <Badge className="bg-yellow-600">Best Price</Badge>
                      )}
                    </div>

                    <div className="p-6">
                      <div className="flex flex-wrap md:flex-nowrap justify-between items-center gap-4">
                        <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4">
                          <div className="text-2xl font-bold text-gray-900">
                            {formatPrice(vendor.currentPrice)}
                          </div>
                          <div className="flex flex-wrap gap-4">
                            <div className="flex items-center gap-1.5">
                              <TrendingUp className="h-4 w-4 text-red-500" />
                              <span className="text-gray-600">Max: </span>
                              <span className="font-medium">
                                {formatPrice(vendor.maxPrice)}
                              </span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <TrendingDown className="h-4 w-4 text-green-500" />
                              <span className="text-gray-600">Min: </span>
                              <span className="font-medium">
                                {formatPrice(vendor.minPrice)}
                              </span>
                            </div>
                          </div>
                        </div>
                        <Button
                          onClick={() => window.open(vendor.url, "_blank")}
                          className="bg-yellow-600 hover:bg-yellow-700 text-white"
                        >
                          Buy Now
                        </Button>
                      </div>

                      <div className="flex flex-col gap-3 mt-4 text-sm">
                        <div className="flex items-center gap-1.5">
                          <Clock className="h-4 w-4 text-gray-500" />
                          <span className="text-gray-600">Updated: </span>
                          <span className="font-medium">
                            {getTimeSinceUpdate(vendor.lastUpdated)}
                          </span>
                        </div>
                        <div className="flex items-start gap-1.5">
                          <Tag className="h-4 w-4 text-gray-500 mt-1" />
                          <div>
                            <span className="text-gray-600">
                              Original Product Title:{" "}
                            </span>
                            <span className="font-medium">
                              {vendor.originalTitle}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Shield className="h-4 w-4 text-gray-500" />
                          <span className="text-gray-600">Warranty: </span>
                          <span className="font-medium">
                            {vendor.warranty} months
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="bg-gray-50 px-6 py-3 text-xs text-gray-500">
                    Last checked on {formatDate(vendor.lastUpdated)}
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
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

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllProducts, type ProductItem } from "@/lib/api";
import { formatPrice } from "@/lib/utils";
import { Header } from "@/components/ui/header";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  Store,
  ShoppingBag,
  ExternalLink,
  Filter,
  ArrowUpDown,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Hardcoded categories that can be easily modified
const PRODUCT_CATEGORIES = {
  processor: "Processor",
  gpu: "GPU",
} as const;

// Hardcoded sort options
const SORT_OPTIONS = {
  default: "Default (A-Z)",
  price_min: "Lowest Price First",
  price_max: "Highest Price First",
  vendors_max: "Most Vendors First",
} as const;

type CategoryKey = keyof typeof PRODUCT_CATEGORIES;
type SortKey = keyof typeof SORT_OPTIONS;

export default function AllProductsPage() {
  const [products, setProducts] = useState<ProductItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [productsPerPage] = useState(12); // Number of products per page
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSort, setSelectedSort] = useState<SortKey>("default");
  const [showDelayedMessage, setShowDelayedMessage] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setShowDelayedMessage(false); // Reset delayed message

        // Set up delayed message timer
        const delayedMessageTimer = setTimeout(() => {
          setShowDelayedMessage(true);
        }, 2000);

        const sortParam = selectedSort === "default" ? undefined : selectedSort;
        const response = await getAllProducts(
          currentPage,
          productsPerPage,
          selectedCategory || undefined,
          sortParam
        );
        setProducts(response.data);
        setTotalPages(response.pagination.pages);
        setLoading(false);

        // Clear the timer if loading completes before 2 seconds
        clearTimeout(delayedMessageTimer);
        setShowDelayedMessage(false);
      } catch (err) {
        setError("Failed to load products. Please try again later.");
        setLoading(false);
        setShowDelayedMessage(false);
        console.error(err);
      }
    };

    fetchProducts();
  }, [currentPage, productsPerPage, selectedCategory, selectedSort]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page when changing category
  };

  const handleSortChange = (sort: SortKey) => {
    setSelectedSort(sort);
    setCurrentPage(1); // Reset to first page when changing sort
  };

  const renderPagination = () => {
    const pages = [];
    const maxPageButtons = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
    let endPage = Math.min(totalPages, startPage + maxPageButtons - 1);

    if (endPage - startPage + 1 < maxPageButtons) {
      startPage = Math.max(1, endPage - maxPageButtons + 1);
    }

    // Previous button
    pages.push(
      <Button
        key="prev"
        variant="outline"
        size="sm"
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
        className="flex items-center cursor-pointer"
      >
        <ChevronLeft className="h-4 w-4 mr-1" />
        Prev
      </Button>
    );

    // First page
    if (startPage > 1) {
      pages.push(
        <Button
          key={1}
          variant={currentPage === 1 ? "default" : "outline"}
          size="sm"
          onClick={() => handlePageChange(1)}
          className="cursor-pointer"
        >
          1
        </Button>
      );
      if (startPage > 2) {
        pages.push(
          <span key="ellipsis1" className="px-2">
            ...
          </span>
        );
      }
    }

    // Page numbers
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <Button
          key={i}
          variant={currentPage === i ? "default" : "outline"}
          size="sm"
          onClick={() => handlePageChange(i)}
          className="cursor-pointer"
        >
          {i}
        </Button>
      );
    }

    // Last page
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push(
          <span key="ellipsis2" className="px-2">
            ...
          </span>
        );
      }
      pages.push(
        <Button
          key={totalPages}
          variant={currentPage === totalPages ? "default" : "outline"}
          size="sm"
          onClick={() => handlePageChange(totalPages)}
          className="cursor-pointer"
        >
          {totalPages}
        </Button>
      );
    }

    // Next button
    pages.push(
      <Button
        key="next"
        variant="outline"
        size="sm"
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
        className="flex items-center cursor-pointer"
      >
        Next
        <ChevronRight className="h-4 w-4 ml-1" />
      </Button>
    );

    return pages;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto max-w-7xl py-8 px-4 sm:px-6 lg:px-8">
        <section className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            All Products
          </h1>
          <p className="text-gray-600">Browse all available products</p>
        </section>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-600 mx-auto mb-4"></div>
              <p className="text-gray-600 mb-2">Loading products...</p>
              {showDelayedMessage && (
                <p className="text-sm text-gray-500 animate-fade-in">
                  If it's your first time visiting this site, it may take some time to load data.
                </p>
              )}
            </div>
          </div>
        ) : error ? (
          <div className="text-center text-red-500 p-8 bg-red-50 rounded-lg">
            {error}
          </div>
        ) : (
          <>
            {/* Filters and Sort Section */}
            <div className="mb-6 space-y-4">
              <div className="flex flex-wrap gap-4 items-center">
                {/* Category filter */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center"
                    >
                      <Filter className="h-4 w-4 mr-2" />
                      Category:{" "}
                      {selectedCategory
                        ? PRODUCT_CATEGORIES[selectedCategory as CategoryKey]
                        : "All"}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem
                      onClick={() => handleCategoryChange(null)}
                      className="cursor-pointer"
                    >
                      All Categories
                    </DropdownMenuItem>
                    {Object.entries(PRODUCT_CATEGORIES).map(([key, label]) => (
                      <DropdownMenuItem
                        key={key}
                        onClick={() => handleCategoryChange(key as CategoryKey)}
                        className="cursor-pointer"
                      >
                        {label}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* Sort options */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center"
                    >
                      <ArrowUpDown className="h-4 w-4 mr-2" />
                      Sort: {SORT_OPTIONS[selectedSort]}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {Object.entries(SORT_OPTIONS).map(([key, label]) => (
                      <DropdownMenuItem
                        key={key}
                        onClick={() => handleSortChange(key as SortKey)}
                        className="cursor-pointer"
                      >
                        {label}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* Active filters display */}
              {(selectedCategory || selectedSort !== "default") && (
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="text-sm text-gray-600">Active filters:</span>
                  {selectedCategory && (
                    <Badge
                      variant="secondary"
                      className="flex items-center gap-1"
                    >
                      Category:{" "}
                      {PRODUCT_CATEGORIES[selectedCategory as CategoryKey]}
                      <button
                        onClick={() => handleCategoryChange(null)}
                        className="ml-1 hover:bg-gray-200 rounded-full p-0.5"
                      >
                        ×
                      </button>
                    </Badge>
                  )}
                  {selectedSort !== "default" && (
                    <Badge
                      variant="secondary"
                      className="flex items-center gap-1"
                    >
                      Sort: {SORT_OPTIONS[selectedSort]}
                      <button
                        onClick={() => handleSortChange("default")}
                        className="ml-1 hover:bg-gray-200 rounded-full p-0.5"
                      >
                        ×
                      </button>
                    </Badge>
                  )}
                  {(selectedCategory || selectedSort !== "default") && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        handleCategoryChange(null);
                        handleSortChange("default");
                      }}
                      className="text-xs text-gray-500 hover:text-gray-700"
                    >
                      Clear all
                    </Button>
                  )}
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="p-5">
                    {product.category && (
                      <Badge variant="outline" className="mb-2">
                        {product.category}
                      </Badge>
                    )}

                    <Link
                      to={`/product?name=${encodeURIComponent(
                        product.standard_name
                      )}`}
                      className="block hover:text-yellow-700"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        {product.standard_name}
                      </h3>
                    </Link>

                    <div className="border-t border-gray-100 pt-3 mt-3">
                      {product.best_price && (
                        <div className="flex items-center mb-3">
                          <ShoppingBag className="h-4 w-4 mr-2 text-yellow-600 flex-shrink-0" />
                          <div>
                            <span className="font-bold text-yellow-600">
                              {formatPrice(product.best_price)}
                            </span>
                            {product.best_price_vendor && (
                              <span className="text-sm text-gray-600 ml-2">
                                at {product.best_price_vendor}
                              </span>
                            )}
                          </div>
                        </div>
                      )}

                      {product.vendors_count && (
                        <div className="flex items-center text-sm text-gray-600 mb-4">
                          <Store className="h-4 w-4 mr-2 text-gray-500 flex-shrink-0" />
                          <span>
                            {product.vendors_count}{" "}
                            {product.vendors_count === 1 ? "vendor" : "vendors"}{" "}
                            available
                          </span>
                        </div>
                      )}

                      <div className="flex justify-between mt-4">
                        <Link
                          to={`/product?name=${encodeURIComponent(
                            product.standard_name
                          )}`}
                          className="text-sm text-yellow-600 hover:text-yellow-700 font-medium"
                        >
                          View Details
                        </Link>

                        <a
                          href={`/product?name=${encodeURIComponent(
                            product.standard_name
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-1.5 bg-yellow-600 text-white text-sm font-medium rounded-md hover:bg-yellow-700 transition-colors duration-200"
                        >
                          Buy Now
                          <ExternalLink className="ml-1 h-3.5 w-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination controls */}
            <div className="flex justify-center mt-12 gap-2">
              {renderPagination()}
            </div>

            <div className="text-center text-sm text-gray-500 mt-4">
              Showing {products.length} of {totalPages * productsPerPage}{" "}
              products
            </div>
          </>
        )}
      </main>
    </div>
  );
}

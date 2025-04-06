import { Link, useNavigate } from "react-router-dom";
import {
  Github,
  Search,
  Cpu,
  HardDrive,
  MemoryStick,
  Database,
  X,
  Loader2,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { searchProducts, SearchResult } from "@/lib/api";
import { VendorTable } from "@/components/ui/vendor-table";
import { DonationSection } from "@/components/ui/donation-section";
import { Footer } from "@/components/ui/footer";

export default function DhoondlaiLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navigate = useNavigate();

  // Handle search
  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      setSearchResults([]);
      setShowDropdown(false);
      return;
    }

    setIsLoading(true);
    try {
      const result = await searchProducts(searchTerm);
      setSearchResults(result.data || []);
      setShowDropdown(true);
    } catch (error) {
      console.error("Search error:", error);
      setSearchResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle typing and debounce
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Show typing indicator immediately
    setIsTyping(true);

    // Clear any existing timeout
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    // Set a new timeout for search
    typingTimeoutRef.current = setTimeout(() => {
      setIsTyping(false);
      if (value) {
        handleSearch();
      }
    }, 1000);
  };

  // Handle search result click
  const handleResultClick = (productName: string) => {
    setSearchTerm(productName);
    setShowDropdown(false);
    navigate(`/product?name=${encodeURIComponent(productName)}`);
  };

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
    };
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(true)}
          >
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
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white md:hidden">
          <div className="container flex h-16 items-center justify-between">
            <Link
              to="/"
              className="flex items-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <img
                src="/dhoondlai.svg"
                alt="Dhoondlai Logo"
                className="h-8 w-8 sm:h-9 sm:w-9"
              />
            </Link>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
          <nav className="container flex flex-col gap-4 py-8">
            <Link
              to="/vendor-status"
              className="py-3 text-lg font-medium hover:text-yellow-600 transition-colors border-b"
              onClick={() => setMobileMenuOpen(false)}
            >
              Vendor Status
            </Link>
            <Link
              to="/contribute"
              className="py-3 text-lg font-medium hover:text-yellow-600 transition-colors border-b"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contribute
            </Link>
            <Link
              to="#products"
              className="py-3 text-lg font-medium hover:text-yellow-600 transition-colors border-b"
              onClick={() => setMobileMenuOpen(false)}
            >
              All Products
            </Link>
            <Button
              variant="outline"
              className="mt-4 border-yellow-600 text-yellow-600 hover:bg-yellow-50 transition-all"
              onClick={() => {
                window.open("https://github.com/Dhoondlai", "_blank");
                setMobileMenuOpen(false);
              }}
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
          </nav>
        </div>
      )}

      <main className="flex-1">
        {/* Search Section */}
        <section className="w-full py-12 md:py-20 lg:py-28">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 md:space-y-10 text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-yellow-600 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-yellow-600">
                Dhoondlai!
              </h1>
              <div className="w-full max-w-lg space-y-4">
                <div className="relative group">
                  {/* Left search icon */}
                  <Search className="absolute left-3.5 top-3.5 h-5 w-5 text-gray-400 group-hover:text-yellow-600 transition-colors" />

                  <Input
                    type="search"
                    placeholder="Search for PC parts..."
                    className={`w-full pl-10 ${
                      isLoading || isTyping ? "pr-12" : "pr-4"
                    } py-4 sm:py-6 text-base rounded-xl border-gray-200 shadow-md focus-visible:ring-yellow-500 transition-all`}
                    value={searchTerm}
                    onChange={handleInputChange}
                    onFocus={() =>
                      searchResults.length > 0 && setShowDropdown(true)
                    }
                  />

                  {/* Right loading indicator */}
                  {(isLoading || isTyping) && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2">
                      <Loader2 className="h-5 w-5 text-yellow-600 animate-spin" />
                    </div>
                  )}

                  {/* Search Results Dropdown */}
                  {showDropdown && (
                    <div
                      ref={dropdownRef}
                      className="absolute z-50 w-full mt-1 max-h-60 overflow-auto bg-white shadow-lg rounded-md border border-gray-200"
                    >
                      {searchResults.length > 0 ? (
                        searchResults.map((result) => (
                          <div
                            key={result._id}
                            className="px-4 py-2 hover:bg-yellow-50 cursor-pointer text-left"
                            onClick={() =>
                              handleResultClick(result.standard_name)
                            }
                          >
                            {result.standard_name}
                          </div>
                        ))
                      ) : (
                        <div className="px-4 py-3 text-center text-gray-500">
                          No results found - refine your search
                        </div>
                      )}
                    </div>
                  )}
                </div>
                <Button
                  className="w-full py-4 sm:py-6 text-base rounded-xl bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={handleSearch}
                  disabled={isLoading || isTyping}
                >
                  {isLoading || isTyping ? "Searching..." : "Search"}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-16 lg:py-20">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="mx-auto max-w-5xl space-y-6 md:space-y-10">
              <div className="space-y-2 md:space-y-3 text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
                  🛠️ Dhoondlai - Pakistan's PC Price Comparison
                </h2>
                <p className="text-gray-600 text-base sm:text-lg md:text-xl font-light max-w-3xl mx-auto">
                  Compare prices instantly across Pakistan's top PC retailers.
                  Save time and money on your next build with our real-time
                  price tracking.
                </p>
              </div>
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-2 md:grid-cols-4">
                <div className="flex flex-col items-center space-y-3 rounded-xl border border-gray-100 bg-white p-4 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="rounded-full bg-yellow-50 p-3">
                    <Cpu className="h-6 w-6 sm:h-7 sm:w-7 text-yellow-600" />
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold">
                    Processors
                  </h3>
                </div>
                <div className="flex flex-col items-center space-y-3 rounded-xl border border-gray-100 bg-white p-4 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="rounded-full bg-yellow-50 p-3">
                    <HardDrive className="h-6 w-6 sm:h-7 sm:w-7 text-yellow-600" />
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold">
                    Motherboards
                  </h3>
                </div>
                <div className="flex flex-col items-center space-y-3 rounded-xl border border-gray-100 bg-white p-4 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="rounded-full bg-yellow-50 p-3">
                    <MemoryStick className="h-6 w-6 sm:h-7 sm:w-7 text-yellow-600" />
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold">RAM</h3>
                </div>
                <div className="flex flex-col items-center space-y-3 rounded-xl border border-gray-100 bg-white p-4 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="rounded-full bg-yellow-50 p-3">
                    <Database className="h-6 w-6 sm:h-7 sm:w-7 text-yellow-600" />
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold">SSD</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vendor Status Section */}
        <section
          id="status"
          className="w-full py-12 md:py-16 lg:py-20 bg-gray-50"
        >
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="mx-auto max-w-5xl">
              <VendorTable />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-16 lg:py-20">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 md:space-y-6 text-center max-w-md mx-auto">
              <p className="text-gray-600 text-base sm:text-lg">
                Dhoondlai is an open-source project. Help us improve and expand
                by contributing on GitHub.
              </p>
              <Button
                className="px-6 md:px-8 py-4 md:py-6 text-base rounded-xl bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() =>
                  window.open("https://github.com/Dhoondlai", "_blank")
                }
              >
                <Github className="mr-2 h-5 w-5" />
                View on GitHub
              </Button>
            </div>
          </div>
        </section>

        {/* Donation Section */}
        <section className="w-full py-12 md:py-16 lg:py-20 bg-gray-50">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <DonationSection />
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

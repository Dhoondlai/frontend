import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { searchProducts, SearchResult } from "@/lib/api";

interface SearchBarProps {
  className?: string;
  onResultClick?: (productName: string) => void;
  showLoadingIndicator?: boolean;
  placeholder?: string;
  size?: "sm" | "md" | "lg";
}

export function SearchBar({
  className = "",
  onResultClick,
  showLoadingIndicator = true,
  placeholder = "Search for PC parts...",
  size = "md",
}: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  // Refs for managing timeouts and click-outside behavior
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const searchBarRef = useRef<HTMLDivElement>(null);

  // Handle search
  const handleSearch = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();

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

    if (onResultClick) {
      onResultClick(productName);
    } else {
      navigate(`/product?name=${encodeURIComponent(productName)}`);
    }
  };

  // Handle click outside of search bar to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    }

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Cleanup timeout on component unmount
  useEffect(() => {
    return () => {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
    };
  }, []);

  // Size-based classes
  const inputSizeClass =
    size === "sm"
      ? "py-1 text-xs"
      : size === "lg"
      ? "py-4 sm:py-6 text-lg"
      : "py-2 text-sm";

  return (
    <div className={`relative w-full ${className}`} ref={searchBarRef}>
      <form onSubmit={handleSearch} className="relative w-full group">
        {/* Left search icon */}
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 group-hover:text-yellow-600 transition-colors" />

        <Input
          type="search"
          placeholder={placeholder}
          className={`w-full pl-9 ${
            (isLoading || isTyping) && showLoadingIndicator ? "pr-12" : "pr-4"
          } ${inputSizeClass} rounded-lg border-gray-200 focus-visible:ring-yellow-500 transition-all`}
          value={searchTerm}
          onChange={handleInputChange}
          onFocus={() => searchResults.length > 0 && setShowDropdown(true)}
        />

        {/* Right loading indicator */}
        {showLoadingIndicator && (isLoading || isTyping) && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <Loader2 className="h-5 w-5 text-yellow-600 animate-spin" />
          </div>
        )}
      </form>

      {/* Search Results Dropdown */}
      {showDropdown && (
        <div className="absolute z-50 w-full mt-1 max-h-60 overflow-auto bg-white shadow-lg rounded-md border border-gray-200">
          {searchResults.length > 0 ? (
            searchResults.map((result) => (
              <div
                key={result._id}
                className="px-4 py-2 hover:bg-yellow-50 cursor-pointer text-left"
                onClick={() => handleResultClick(result.standard_name)}
              >
                {result.standard_name}
              </div>
            ))
          ) : (
            <div className="px-4 py-3 text-center text-gray-500">
              {isLoading || isTyping
                ? "Searching..."
                : "No results found - refine your search"}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

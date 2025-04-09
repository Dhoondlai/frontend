import { Link } from "react-router-dom";
import { Github, X, Home } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SearchBar } from "@/components/ui/search-bar";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-white backdrop-blur-sm bg-opacity-80">
        <div className="container mx-auto max-w-7xl flex h-16 items-center justify-between">
          {/* Logo area */}
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center">
              <img
                src="/dhoondlai.svg"
                alt="Dhoondlai Logo"
                className="h-15 w-15 sm:h-15 sm:w-15"
              />
            </Link>

            {/* Search bar moved next to logo */}
            <div className="hidden sm:flex w-64 md:w-80">
              <SearchBar size="sm" showLoadingIndicator={false} />
            </div>
          </div>

          {/* Navigation links - home button now at the start */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/">
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center text-gray-700 hover:text-yellow-600 transition-colors"
              >
                <Home className="mr-1 h-4 w-4" />
                Home
              </Button>
            </Link>
            <Link
              to="/vendor-status"
              className="text-sm font-medium px-3 py-2 hover:text-yellow-600 transition-colors"
            >
              Vendor Status
            </Link>
            <Link
              to="/contribute"
              className="text-sm font-medium px-3 py-2 hover:text-yellow-600 transition-colors"
            >
              Contribute
            </Link>
            <Link
              to="/products"
              className="text-sm font-medium bg-yellow-50 px-3 py-2 rounded-md text-yellow-600 hover:bg-yellow-100 transition-colors"
            >
              All Products
            </Link>
          </nav>

          {/* GitHub button */}
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

          {/* Mobile menu toggle */}
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

        {/* Mobile search bar */}
        <div className="sm:hidden px-4 pb-3">
          <SearchBar size="sm" />
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
              to="/"
              className="py-3 text-lg font-medium hover:text-yellow-600 transition-colors border-b"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="flex items-center">
                <Home className="mr-2 h-5 w-5" />
                Home
              </div>
            </Link>
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
              to="/products"
              className="py-3 text-lg font-medium bg-yellow-50 text-yellow-600 rounded-md px-3 transition-colors border-b"
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
    </>
  );
}

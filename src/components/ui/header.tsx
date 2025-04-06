import { Link } from "react-router-dom";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
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
          onClick={() => window.open("https://github.com/Dhoondlai", "_blank")}
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
    </header>
  );
}

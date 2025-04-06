import { Link } from "react-router-dom";

export function Footer() {
  const handleLinkClick = (destination: string) => {
    console.log(`Navigating to: ${destination}`);
    // The Link component will handle the actual navigation
  };

  return (
    <footer className="w-full border-t py-6 md:py-8 bg-white">
      <div className="container mx-auto max-w-7xl flex flex-col items-center justify-center gap-4 px-4 md:px-6 md:flex-row">
        <p className="text-center text-xs sm:text-sm text-gray-500">
          © {new Date().getFullYear()} Dhoondlai. All rights reserved.
        </p>
        <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
          <Link
            to="/privacy-policy"
            onClick={() => handleLinkClick("/privacy-policy")}
            className="text-xs sm:text-sm font-medium text-gray-500 hover:text-yellow-600 transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms-of-service"
            onClick={() => handleLinkClick("/terms-of-service")}
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
  );
}

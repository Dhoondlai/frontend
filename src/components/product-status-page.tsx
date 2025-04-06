import { Link } from "react-router-dom";
import { Github } from "lucide-react";

import { Button } from "@/components/ui/button";
import { VendorTable } from "@/components/ui/vendor-table";

export default function VendorStatusPage() {
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

      <main className="flex-1">
        {/* Vendor Status Section */}
        <section className="w-full py-12 md:py-16 lg:py-20">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="mx-auto max-w-5xl">
              <VendorTable />
            </div>
          </div>
        </section>

        {/* Missing Vendor Section */}
        <section className="w-full py-8 md:py-12 lg:py-16 bg-gray-50">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="mx-auto max-w-4xl space-y-6 md:space-y-8">
              <div className="space-y-3 text-center">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
                  Missing Your Favorite Vendor?
                </h2>
                <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
                  We're constantly working to expand our network of vendors to
                  give you the most comprehensive price comparison experience.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    For Established E-commerce Stores
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Already have a website selling PC components? We'd love to
                    include your products in our price comparison platform!
                    Getting listed is{" "}
                    <span className="font-semibold">completely free</span> and
                    gives you exposure to thousands of potential customers.
                  </p>
                  <div className="flex flex-col space-y-3">
                    <Button
                      className="bg-yellow-600 hover:bg-yellow-700 text-white w-full"
                      onClick={() =>
                        window.open(
                          "https://github.com/orgs/Dhoondlai/discussions",
                          "_blank"
                        )
                      }
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Submit GitHub Issue
                    </Button>
                    <span className="text-center text-sm text-gray-500">
                      or
                    </span>
                    <a
                      href="mailto:dhoondlai@gmail.com?subject=New Vendor Request&body=Vendor Name: %0AWebsite: %0AContact Email: %0AComponents Available: "
                      className="inline-block text-center text-yellow-600 font-medium hover:underline"
                    >
                      Email us at dhoondlai@gmail.com
                    </a>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    For Individual Sellers & Physical Stores
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Don't have an online presence yet? We're building a special
                    portal for individual sellers and brick-and-mortar stores to
                    list their products directly on Dhoondlai for a minimal fee.
                  </p>
                  <p className="text-gray-600 mb-5">
                    Get ahead of the competition and become one of our premier
                    launch partners with{" "}
                    <span className="font-semibold text-yellow-600">
                      special introductory rates
                    </span>{" "}
                    and{" "}
                    <span className="font-semibold text-yellow-600">
                      priority placement
                    </span>{" "}
                    in search results!
                  </p>
                  <Button
                    className="border-yellow-600 text-yellow-600 hover:bg-yellow-50 transition-all w-full"
                    variant="outline"
                    onClick={() =>
                      window.open(
                        "mailto:dhoondlai@gmail.com?subject=Interest in Direct Listing&body=Business Name: %0AContact Person: %0APhone: %0AEmail: %0AComponents Available: ",
                        "_blank"
                      )
                    }
                  >
                    Express Interest
                  </Button>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 md:p-6 text-center">
                <p className="text-gray-700">
                  Join the growing Dhoondlai ecosystem and help Pakistani PC
                  builders find the best prices across the country!
                </p>
              </div>
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

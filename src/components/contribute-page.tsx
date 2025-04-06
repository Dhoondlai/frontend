import { Link } from "react-router-dom";
import { Github, Linkedin, Code, DollarSign } from "lucide-react";

import { Button } from "@/components/ui/button";
import { DonationSection } from "@/components/ui/donation-section";

export default function ContributePage() {
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
        {/* About Maintainer Section */}
        <section className="w-full py-12 md:py-16 lg:py-20">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-6 md:space-y-8">
              <div className="text-center space-y-3">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
                  About Dhoondlai
                </h1>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                  <div className="w-32 h-32 overflow-hidden rounded-full border-4 border-yellow-100">
                    <img
                      src="https://github.com/okHadi.png"
                      alt="Hadi Khan"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h2 className="text-xl font-bold text-gray-900">
                      Maintained by Hadi Khan
                    </h2>
                    <p className="mt-3 text-gray-600">
                      Dhoondlai is a personal project created and maintained by
                      me, Hadi Khan. As a software engineer passionate about
                      making technology more accessible, I built Dhoondlai to
                      help PC enthusiasts in Pakistan find the best deals on
                      components.
                    </p>
                    <p className="mt-2 text-gray-600">
                      I'm currently open to new opportunities and available for
                      hiring. If you'd like to work with me, feel free to reach
                      out through any of the channels below.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3 justify-center md:justify-start">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-gray-300"
                        onClick={() =>
                          window.open("https://github.com/okHadi", "_blank")
                        }
                      >
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-blue-700 text-blue-700"
                        onClick={() =>
                          window.open(
                            "https://www.linkedin.com/in/okHadi",
                            "_blank"
                          )
                        }
                      >
                        <Linkedin className="mr-2 h-4 w-4" />
                        LinkedIn
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-yellow-600 text-yellow-600"
                        onClick={() =>
                          window.open(
                            "mailto:khan.hadi2951@gmail.com?subject=Job Opportunity&body=Hi Hadi,%0A%0A",
                            "_blank"
                          )
                        }
                      >
                        Contact Me
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contribute Section */}
        <section className="w-full py-12 md:py-16 lg:py-20 bg-gray-50">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-10">
              <div className="text-center space-y-3">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
                  How To Contribute
                </h2>
                <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
                  Dhoondlai is an open-source project, and we welcome
                  contributions of all kinds. Here are some ways you can help
                  make the project better:
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-green-100 p-2 rounded-full">
                      <Code className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Contribute Code
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      You can help improve Dhoondlai by contributing code.
                      Here's how:
                    </p>
                    <ol className="list-decimal list-inside space-y-2 text-gray-600 ml-2">
                      <li>Fork the repository on GitHub</li>
                      <li>Create a new branch for your feature or bug fix</li>
                      <li>Make your changes and commit them</li>
                      <li>
                        Submit a pull request with a clear description of your
                        changes
                      </li>
                    </ol>
                    <Button
                      className="w-full bg-yellow-600 hover:bg-yellow-700 text-white"
                      onClick={() =>
                        window.open("https://github.com/Dhoondlai", "_blank")
                      }
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View GitHub Repository
                    </Button>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Github className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Report Issues
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      Found a bug or have a feature request? Let us know by
                      opening a new discussion:
                    </p>
                    <ol className="list-decimal list-inside space-y-2 text-gray-600 ml-2">
                      <li>Check existing issues to avoid duplicates</li>
                      <li>Use a clear and descriptive title</li>
                      <li>Provide detailed steps to reproduce bugs</li>
                      <li>Include screenshots if helpful</li>
                    </ol>
                    <Button
                      className="w-full bg-gray-800 hover:bg-gray-900 text-white"
                      onClick={() =>
                        window.open(
                          "https://github.com/orgs/Dhoondlai/discussions",
                          "_blank"
                        )
                      }
                    >
                      Open a New Discussion
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Donation Section */}
        <section className="w-full py-12 md:py-16 lg:py-20">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <DonationSection showLearnMoreLink={false} />
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

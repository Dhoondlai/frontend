import { Link, useNavigate } from "react-router-dom";
import { Cpu, HardDrive, MemoryStick, Database, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { VendorTable } from "@/components/ui/vendor-table";
import { DonationSection } from "@/components/ui/donation-section";
import { Footer } from "@/components/ui/footer";
import { Header } from "@/components/ui/header";
import { SearchBar } from "@/components/ui/search-bar";

export default function DhoondlaiLanding() {
  const navigate = useNavigate();

  // Handle search result click
  const handleResultClick = (productName: string) => {
    navigate(`/product?name=${encodeURIComponent(productName)}`);
  };

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      {/* Header */}
      <Header />

      <main className="flex-1">
        {/* Search Section */}
        <section className="w-full py-12 md:py-20 lg:py-28">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 md:space-y-10 text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-yellow-600 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-yellow-600">
                Dhoondlai!
              </h1>
              <div className="w-full max-w-lg space-y-4">
                <SearchBar
                  size="lg"
                  onResultClick={handleResultClick}
                  showLoadingIndicator={true}
                />
                <Button
                  className="w-full py-4 sm:py-6 text-base rounded-xl bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => navigate("/product?name=")}
                >
                  Search
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

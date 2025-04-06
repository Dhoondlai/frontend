import { VendorTable } from "@/components/ui/vendor-table";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";

export default function ProductStatusPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      {/* Header */}
      <Header />

      <main className="flex-1">
        {/* Vendor Status Section */}
        <section className="w-full py-12 md:py-16 lg:py-20">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="mx-auto max-w-5xl">
              <div className="space-y-4 text-center mb-8">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
                  Vendor Status
                </h1>
                <p className="text-gray-600 text-lg md:text-xl font-light max-w-3xl mx-auto">
                  Check the current scraping status of all vendors. We update
                  prices regularly from these sources.
                </p>
              </div>
              <VendorTable />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

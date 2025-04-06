import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";

export default function PrivacyPolicy() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      {/* Header */}
      <Header />

      <main className="flex-1 py-12 md:py-16 lg:py-20">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              Privacy Policy
            </h1>
            <p className="text-gray-600">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <div className="prose prose-slate max-w-none">
              <p>
                This Privacy Policy describes how Dhoondlai ("we", "us", or
                "our") collects, uses, and shares your information when you use
                our website (the "Service").
              </p>

              <h2>Information Collection</h2>
              <p>
                We don't collect personal information. Dhoondlai is a statically
                hosted website that doesn't have a backend to store user data.
                We use third-party analytics services that may collect
                information about your visit.
              </p>

              <h2>Cookies and Tracking</h2>
              <p>
                Our website may use cookies and similar tracking technologies to
                track activity on our Service and hold certain information.
                Cookies are files with a small amount of data that may include
                an anonymous unique identifier.
              </p>

              <h2>Third-party Links</h2>
              <p>
                Our Service may contain links to other websites that are not
                operated by us. If you click on a third-party link, you will be
                directed to that third party's site. We strongly advise you to
                review the Privacy Policy of every site you visit.
              </p>

              <h2>Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page. Changes to this Privacy Policy are effective when
                they are posted on this page.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please
                contact us at:
              </p>
              <ul>
                <li>By email: khan.hadi2951@gmail.com</li>
                <li>
                  By visiting this page on our website:
                  https://github.com/Dhoondlai
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

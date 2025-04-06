import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";

export default function TermsOfService() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      {/* Header */}
      <Header />

      <main className="flex-1 py-12 md:py-16 lg:py-20">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              Terms of Service
            </h1>
            <p className="text-gray-600">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <div className="prose prose-slate max-w-none">
              <p>
                Please read these Terms of Service ("Terms", "Terms of Service")
                carefully before using the Dhoondlai website (the "Service")
                operated by Dhoondlai ("us", "we", or "our").
              </p>

              <p>
                Your access to and use of the Service is conditioned on your
                acceptance of and compliance with these Terms. These Terms apply
                to all visitors, users and others who access or use the Service.
              </p>

              <p>
                <strong>
                  By accessing or using the Service you agree to be bound by
                  these Terms. If you disagree with any part of the terms then
                  you may not access the Service.
                </strong>
              </p>

              <h2>Links To Other Web Sites</h2>
              <p>
                Our Service may contain links to third-party web sites or
                services that are not owned or controlled by Dhoondlai.
              </p>

              <p>
                Dhoondlai has no control over, and assumes no responsibility
                for, the content, privacy policies, or practices of any third
                party web sites or services. You further acknowledge and agree
                that Dhoondlai shall not be responsible or liable, directly or
                indirectly, for any damage or loss caused or alleged to be
                caused by or in connection with use of or reliance on any such
                content, goods or services available on or through any such web
                sites or services.
              </p>

              <h2>Changes</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or
                replace these Terms at any time. If a revision is material we
                will try to provide at least 30 days' notice prior to any new
                terms taking effect. What constitutes a material change will be
                determined at our sole discretion.
              </p>

              <h2>Disclaimer</h2>
              <p>
                The information provided on Dhoondlai is for general
                informational purposes only. All information on the Site is
                provided in good faith, however we make no representation or
                warranty of any kind, express or implied, regarding the
                accuracy, adequacy, validity, reliability, availability or
                completeness of any information on the Site.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us:
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

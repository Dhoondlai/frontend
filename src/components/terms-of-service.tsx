import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";

export default function TermsOfService() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <Header />

      <main className="flex-1">
        <section className="w-full py-12 md:py-16 lg:py-20">
          <div className="container mx-auto max-w-3xl px-4 md:px-6">
            <div className="prose prose-gray max-w-none">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
                Terms of Service
              </h1>

              <p className="text-gray-600 mb-8">
                Last updated:{" "}
                {new Date().toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>

              <div className="space-y-6">
                <section>
                  <h2 className="text-2xl font-semibold text-gray-900">
                    Introduction
                  </h2>
                  <p>
                    Welcome to Dhoondlai. These Terms of Service ("Terms")
                    govern your use of the Dhoondlai website located at
                    dhoondlai.com ("Service") operated by Dhoondlai ("we," "us,"
                    or "our").
                  </p>
                  <p>
                    By accessing or using our Service, you agree to be bound by
                    these Terms. If you disagree with any part of the terms,
                    then you may not access the Service.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900">
                    Use of Our Service
                  </h2>
                  <p>
                    Dhoondlai is a price comparison service that aggregates
                    product information and pricing from various vendors in
                    Pakistan. Our service is designed to help users make
                    informed purchasing decisions for PC components and related
                    technology products.
                  </p>
                  <p>
                    The information we provide is gathered from third-party
                    vendors and websites. While we strive to keep this
                    information accurate and up-to-date, we cannot guarantee its
                    absolute accuracy or completeness.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900">
                    User Responsibilities
                  </h2>
                  <p>As a user of our Service, you agree:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Not to use our Service for any illegal purpose or in
                      violation of any local, state, national, or international
                      law
                    </li>
                    <li>
                      Not to attempt to gain unauthorized access to any portion
                      of the website or any other systems or networks connected
                      to the Service
                    </li>
                    <li>
                      Not to engage in any harassing, abusive, or otherwise
                      objectionable behavior
                    </li>
                    <li>
                      Not to interfere with or disrupt the Service or servers or
                      networks connected to the Service
                    </li>
                    <li>
                      Not to use data mining, robots, scraping, or similar data
                      gathering methods
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900">
                    Intellectual Property
                  </h2>
                  <p>
                    The Service and its original content, features, and
                    functionality are owned by Dhoondlai and are protected by
                    international copyright, trademark, patent, trade secret,
                    and other intellectual property or proprietary rights laws.
                  </p>
                  <p>
                    Our name, logo, website, and all related names, logos,
                    product and service names, designs, and slogans are
                    trademarks of Dhoondlai. You must not use such marks without
                    our prior written permission.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900">
                    Third-Party Links and Content
                  </h2>
                  <p>
                    Our Service may contain links to third-party websites or
                    services that are not owned or controlled by Dhoondlai. We
                    have no control over, and assume no responsibility for the
                    content, privacy policies, or practices of any third-party
                    websites or services.
                  </p>
                  <p>
                    When you click on links to purchase products from
                    third-party vendors, you will be directed to the vendor's
                    website. Any purchases you make will be governed by the
                    terms and conditions of the vendor's website, not Dhoondlai.
                    We are not responsible for any issues related to
                    transactions made with third-party vendors.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900">
                    Pricing and Product Information
                  </h2>
                  <p>
                    We make every effort to provide accurate and up-to-date
                    pricing and product information. However, errors may
                    occasionally occur. If we discover an error in the price or
                    product information, we reserve the right to correct it. We
                    are not responsible for any inconvenience or damages caused
                    by such errors.
                  </p>
                  <p>
                    Prices displayed on Dhoondlai are collected from vendor
                    websites and are subject to change without notice. The final
                    price and availability of any product will be determined
                    when you visit the vendor's website.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900">
                    Limitation of Liability
                  </h2>
                  <p>
                    In no event shall Dhoondlai, nor its directors, employees,
                    partners, agents, suppliers, or affiliates, be liable for
                    any indirect, incidental, special, consequential, or
                    punitive damages, including without limitation, loss of
                    profits, data, use, goodwill, or other intangible losses,
                    resulting from:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Your access to or use of or inability to access or use the
                      Service
                    </li>
                    <li>
                      Any conduct or content of any third party on the Service
                    </li>
                    <li>Any content obtained from the Service</li>
                    <li>
                      Unauthorized access, use, or alteration of your
                      transmissions or content
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900">
                    Disclaimer
                  </h2>
                  <p>
                    Your use of the Service is at your sole risk. The Service is
                    provided on an "AS IS" and "AS AVAILABLE" basis. The Service
                    is provided without warranties of any kind, whether express
                    or implied, including, but not limited to, implied
                    warranties of merchantability, fitness for a particular
                    purpose, non-infringement, or course of performance.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900">
                    Changes to Terms
                  </h2>
                  <p>
                    We reserve the right to modify or replace these Terms at any
                    time. If a revision is material, we will try to provide at
                    least 30 days' notice prior to any new terms taking effect.
                    What constitutes a material change will be determined at our
                    sole discretion.
                  </p>
                  <p>
                    By continuing to access or use our Service after those
                    revisions become effective, you agree to be bound by the
                    revised terms. If you do not agree to the new terms, please
                    stop using the Service.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900">
                    Contact Us
                  </h2>
                  <p>
                    If you have any questions about these Terms, please contact
                    us at:
                  </p>
                  <p className="font-medium">Email: dhoondlai@gmail.com</p>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

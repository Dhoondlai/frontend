import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";

export default function PrivacyPolicy() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <Header />

      <main className="flex-1">
        <section className="w-full py-12 md:py-16 lg:py-20">
          <div className="container mx-auto max-w-3xl px-4 md:px-6">
            <div className="prose prose-gray max-w-none">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
                Privacy Policy
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
                    At Dhoondlai ("we," "our," or "us"), we respect your privacy
                    and are committed to protecting your personal information.
                    This Privacy Policy explains how we collect, use, disclose,
                    and safeguard your information when you visit our website
                    dhoondlai.com and use our price comparison services.
                  </p>
                  <p>
                    Please read this Privacy Policy carefully. By accessing or
                    using our website, you acknowledge that you have read,
                    understood, and agree to be bound by this Privacy Policy.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900">
                    Information We Collect
                  </h2>
                  <p>
                    We collect minimal information to provide and improve our
                    service. The types of information we may collect include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Usage Data:</strong> Information about how you use
                      our service, including pages visited, time spent on our
                      website, search queries, and other usage metrics.
                    </li>
                    <li>
                      <strong>Device Information:</strong> Information about
                      your device, browser, IP address, and operating system.
                    </li>
                    <li>
                      <strong>Cookies and Similar Technologies:</strong> We use
                      cookies and similar tracking technologies to track
                      activity on our website and hold certain information to
                      enhance your user experience.
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900">
                    How We Use Your Information
                  </h2>
                  <p>
                    We use the information we collect for various purposes,
                    including to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Understand how users interact with our website</li>
                    <li>Detect, prevent, and address technical issues</li>
                    <li>Monitor and analyze usage patterns and trends</li>
                    <li>Enhance and personalize your browsing experience</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900">
                    Third-Party Links
                  </h2>
                  <p>
                    Our service may contain links to third-party websites or
                    services that are not owned or controlled by Dhoondlai. We
                    have no control over and assume no responsibility for the
                    content, privacy policies, or practices of any third-party
                    websites or services. When you click on links to other
                    websites, we encourage you to read their privacy policies
                    before providing any personal information.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900">
                    Security
                  </h2>
                  <p>
                    The security of your information is important to us. We use
                    reasonable administrative, technical, and physical
                    safeguards designed to protect your information. However, no
                    method of transmission over the Internet or electronic
                    storage is 100% secure, and we cannot guarantee absolute
                    security.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900">
                    Analytics
                  </h2>
                  <p>
                    We may use third-party service providers, such as Google
                    Analytics, to monitor and analyze the use of our website.
                    These services may collect information about your online
                    activities over time and across different websites when you
                    use our website.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900">
                    Changes to This Privacy Policy
                  </h2>
                  <p>
                    We may update our Privacy Policy from time to time. We will
                    notify you of any changes by posting the new Privacy Policy
                    on this page and updating the "Last updated" date. You are
                    advised to review this Privacy Policy periodically for any
                    changes.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900">
                    Contact Us
                  </h2>
                  <p>
                    If you have any questions about this Privacy Policy, please
                    contact us at:
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

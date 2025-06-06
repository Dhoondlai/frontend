import { Link } from "react-router-dom";
import { DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DonationSectionProps {
  className?: string;
  showLearnMoreLink?: boolean;
}

export function DonationSection({
  className,
  showLearnMoreLink = true,
}: DonationSectionProps) {
  return (
    <div className={className}>
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
            Support Dhoondlai
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            If you find Dhoondlai helpful and want to support its development,
            consider making a donation. Your support helps cover server costs
            and enables continued improvement of the platform.
          </p>
        </div>

        <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-8 shadow-sm border border-yellow-100">
          <div className="flex items-center justify-center gap-3 mb-6">
            <DollarSign className="h-8 w-8 text-yellow-600" />
            <h3 className="text-xl font-semibold text-gray-900">
              Cryptocurrency Donations
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-5 border border-gray-200">
              <h4 className="font-medium text-gray-900 mb-3">Bitcoin (BTC)</h4>
              <div className="bg-gray-50 rounded p-3 mb-3 break-all font-mono text-sm text-gray-800">
                bc1qrdjwzr3tkxaklsjz8e48leh6u93uxzc5h7kd4k
              </div>
              <Button
                variant="outline"
                size="sm"
                className="w-full text-xs"
                onClick={() =>
                  navigator.clipboard.writeText(
                    "bc1qrdjwzr3tkxaklsjz8e48leh6u93uxzc5h7kd4k"
                  )
                }
              >
                Copy Address
              </Button>
            </div>

            <div className="bg-white rounded-lg p-5 border border-gray-200">
              <h4 className="font-medium text-gray-900 mb-3">USDT (TRC20)</h4>
              <div className="bg-gray-50 rounded p-3 mb-3 break-all font-mono text-sm text-gray-800">
                TBJ3nv24Ciaq65vq4iGvx9PATKQ88vf7kM
              </div>
              <Button
                variant="outline"
                size="sm"
                className="w-full text-xs"
                onClick={() =>
                  navigator.clipboard.writeText(
                    "TBJ3nv24Ciaq65vq4iGvx9PATKQ88vf7kM"
                  )
                }
              >
                Copy Address
              </Button>
            </div>
          </div>

          <p className="text-center text-sm text-gray-600 mt-6">
            Thank you for supporting Dhoondlai! Every contribution makes a
            difference.
          </p>

          {showLearnMoreLink && (
            <div className="text-center mt-6">
              <Link
                to="/contribute"
                className="inline-flex items-center text-yellow-600 font-medium hover:underline"
              >
                Learn more about contributing
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

"use client";

import { Clock, Shield, TrendingDown, TrendingUp, Store } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface VendorCardProps {
  vendor: {
    id: string;
    name: string;
    url: string;
    currentPrice: number;
    maxPrice: number;
    minPrice: number;
    lastUpdated: string;
    warranty: number;
    originalTitle: string; // Add the originalTitle property
  };
  isBestPrice: boolean;
  formatPrice: (price: number) => string;
  formatDate: (dateString: string) => string;
  getTimeSinceUpdate: (dateString: string) => string;
}

export function VendorCard({
  vendor,
  isBestPrice,
  formatPrice,
  formatDate,
  getTimeSinceUpdate,
}: VendorCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow w-full">
      <CardContent className="p-0">
        <div className="bg-yellow-50 p-4 flex items-center justify-between border-b">
          <div className="flex items-center gap-2">
            <Store className="h-5 w-5 text-yellow-600" />
            <h3 className="font-semibold text-lg">{vendor.name}</h3>
          </div>
          {isBestPrice && <Badge className="bg-yellow-600">Best Price</Badge>}
        </div>

        <div className="p-6">
          <div className="flex flex-wrap md:flex-nowrap justify-between items-center gap-4">
            <div className="flex items-baseline gap-4">
              <div className="text-2xl font-bold text-gray-900">
                {formatPrice(vendor.currentPrice)}
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <TrendingUp className="h-4 w-4 text-red-500" />
                  <span className="text-gray-600">Max: </span>
                  <span className="font-medium">
                    {formatPrice(vendor.maxPrice)}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <TrendingDown className="h-4 w-4 text-green-500" />
                  <span className="text-gray-600">Min: </span>
                  <span className="font-medium">
                    {formatPrice(vendor.minPrice)}
                  </span>
                </div>
              </div>
            </div>
            <Button
              onClick={() => window.open(vendor.url, "_blank")}
              className="bg-yellow-600 hover:bg-yellow-700 text-white"
            >
              Buy Now
            </Button>
          </div>

          <div className="flex flex-wrap gap-6 mt-4 text-sm">
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-gray-500" />
              <span className="text-gray-600">Updated: </span>
              <span className="font-medium">
                {getTimeSinceUpdate(vendor.lastUpdated)}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <Shield className="h-4 w-4 text-gray-500" />
              <span className="text-gray-600">Warranty: </span>
              <span className="font-medium">{vendor.warranty} months</span>
            </div>
          </div>

          <div className="mt-4 text-sm">
            <span className="text-gray-600">Original Title: </span>
            <span className="font-medium">{vendor.originalTitle}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-gray-50 px-6 py-3 text-xs text-gray-500">
        Last checked on {formatDate(vendor.lastUpdated)}
      </CardFooter>
    </Card>
  );
}

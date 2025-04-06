import { Button } from "@/components/ui/button"
import { ExternalLink, ArrowUpDown, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface ProductHeaderProps {
  title: string
  bestPrice: number
  bestVendorName: string
  bestVendorUrl: string
  formatPrice: (price: number) => string
  sortOption: string
  onSortChange: (option: string) => void
}

export function ProductHeader({
  title,
  bestPrice,
  bestVendorName,
  bestVendorUrl,
  formatPrice,
  sortOption,
  onSortChange,
}: ProductHeaderProps) {
  return (
    <div className="sticky top-16 z-40 bg-white border-b shadow-sm">
      <div className="container mx-auto max-w-7xl px-4 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">{title}</h1>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-lg font-semibold text-yellow-600">Best price: {formatPrice(bestPrice)}</span>
              <span className="text-sm text-gray-600">
                from <span className="font-medium">{bestVendorName}</span>
              </span>
              <Button
                variant="link"
                size="sm"
                className="text-yellow-600 p-0 h-auto"
                onClick={() => window.open(bestVendorUrl, "_blank")}
              >
                Buy here <ExternalLink className="ml-1 h-3 w-3" />
              </Button>
            </div>
          </div>

          {/* Sort dropdown */}
          <div className="flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <ArrowUpDown className="h-4 w-4" />
                  Sort by: {sortOption.replace("-", " ")}
                  <ChevronDown className="h-4 w-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem onClick={() => onSortChange("lowest-price")}>Sort by lowest price</DropdownMenuItem>
                <DropdownMenuItem onClick={() => onSortChange("highest-price")}>Sort by highest price</DropdownMenuItem>
                <DropdownMenuItem onClick={() => onSortChange("highest-warranty")}>
                  Sort by highest warranty
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => onSortChange("lowest-warranty")}>
                  Sort by lowest warranty
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  )
}


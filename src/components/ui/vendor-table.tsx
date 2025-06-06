import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface VendorTableProps {
  className?: string;
}

export function VendorTable({ className }: VendorTableProps) {
  return (
    <div className={className}>
      <div className="space-y-2 md:space-y-3 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
          🛒 Supported Vendors
        </h2>
        <p className="text-gray-600 text-base sm:text-lg font-light max-w-3xl mx-auto">
          Our network of vendors is growing every week. We're continuously
          integrating new retailers to ensure you get the most comprehensive and
          accurate price comparison in Pakistan.
        </p>
      </div>

      <div className="rounded-xl border bg-white shadow-sm overflow-x-auto mt-6 md:mt-8">
        <div className="min-w-[700px]">
          <Table>
            <TableHeader>
              <TableRow className="bg-yellow-50">
                <TableHead className="font-semibold text-gray-900">
                  Vendor
                </TableHead>
                <TableHead className="font-semibold text-gray-900">
                  Status
                </TableHead>
                <TableHead className="font-semibold text-gray-900">
                  Processors
                </TableHead>
                <TableHead className="font-semibold text-gray-900">
                  Motherboards
                </TableHead>
                <TableHead className="font-semibold text-gray-900">
                  RAMs
                </TableHead>
                <TableHead className="font-semibold text-gray-900">
                  Graphics Card
                </TableHead>
                <TableHead className="font-semibold text-gray-900">
                  SSD
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-gray-50 transition-colors">
                <TableCell className="font-medium">
                  <a
                    href="https://buyerspk.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-600 hover:underline"
                  >
                    Buyerspk
                  </a>
                </TableCell>
                <TableCell>⛔ BORKED</TableCell>
                <TableCell>❎</TableCell>
                <TableCell>❎</TableCell>
                <TableCell>❎</TableCell>
                <TableCell>❎</TableCell>
                <TableCell>❎</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50 transition-colors">
                <TableCell className="font-medium">
                  <a
                    href="https://gamerz.pk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-600 hover:underline"
                  >
                    Gamerz
                  </a>
                </TableCell>
                <TableCell>🟠 In Progress</TableCell>
                <TableCell>✔️</TableCell>
                <TableCell>❎</TableCell>
                <TableCell>❎</TableCell>
                <TableCell>✔️</TableCell>
                <TableCell>❎</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50 transition-colors">
                <TableCell className="font-medium">
                  <a
                    href="https://junaidtech.pk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-600 hover:underline"
                  >
                    JunaidTech
                  </a>
                </TableCell>
                <TableCell>🟠 In Progress</TableCell>
                <TableCell>✔️</TableCell>
                <TableCell>❎</TableCell>
                <TableCell>❎</TableCell>
                <TableCell>✔️</TableCell>
                <TableCell>❎</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50 transition-colors">
                <TableCell className="font-medium">
                  <a
                    href="https://rbtechngames.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-600 hover:underline"
                  >
                    RB Tech N Games
                  </a>
                </TableCell>
                <TableCell>🟠 In Progress</TableCell>
                <TableCell>✔️</TableCell>
                <TableCell>❎</TableCell>
                <TableCell>❎</TableCell>
                <TableCell>✔️</TableCell>
                <TableCell>❎</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50 transition-colors">
                <TableCell className="font-medium">
                  <a
                    href="https://techmatched.pk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-600 hover:underline"
                  >
                    Techmatched
                  </a>
                </TableCell>
                <TableCell>🟠 In Progress</TableCell>
                <TableCell>✔️</TableCell>
                <TableCell>❎</TableCell>
                <TableCell>❎</TableCell>
                <TableCell>✔️</TableCell>
                <TableCell>❎</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50 transition-colors">
                <TableCell className="font-medium">
                  <a
                    href="https://walistech.pk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-600 hover:underline"
                  >
                    Walistech
                  </a>
                </TableCell>
                <TableCell>🟠 In Progress</TableCell>
                <TableCell>✔️</TableCell>
                <TableCell>❎</TableCell>
                <TableCell>❎</TableCell>
                <TableCell>✔️</TableCell>
                <TableCell>❎</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      <p className="text-center text-gray-600 font-medium mt-4">
        More vendors coming soon!
      </p>
    </div>
  );
}

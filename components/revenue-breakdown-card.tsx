import { MoreHorizontal } from "lucide-react"

export function RevenueBreakdownCard() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="flex flex-row items-center justify-between pb-2">
        <h3 className="text-sm font-medium text-gray-700">Revenue Breakdown</h3>
        <button className="p-1 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <MoreHorizontal className="h-4 w-4 text-gray-500" />
          <span className="sr-only">More options</span>
        </button>
      </div>
      <div className="flex items-center justify-between mt-2">
        {/* Simple Donut Chart representation */}
        <div
          className="relative h-24 w-24 rounded-full"
          style={{
            background: `conic-gradient(
              #3b82f6 0% 35%, /* blue */
              #f97316 35% 60%, /* orange */
              #ef4444 60% 85%, /* red */
              #22c55e 85% 100% /* green */
            )`,
          }}
        >
          <div className="absolute inset-4 bg-white rounded-full" />
        </div>
        <div className="grid gap-2 text-sm">
          <div className="flex items-center gap-2 text-gray-700">
            <span className="h-2 w-2 rounded-full bg-blue-500" />
            Group A <span className="font-semibold">400</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <span className="h-2 w-2 rounded-full bg-orange-500" />
            Group B <span className="font-semibold">300</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <span className="h-2 w-2 rounded-full bg-red-500" />
            Group C <span className="font-semibold">300</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            Group D <span className="font-semibold">200</span>
          </div>
        </div>
      </div>
    </div>
  )
}

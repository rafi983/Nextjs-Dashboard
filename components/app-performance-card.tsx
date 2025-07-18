import { MoreHorizontal } from "lucide-react"

export function AppPerformanceCard() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="flex flex-row items-center justify-between pb-2">
        <h3 className="text-sm font-medium text-gray-700">App Performance</h3>
        <button className="p-1 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <MoreHorizontal className="h-4 w-4 text-gray-500" />
          <span className="sr-only">More options</span>
        </button>
      </div>
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-4 mt-2">
        <span className="h-2 w-2 rounded-full bg-orange-500" />
        Integration
        <span className="h-2 w-2 rounded-full bg-blue-500 ml-4" />
        SDK
      </div>
      <div className="grid gap-4">
        <div>
          <div className="text-sm font-medium mb-1 text-gray-700">Integration</div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div className="h-full bg-blue-500 rounded-full" style={{ width: "70%" }} />
          </div>
        </div>
        <div>
          <div className="text-sm font-medium mb-1 text-gray-700">SDK</div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div className="h-full bg-orange-500 rounded-full" style={{ width: "50%" }} />
          </div>
        </div>
      </div>
    </div>
  )
}

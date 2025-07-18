import { MoreHorizontal } from "lucide-react"

export function VisitsTodayCard() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="flex flex-row items-center justify-between pb-2">
        <h3 className="text-sm font-medium text-gray-700">Visits Today</h3>
        <button className="p-1 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <MoreHorizontal className="h-4 w-4 text-gray-500" />
          <span className="sr-only">More options</span>
        </button>
      </div>
      <div className="text-2xl font-bold flex items-center gap-2 mt-2">
        12, 678
        {/* Simple SVG for the small line chart wave */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 20"
          className="h-5 w-16 text-green-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M1 15 Q 25 5, 50 15 T 99 5" />
        </svg>
      </div>
      <div className="grid grid-cols-3 gap-4 text-sm text-gray-500 mt-4">
        <div>
          <div className="font-semibold text-gray-800">860</div>
          Registrations
        </div>
        <div>
          <div className="font-semibold text-gray-800">32</div>
          Sign Out
        </div>
        <div>
          <div className="font-semibold text-gray-800">3.25%</div>
          Rate
        </div>
      </div>
    </div>
  )
}

import { MoreHorizontal } from "lucide-react"

export function ServerOverviewCard() {
  const LineChart = ({ color }: { color: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 20"
      className={`h-5 w-16 text-${color}-500`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M1 15 Q 25 5, 50 15 T 99 5" />
    </svg>
  )

  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="flex flex-row items-center justify-between pb-2">
        <h3 className="text-sm font-medium text-gray-700">Server Overview</h3>
        <button className="p-1 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <MoreHorizontal className="h-4 w-4 text-gray-500" />
          <span className="sr-only">More options</span>
        </button>
      </div>
      <div className="grid gap-4 mt-2">
        <div className="flex items-center justify-between text-sm">
          <div className="text-gray-700">60% / 37°C / 3.3 Ghz</div>
          <LineChart color="pink" />
        </div>
        <div className="flex items-center justify-between text-sm">
          <div className="text-gray-700">54% / 31°C / 3.3 Ghz</div>
          <LineChart color="blue" />
        </div>
        <div className="flex items-center justify-between text-sm">
          <div className="text-gray-700">57% / 21°C / 3.3 Ghz</div>
          <LineChart color="orange" />
        </div>
      </div>
    </div>
  )
}

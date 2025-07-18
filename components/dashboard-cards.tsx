import { VisitsTodayCard } from "./visits-today-card"
import { AppPerformanceCard } from "./app-performance-card"
import { ServerOverviewCard } from "./server-overview-card"
import { RevenueBreakdownCard } from "./revenue-breakdown-card"
import { DailyLineChartCard } from "./daily-line-chart-card"

export function DashboardCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <VisitsTodayCard />
      <AppPerformanceCard />
      <ServerOverviewCard />
      <RevenueBreakdownCard />
      <div className="lg:col-span-4">
        <DailyLineChartCard />
      </div>
    </div>
  )
}

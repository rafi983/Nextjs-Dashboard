import { Header } from "@/components/header"
import { AppSidebar } from "@/components/app-sidebar"
import { DashboardCards } from "@/components/dashboard-cards"
import { SidebarProvider } from "@/hooks/use-sidebar" // Use our custom provider

export default function DashboardPage() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full flex-col bg-gray-100">
        <Header />
        <div className="flex flex-1">
          <AppSidebar />
          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6 lg:p-8">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-semibold text-gray-800">Dashboard</h1>
              <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-pink-500">
                Latest Reports
              </button>
            </div>
            <DashboardCards />
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}

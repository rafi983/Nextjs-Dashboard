import { Header } from "@/components/header"
import { AppSidebar } from "@/components/app-sidebar"
import { CustomersTable } from "@/components/customers-table"
import { SidebarProvider } from "@/hooks/use-sidebar" // Use our custom provider

export default function CustomersPage() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full flex-col bg-gray-100">
        <Header />
        <div className="flex flex-1">
          <AppSidebar />
          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6 lg:p-8">
            <div className="flex items-center">
              <h1 className="text-3xl font-semibold text-gray-700">Our Customers</h1>
            </div>
            <CustomersTable />
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}

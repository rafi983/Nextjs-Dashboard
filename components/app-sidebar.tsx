"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Users, Bell, BarChart, Book, LifeBuoy, HelpCircle, CircleDot, X } from "lucide-react"
import { useSidebar } from "@/hooks/use-sidebar" // Use our custom sidebar hook
import { cn } from "@/lib/utils" // Keep cn for utility

export function AppSidebar() {
  const pathname = usePathname()
  const { isSidebarOpen, closeSidebar } = useSidebar()

  const MenuItem = ({ href, icon: Icon, label }: { href: string; icon: React.ElementType; label: string }) => {
    const isActive = pathname === href
    return (
      <li>
        <Link
          href={href}
          className={cn(
            "flex items-center gap-2 p-2 rounded-md text-sm transition-colors",
            isActive ? "bg-gray-100 text-blue-600 font-medium" : "text-gray-800 hover:bg-gray-100 hover:text-blue-600",
          )}
          onClick={closeSidebar} // Close sidebar on navigation
        >
          <Icon className="h-5 w-5" />
          <span>{label}</span>
        </Link>
      </li>
    )
  }

  const ProjectItem = ({ href, iconColor, label }: { href: string; iconColor: string; label: string }) => {
    const isActive = pathname === href
    return (
      <li>
        <Link
          href={href}
          className={cn(
            "flex items-center gap-2 p-2 rounded-md text-sm transition-colors",
            isActive ? "bg-gray-100 text-blue-600 font-medium" : "text-gray-800 hover:bg-gray-100 hover:text-blue-600",
          )}
          onClick={closeSidebar} // Close sidebar on navigation
        >
          <CircleDot className={cn("h-3 w-3 fill-current", iconColor)} />
          <span>{label}</span>
        </Link>
      </li>
    )
  }

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-white text-gray-800 border-r border-gray-200 p-4">
        <nav className="flex-1 space-y-4">
          <ul className="space-y-1">
            <MenuItem href="/" icon={Home} label="Dashboard" />
            <MenuItem href="/customers" icon={Users} label="Customers" />
            <MenuItem href="/notifications" icon={Bell} label="Notifications" />
            <MenuItem href="/charts" icon={BarChart} label="Charts" />
          </ul>

          <div className="border-t border-gray-200 my-4" />

          <h3 className="text-xs font-semibold text-gray-500 uppercase px-2">HELP</h3>
          <ul className="space-y-1">
            <MenuItem href="/library" icon={Book} label="Library" />
            <MenuItem href="/support" icon={LifeBuoy} label="Support" />
            <MenuItem href="/faq" icon={HelpCircle} label="FAQ" />
          </ul>

          <div className="border-t border-gray-200 my-4" />

          <h3 className="text-xs font-semibold text-gray-500 uppercase px-2">PROJECTS</h3>
          <ul className="space-y-1">
            <ProjectItem href="/projects/my-recent" iconColor="text-orange-500" label="My recent" />
            <ProjectItem href="/projects/starred" iconColor="text-blue-500" label="Starred" />
            <ProjectItem href="/projects/background" iconColor="text-pink-500" label="Background" />
          </ul>
        </nav>
      </aside>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeSidebar}
          aria-hidden="true"
        />
      )}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-white text-gray-800 border-r border-gray-200 p-4 transform transition-transform duration-300 ease-in-out md:hidden",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button
            onClick={closeSidebar}
            className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Close sidebar"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex-1 space-y-4">
          <ul className="space-y-1">
            <MenuItem href="/" icon={Home} label="Dashboard" />
            <MenuItem href="/customers" icon={Users} label="Customers" />
            <MenuItem href="/notifications" icon={Bell} label="Notifications" />
            <MenuItem href="/charts" icon={BarChart} label="Charts" />
          </ul>

          <div className="border-t border-gray-200 my-4" />

          <h3 className="text-xs font-semibold text-gray-500 uppercase px-2">HELP</h3>
          <ul className="space-y-1">
            <MenuItem href="/library" icon={Book} label="Library" />
            <MenuItem href="/support" icon={LifeBuoy} label="Support" />
            <MenuItem href="/faq" icon={HelpCircle} label="FAQ" />
          </ul>

          <div className="border-t border-gray-200 my-4" />

          <h3 className="text-xs font-semibold text-gray-500 uppercase px-2">PROJECTS</h3>
          <ul className="space-y-1">
            <ProjectItem href="/projects/my-recent" iconColor="text-orange-500" label="My recent" />
            <ProjectItem href="/projects/starred" iconColor="text-blue-500" label="Starred" />
            <ProjectItem href="/projects/background" iconColor="text-pink-500" label="Background" />
          </ul>
        </nav>
      </aside>
    </>
  )
}

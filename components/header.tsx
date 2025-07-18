"use client"

import Link from "next/link"
import { Search, Bell, Mail, Menu, ChevronLeft } from "lucide-react"
import Image from "next/image"
import { useSidebar } from "@/hooks/use-sidebar" // Use our custom sidebar hook
import { useState } from "react"

export function Header() {
  const { toggleSidebar } = useSidebar()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <header className="flex h-16 items-center gap-4 bg-blue-600 px-4 md:px-6 w-screen shadow-md">
      <button
        className="lg:hidden text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white"
        onClick={toggleSidebar}
        aria-label="Toggle sidebar"
      >
        <Menu className="h-6 w-6" />
      </button>
      <div className="flex items-center">
        <ChevronLeft className="h-6 w-6 text-white mr-2" />
        <Link href="#" className="flex items-center gap-2 text-lg font-semibold text-white">
          <span>Nextjs dashboard</span>
        </Link>
      </div>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form className="ml-auto flex-1 sm:flex-initial">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <input
              type="search"
              placeholder="Search..."
              className="pl-8 w-full sm:w-[300px] md:w-[200px] lg:w-[300px] bg-white text-gray-800 border border-gray-300 rounded-md py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </form>
        <button className="relative text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white">
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 h-4 w-4 flex items-center justify-center p-0 text-xs bg-yellow-400 text-black rounded-full">
            4
          </span>
          <span className="sr-only">Notifications</span>
        </button>
        <button className="relative text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white">
          <Mail className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 h-4 w-4 flex items-center justify-center p-0 text-xs bg-red-500 text-white rounded-full">
            1
          </span>
          <span className="sr-only">Messages</span>
        </button>
        <div className="relative">
          <button
            className="rounded-full text-white p-1 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            aria-expanded={isDropdownOpen}
            aria-label="Toggle user menu"
          >
            <Image
              src="/placeholder.svg?height=32&width=32"
              width={32}
              height={32}
              alt="Avatar"
              className="rounded-full border border-gray-300"
            />
            <span className="sr-only">Toggle user menu</span>
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                My Account
              </a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Settings
              </a>
              <div className="border-t border-gray-200 my-1" />
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

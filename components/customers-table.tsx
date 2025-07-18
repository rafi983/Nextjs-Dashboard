"use client"

import type * as React from "react"
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

interface Customer {
  id: string
  name: string
  company: string
  city: string
  state: string
}

const customers: Customer[] = [
  { id: "1", name: "Joe James", company: "Example Inc.", city: "Yonkers", state: "NY" },
  { id: "2", name: "John Walsh", company: "Example Inc.", city: "Hartford", state: "CT" },
  { id: "3", name: "Bob Herm", company: "Example Inc.", city: "Tampa", state: "FL" },
  { id: "4", name: "James Houston", company: "Example Inc.", city: "Dallas", state: "TX" },
  { id: "5", name: "Prabhakar Linwood", company: "Example Inc.", city: "Hartford", state: "CT" },
  { id: "6", name: "Kaui Ignace", company: "Example Inc.", city: "Yonkers", state: "NY" },
  { id: "7", name: "Esperanza Susanne", company: "Example Inc.", city: "Hartford", state: "CT" },
  { id: "8", name: "Christian Birgitte", company: "Example Inc.", city: "Tampa", state: "FL" },
  { id: "9", name: "Meral Elias", company: "Example Inc.", city: "Hartford", state: "CT" },
  { id: "10", name: "Deep Pau", company: "Example Inc.", city: "Yonkers", state: "NY" },
  { id: "11", name: "Jane Doe", company: "Example Inc.", city: "Springfield", state: "IL" },
  { id: "12", name: "Richard Roe", company: "Example Inc.", city: "Miami", state: "FL" },
  { id: "13", name: "Alice Smith", company: "Example Inc.", city: "Boston", state: "MA" },
  { id: "14", name: "Bob Johnson", company: "Example Inc.", city: "Seattle", state: "WA" },
  { id: "15", name: "Charlie Brown", company: "Example Inc.", city: "Denver", state: "CO" },
  { id: "16", name: "Diana Prince", company: "Example Inc.", city: "Austin", state: "TX" },
  { id: "17", name: "Clark Kent", company: "Example Inc.", city: "Metropolis", state: "NY" },
]

export function CustomersTable() {
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set())
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const totalCustomers = customers.length
  const totalPages = Math.ceil(totalCustomers / rowsPerPage)
  const startIndex = (currentPage - 1) * rowsPerPage
  const endIndex = Math.min(startIndex + rowsPerPage, totalCustomers)
  const currentCustomers = customers.slice(startIndex, endIndex)

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      const newSelectedRows = new Set(currentCustomers.map((customer) => customer.id))
      setSelectedRows(newSelectedRows)
    } else {
      setSelectedRows(new Set())
    }
  }

  const handleSelectRow = (id: string, e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRows((prev) => {
      const newSet = new Set(prev)
      if (e.target.checked) {
        newSet.add(id)
      } else {
        newSet.delete(id)
      }
      return newSet
    })
  }

  const isAllSelected =
    currentCustomers.length > 0 && currentCustomers.every((customer) => selectedRows.has(customer.id))
  const isIndeterminate = selectedRows.size > 0 && !isAllSelected

  return (
    <div className="rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-4 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider w-[40px]"
            >
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-blue-600 border-gray-400 rounded focus:ring-blue-500"
                checked={isAllSelected}
                onChange={handleSelectAll}
                aria-label="Select all"
                ref={(el) => {
                  if (el) el.indeterminate = isIndeterminate
                }}
              />
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider"
            >
              Company
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider"
            >
              City
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider"
            >
              State
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-100">
          {currentCustomers.map((customer) => (
            <tr key={customer.id} className="hover:bg-gray-50">
              <td className="px-4 py-4 whitespace-nowrap">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600 border-gray-400 rounded focus:ring-blue-500"
                  checked={selectedRows.has(customer.id)}
                  onChange={(e) => handleSelectRow(customer.id, e)}
                  aria-label={`Select row ${customer.name}`}
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{customer.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{customer.company}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{customer.city}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{customer.state}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center justify-end space-x-2 py-4 pr-4 text-sm text-gray-600">
        <div className="flex items-center space-x-2">
          <span>Rows per page:</span>
          <div className="relative">
            <button
              className="flex items-center h-8 px-3 text-sm bg-transparent border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              aria-expanded={isDropdownOpen}
            >
              {rowsPerPage} <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-24 bg-white rounded-md shadow-lg py-1 z-10">
                {[5, 10, 20, 50].map((pageSize) => (
                  <a
                    key={pageSize}
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={(e) => {
                      e.preventDefault()
                      setRowsPerPage(pageSize)
                      setCurrentPage(1) // Reset to first page on rows per page change
                      setIsDropdownOpen(false)
                    }}
                  >
                    {pageSize}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="ml-4 mr-2">
          {startIndex + 1}-{endIndex} of {totalCustomers}
        </div>
        <button
          className="h-8 w-8 flex items-center justify-center bg-transparent border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
          disabled={currentPage === 1}
          aria-label="Previous page"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          className="h-8 w-8 flex items-center justify-center bg-transparent border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
          disabled={currentPage === totalPages}
          aria-label="Next page"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}

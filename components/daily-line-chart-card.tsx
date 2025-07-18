"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"

export function DailyLineChartCard() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [selectedPeriod, setSelectedPeriod] = useState("Monthly")

  const periods = ["Daily", "Weekly", "Monthly", "Yearly"]

  const handlePeriodSelect = (period: string) => {
    setSelectedPeriod(period)
    setIsDropdownOpen(false)
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="flex flex-row items-center justify-between pb-2">
        <h3 className="text-lg font-semibold text-gray-800">Daily Line Chart</h3>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 text-sm text-gray-500">
            <span className="h-2 w-2 rounded-full bg-orange-500" />
            Tablet
            <span className="h-2 w-2 rounded-full bg-blue-500 ml-2" />
            Mobile
            <span className="h-2 w-2 rounded-full bg-purple-500 ml-2" />
            Desktop
          </div>
          <div className="relative">
            <button
              className="flex items-center h-8 px-3 text-sm bg-transparent border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              aria-expanded={isDropdownOpen}
            >
              {selectedPeriod} <ChevronDown className="ml-2 h-4 w-4" />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg py-1 z-10">
                {periods.map((period) => (
                  <a
                    key={period}
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={(e) => {
                      e.preventDefault()
                      handlePeriodSelect(period)
                    }}
                  >
                    {period}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="relative h-64 w-full mt-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 300"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          {/* Y-axis labels */}
          <text x="0" y="290" fontSize="12" fill="#9ca3af">
            0
          </text>
          <text x="0" y="200" fontSize="12" fill="#9ca3af">
            2500
          </text>
          <text x="0" y="110" fontSize="12" fill="#9ca3af">
            5000
          </text>
          <text x="0" y="20" fontSize="12" fill="#9ca3af">
            7500
          </text>

          {/* X-axis labels (simplified) */}
          {Array.from({ length: 31 }).map((_, i) => (
            <text key={i} x={30 + i * (940 / 30)} y="290" fontSize="10" fill="#9ca3af" textAnchor="middle">
              {i + 1}
            </text>
          ))}

          {/* Grid lines */}
          <line x1="20" y1="270" x2="980" y2="270" stroke="#e5e7eb" strokeDasharray="2 2" />
          <line x1="20" y1="180" x2="980" y2="180" stroke="#e5e7eb" strokeDasharray="2 2" />
          <line x1="20" y1="90" x2="980" y2="90" stroke="#e5e7eb" strokeDasharray="2 2" />

          {/* Orange line (Tablet) */}
          <polyline
            fill="none"
            stroke="#f97316"
            strokeWidth="2"
            points="
              30,180 60,150 90,160 120,140 150,130 180,145 210,120 240,110 270,125 300,100 330,115 360,105 390,120 420,110 450,130 480,140 510,125 540,115 570,130 600,210 630,190 660,180 690,195 720,170 750,185 780,175 810,190 840,180 870,200 900,210 930,195 960,185 990,200
            "
          />
          {/* Blue line (Mobile/Desktop - combined for simplicity) */}
          <polyline
            fill="none"
            stroke="#6366f1"
            strokeWidth="2"
            points="
              30,250 60,220 90,230 120,210 150,200 180,215 210,190 240,180 270,195 300,170 330,185 360,175 390,190 420,180 450,200 480,210 510,195 540,185 570,200 600,140 630,120 660,110 690,125 720,100 750,115 780,105 810,120 840,110 870,130 900,140 930,125 960,115 990,130
            "
          />
        </svg>
      </div>
    </div>
  )
}

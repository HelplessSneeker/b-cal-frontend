"use client"

import { useEffect } from "react"
import { AuthProvider } from "@/components/AuthProvider"
import { CalendarHeader } from "@/components/calendar-header"
import { CalendarSidebar } from "@/components/calendar-sidebar"
import { DayView } from "@/components/day-view"
import { CalendarView, useCalendarStore } from "@/lib/stores/calendarStore"

const mockEntries = [
  {
    id: "1",
    title: "Team Standup",
    startDate: new Date(2026, 1, 3, 9, 0),
    endDate: new Date(2026, 1, 3, 10, 30),
    wholeDay: false,
  },
  {
    id: "2",
    title: "Project Planning Meeting",
    startDate: new Date(2026, 1, 3, 10, 0),
    endDate: new Date(2026, 1, 3, 11, 30),
    wholeDay: false,
  },
  {
    id: "3",
    title: "Lunch with Sarah",
    startDate: new Date(2026, 1, 3, 12, 30),
    endDate: new Date(2026, 1, 3, 13, 30),
    wholeDay: false,
  },
  {
    id: "4",
    title: "Code Review",
    startDate: new Date(2026, 1, 3, 14, 0),
    endDate: new Date(2026, 1, 3, 15, 0),
    wholeDay: false,
  },
  {
    id: "5",
    title: "Client Call",
    startDate: new Date(2026, 1, 3, 16, 0),
    endDate: new Date(2026, 1, 3, 16, 45),
    wholeDay: false,
  },
]

function CalendarPage() {
  const { setEntries, setCurrentDate, view } = useCalendarStore()

  useEffect(() => {
    setCurrentDate(new Date(2026, 1, 3))
    setEntries(mockEntries)
  }, [setEntries, setCurrentDate])

  return (
    <div className="flex h-screen flex-col">
      <CalendarHeader />
      <div className="flex flex-1 overflow-hidden">
        <CalendarSidebar />
        <main className="flex-1">
          {view === CalendarView.Day && (<DayView />)}
        </main>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <AuthProvider>
      <CalendarPage />
    </AuthProvider>
  )
}

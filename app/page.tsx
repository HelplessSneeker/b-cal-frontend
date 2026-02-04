"use client"

import { useEffect } from "react"
import { AuthProvider } from "@/components/AuthProvider"
import { CalendarHeader } from "@/components/calendar/calendar-header"
import { CalendarSidebar } from "@/components/calendar/calendar-sidebar"
import { DayView } from "@/components/calendar/views/day-view"
import { WeekView } from "@/components/calendar/views/week-view"
import { MonthView } from "@/components/calendar/views/month-view"
import { CalendarView, useCalendarStore } from "@/lib/stores/calendarStore"
import { EntryModal } from "@/components/entry-modal"

const mockEntries = [
  // Tuesday Feb 3
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
  // Monday Feb 2
  {
    id: "6",
    title: "Sprint Planning",
    startDate: new Date(2026, 1, 2, 10, 0),
    endDate: new Date(2026, 1, 2, 11, 30),
    wholeDay: false,
  },
  // Wednesday Feb 4
  {
    id: "7",
    title: "Design Review",
    startDate: new Date(2026, 1, 4, 14, 0),
    endDate: new Date(2026, 1, 4, 15, 30),
    wholeDay: false,
  },
  // Thursday Feb 5
  {
    id: "8",
    title: "1:1 with Manager",
    startDate: new Date(2026, 1, 5, 11, 0),
    endDate: new Date(2026, 1, 5, 11, 30),
    wholeDay: false,
  },
  // Friday Feb 6
  {
    id: "9",
    title: "Team Retrospective",
    startDate: new Date(2026, 1, 6, 15, 0),
    endDate: new Date(2026, 1, 6, 16, 0),
    wholeDay: true,
  },
  {
    id: "10",
    title: "Happy Hour",
    startDate: new Date(2026, 1, 6, 17, 0),
    endDate: new Date(2026, 1, 6, 18, 0),
    wholeDay: false,
  },
  {
    id: "11",
    title: "whole day test",
    startDate: new Date(2026, 1, 6, 0, 0),
    endDate: new Date(2026, 1, 7, 23, 0),
    wholeDay: true,
  }
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
          {view === CalendarView.Day && <DayView />}
          {view === CalendarView.Week && <WeekView />}
          {view === CalendarView.Month && <MonthView />}
        </main>
      </div>
      <EntryModal />
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

"use client"

import { useMemo } from "react"
import { Calendar } from "@/components/ui/calendar"
import { useCalendarStore, CalendarView } from "@/lib/stores/calendarStore"
import {
  getStartOfWeek,
  getEndOfWeek,
  getStartOfMonth,
  getEndOfMonth,
} from "@/lib/date-utils"
import type { DateRange } from "react-day-picker"

// Mock data for entry indicators
const MOCK_ENTRIES = [
  new Date(2026, 1, 7), // Feb 7, 2026
  new Date(2026, 1, 10), // Feb 10, 2026
]

export function SidebarCalendar() {
  const { view, currentDate, setCurrentDate } = useCalendarStore()

  // Calculate the visual range based on current view
  const selectedRange = useMemo((): DateRange | undefined => {
    switch (view) {
      case CalendarView.Day:
        return { from: currentDate, to: currentDate }
      case CalendarView.Week:
        return {
          from: getStartOfWeek(currentDate),
          to: getEndOfWeek(currentDate),
        }
      case CalendarView.Month:
        return {
          from: getStartOfMonth(currentDate),
          to: getEndOfMonth(currentDate),
        }
    }
  }, [view, currentDate])

  // Handle date selection based on view
  const handleSelect = (
    _range: DateRange | undefined,
    selectedDay: Date
  ) => {
    if (!selectedDay) return

    switch (view) {
      case CalendarView.Day:
        setCurrentDate(selectedDay)
        break
      case CalendarView.Week:
        setCurrentDate(getStartOfWeek(selectedDay))
        break
      case CalendarView.Month:
        setCurrentDate(getStartOfMonth(selectedDay))
        break
    }
  }

  return (
    <Calendar
      mode="range"
      captionLayout="dropdown"
      selected={selectedRange}
      onSelect={handleSelect}
      month={currentDate}
      onMonthChange={setCurrentDate}
      modifiers={{
        hasEntry: MOCK_ENTRIES,
      }}
      modifiersClassNames={{
        hasEntry: "has-entry-indicator",
      }}
    />
  )
}

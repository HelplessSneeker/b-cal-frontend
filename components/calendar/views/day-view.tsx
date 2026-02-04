"use client"

import { useCalendarStore, type CalendarEntry } from "@/lib/stores/calendarStore"
import { TimeGrid } from "@/components/calendar/time-grid"
import { DayColumn } from "@/components/calendar/day-column"

function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  )
}

function formatDayHeader(date: Date): string {
  return date.toLocaleDateString("de-DE", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

export function DayView() {
  const { currentDate, entries } = useCalendarStore()

  const dayEntries = entries.filter((entry) =>
    isSameDay(entry.startDate, currentDate)
  )

  const handleSlotClick = (time: Date) => {
    // TODO: Open entry creation modal
    console.log("Slot clicked:", time)
  }

  const handleEntryClick = (entry: CalendarEntry) => {
    // TODO: Open entry detail popover/modal
    console.log("Entry clicked:", entry)
  }

  return (
    <div className="flex h-full flex-col">
      <div className="border-b px-4 py-3">
        <h2 className="text-lg font-semibold capitalize">
          {formatDayHeader(currentDate)}
        </h2>
      </div>
      <div className="flex-1 overflow-hidden">
        <TimeGrid>
          <DayColumn
            date={currentDate}
            entries={dayEntries}
            onSlotClick={handleSlotClick}
            onEntryClick={handleEntryClick}
          />
        </TimeGrid>
      </div>
    </div>
  )
}

"use client"

import { HOUR_HEIGHT, START_HOUR, END_HOUR } from "@/lib/calendar-constants"
import { formatHour } from "@/lib/time-utils"

export function TimeColumn() {
  const hours = Array.from(
    { length: END_HOUR - START_HOUR },
    (_, i) => START_HOUR + i
  )

  return (
    <div className="flex flex-col text-xs text-muted-foreground">
      {hours.map((hour) => (
        <div
          key={hour}
          className="flex items-center justify-end pr-2"
          style={{ height: HOUR_HEIGHT }}
        >
          {formatHour(hour)}
        </div>
      ))}
    </div>
  )
}

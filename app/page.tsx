"use client"

import { AuthProvider } from "@/components/AuthProvider"
import { CalendarHeader } from "@/components/calendar-header"

function CalendarPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <CalendarHeader />
      <main className="flex-1 p-6">
        <p className="text-muted-foreground">Calendar content goes here...</p>
      </main>
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

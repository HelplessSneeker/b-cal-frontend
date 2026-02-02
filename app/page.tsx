"use client"

import { AuthProvider } from "@/components/AuthProvider"
import { CalendarHeader } from "@/components/calendar-header"
import { CalendarSidebar } from "@/components/calendar-sidebar"

function CalendarPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <CalendarHeader />
      <div className="flex flex-1">
        <CalendarSidebar />
        <main className="flex-1 p-6">
          <p className="text-muted-foreground">Calendar content goes here...</p>
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

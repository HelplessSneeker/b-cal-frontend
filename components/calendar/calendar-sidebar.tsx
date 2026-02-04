"use client"

import { PlusIcon } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { SidebarCalendar } from "@/components/calendar/sidebar-calendar"

export function CalendarSidebar() {
  const handleNewEntry = () => {
    toast.info("New Entry clicked")
  }

  return (
    <aside className="flex w-64 flex-col items-center gap-4 border-r p-4">
      <Button onClick={handleNewEntry} className="w-full self-stretch">
        <PlusIcon className="mr-2 size-4" />
        New Entry
      </Button>
      <SidebarCalendar />
    </aside>
  )
}

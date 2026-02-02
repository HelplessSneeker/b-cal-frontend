"use client"

import { PlusIcon } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"

export function CalendarSidebar() {
  const handleNewEntry = () => {
    toast.info("New Entry clicked")
  }

  return (
    <aside className="flex w-64 flex-col gap-4 border-r p-4">
      <Button onClick={handleNewEntry} className="w-full">
        <PlusIcon className="mr-2 size-4" />
        New Entry
      </Button>
      <Calendar />
    </aside>
  )
}

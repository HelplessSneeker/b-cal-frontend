"use client"

import { ChevronDownIcon } from "lucide-react"
import { toast } from "sonner"
import { useUserStore } from "@/lib/stores/userStore"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function getAvatarInitials(email: string): string {
  const [localPart, domain] = email.split("@")
  const localInitial = localPart?.[0]?.toUpperCase() ?? ""
  const domainInitial = domain?.[0]?.toUpperCase() ?? ""
  return `${localInitial}${domainInitial}`
}

export function CalendarHeader() {
  const { user } = useUserStore()
  const initials = user?.email ? getAvatarInitials(user.email) : "?"

  const handleTodayClick = () => {
    toast.info("Today button clicked")
  }

  const handleViewChange = (view: string) => {
    toast.info(`View changed to: ${view}`)
  }

  const handleAvatarMenuClick = (action: string) => {
    toast.info(`${action} clicked`)
  }

  return (
    <header className="flex items-center justify-between border-b px-6 py-4">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-bold">Calendar</h1>
        <Button variant="outline" size="sm" onClick={handleTodayClick}>
          Today
        </Button>
        <span className="text-muted-foreground">January 2026</span>
      </div>

      <div className="flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm">
              Month
              <ChevronDownIcon className="ml-1 size-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => handleViewChange("Day")}>
              Day
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleViewChange("Week")}>
              Week
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleViewChange("Month")}>
              Month
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Avatar>
                <AvatarFallback>{initials}</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>{user?.email}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => handleAvatarMenuClick("Settings")}>
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleAvatarMenuClick("Profile")}>
              Profile
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              variant="destructive"
              onClick={() => handleAvatarMenuClick("Logout")}
            >
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

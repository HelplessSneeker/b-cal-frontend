"use client"

import { useRouter } from "next/navigation"
import { logout } from "@/lib/auth"
import { useUserStore } from "@/lib/stores/userStore"
import { AuthProvider } from "@/components/AuthProvider"
import { Button } from "@/components/ui/button"

function Dashboard() {
  const router = useRouter()
  const { user, clearUser } = useUserStore()

  const handleLogout = async () => {
    await logout()
    clearUser()
    router.push("/login")
    router.refresh()
  }

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <Button variant="outline" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="space-y-2">
        <p><span className="font-medium">User ID:</span> {user?.id}</p>
        <p><span className="font-medium">Email:</span> {user?.email}</p>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <AuthProvider>
      <Dashboard />
    </AuthProvider>
  )
}

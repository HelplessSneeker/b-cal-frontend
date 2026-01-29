"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { logout, getMe, type User } from "@/lib/auth"
import { Button } from "@/components/ui/button"

export default function Home() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getMe().then((userData) => {
      setUser(userData)
      setIsLoading(false)
      if (!userData) {
        router.push("/login")
      }
    })
  }, [router])

  const handleLogout = async () => {
    await logout()
    router.push("/login")
    router.refresh()
  }

  if (isLoading) {
    return (
      <div className="p-6">
        <p>Loading...</p>
      </div>
    )
  }

  if (!user) {
    return null
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
        <p><span className="font-medium">User ID:</span> {user.id}</p>
        <p><span className="font-medium">Email:</span> {user.email}</p>
      </div>
    </div>
  )
}

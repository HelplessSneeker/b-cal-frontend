// Authentication utilities for NestJS backend

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3000"

export interface User {
  id: string
  email: string
}

export interface AuthResponse {
  success: boolean
  error?: string
  user?: User
}

export async function login(email: string, password: string): Promise<AuthResponse> {
  try {
    const response = await fetch(`${BACKEND_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    })

    if (!response.ok) {
      const data = await response.json().catch(() => ({}))
      return { success: false, error: data.message || "Login failed" }
    }

    return { success: true }
  } catch {
    return { success: false, error: "Network error. Please try again." }
  }
}

export async function signup(email: string, password: string): Promise<AuthResponse> {
  try {
    const response = await fetch(`${BACKEND_URL}/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    })

    if (!response.ok) {
      const data = await response.json().catch(() => ({}))
      return { success: false, error: data.message || "Signup failed" }
    }

    return { success: true }
  } catch {
    return { success: false, error: "Network error. Please try again." }
  }
}

export async function logout(): Promise<void> {
  try {
    await fetch(`${BACKEND_URL}/auth/logout`, {
      method: "POST",
      credentials: "include",
    })
  } catch {
    // Ignore errors on logout
  }
}

export async function getMe(): Promise<User | null> {
  try {
    const response = await fetch(`${BACKEND_URL}/auth/me`, {
      method: "GET",
      credentials: "include",
    })

    if (!response.ok) {
      return null
    }

    const data = await response.json()
    return { id: data.id, email: data.email }
  } catch {
    return null
  }
}

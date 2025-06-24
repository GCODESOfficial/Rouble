"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { useRouter } from "next/navigation"

type AuthContextType = {
  isLoggedIn: boolean
  login: (username: string, password: string) => Promise<{ success: boolean; message: string }>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const router = useRouter()

  // Check if user is logged in on initial load
  useEffect(() => {
    const authStatus = localStorage.getItem("isLoggedIn") === "true"
    setIsLoggedIn(authStatus)
  }, [])

  const login = async (username: string, password: string) => {
    // Check against environment variables or hardcoded values for demo
    const validUsername = process.env.NEXT_PUBLIC_LOGIN_USERNAME || "admin"
    const validPassword = process.env.NEXT_PUBLIC_LOGIN_PASSWORD || "password"

    if (username === validUsername && password === validPassword) {
      localStorage.setItem("isLoggedIn", "true")
      setIsLoggedIn(true)
      return { success: true, message: "Login successful" }
    }

    return { success: false, message: "Invalid username or password" }
  }

  const logout = () => {
    localStorage.removeItem("isLoggedIn")
    setIsLoggedIn(false)
    router.push("/login")
  }

  return <AuthContext.Provider value={{ isLoggedIn, login, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

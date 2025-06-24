import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { username, password } = body

  // Get environment variables
  const expectedUsername = process.env.LOGIN_USERNAME || "admin"
  const expectedPassword = process.env.LOGIN_PASSWORD || "password"

  console.log(`Login attempt: Username=${username}, Expected=${expectedUsername}`)

  if (username === expectedUsername && password === expectedPassword) {
    console.log("Login successful, setting cookie")

    // Create response
    const response = NextResponse.json({
      success: true,
      message: "Login successful",
    })

    // Set cookie with explicit parameters
    response.cookies.set({
      name: "auth",
      value: "true",
      path: "/",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60, // 1 hours
      sameSite: "lax",
    })

    console.log("Cookie set:", response.cookies.get("auth"))
    return response
  }

  console.log("Login failed: Invalid credentials")
  return NextResponse.json({ success: false, message: "Invalid username or password" }, { status: 401 })
}
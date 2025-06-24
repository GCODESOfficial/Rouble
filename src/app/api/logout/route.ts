import { NextResponse } from "next/server"

export async function POST() {
  console.log("Logout: Clearing auth cookie")

  const response = NextResponse.json({ success: true, message: "Logged out" })

  // Clear the cookie
  response.cookies.set({
    name: "auth",
    value: "",
    path: "/",
    maxAge: 0,
  })

  return response
}

import { type NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
  const authCookie = req.cookies.get("auth")
  const isLoggedIn = authCookie?.value === "true"

  const debugAuth = process.env.DEBUG_AUTH === "true"
  if (debugAuth) {
    console.log("Check auth API:", {
      authCookie: authCookie
        ? {
            name: authCookie.name,
            value: authCookie.value,
          }
        : null,
      isLoggedIn,
    })
  }

  return NextResponse.json({ isLoggedIn })
}
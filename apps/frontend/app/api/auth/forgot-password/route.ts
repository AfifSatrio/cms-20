import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import crypto from "crypto"
import { Resend } from "resend"

// ⛔ PENTING: pastikan ini hanya jalan di Node.js
export const runtime = "nodejs"

function getResend() {
  const apiKey = process.env.RESEND_API_KEY

  // ❗ JANGAN throw error di build
  if (!apiKey) {
    console.warn("RESEND_API_KEY is missing")
    return null
  }

  return new Resend(apiKey)
}

export async function POST(req: Request) {
  try {
    const { email } = await req.json()

    // response netral (anti email enumeration)
    if (!email) {
      return NextResponse.json({ message: "OK" })
    }

    const user = await prisma.user.findUnique({
      where: { email },
    })

    if (!user) {
      return NextResponse.json({ message: "OK" })
    }

    const token = crypto.randomBytes(32).toString("hex")
    const tokenHash = crypto
      .createHash("sha256")
      .update(token)
      .digest("hex")

    const expiresAt = new Date(Date.now() + 1000 * 60 * 60)

    await prisma.passwordResetToken.create({
      data: {
        tokenHash,
        expiresAt,
        userId: user.id,
      },
    })

    const appUrl = process.env.NEXT_PUBLIC_APP_URL
    if (!appUrl) {
      console.warn("NEXT_PUBLIC_APP_URL is missing")
      return NextResponse.json({ message: "OK" })
    }

    const resetLink = `${appUrl}/set-new-password?token=${token}`

    const resend = getResend()

    // 🔥 JANGAN bikin build gagal hanya karena email
    if (resend) {
      await resend.emails.send({
        from: process.env.FROM_EMAIL ?? "no-reply@example.com",
        to: user.email,
        subject: "Reset your password",
        html: `
          <p>You requested to reset your password.</p>
          <p><a href="${resetLink}">Click here to reset your password</a></p>
          <p>This link will expire in 1 hour.</p>
        `,
      })
    }

    return NextResponse.json({ message: "OK" })
  } catch (error) {
    console.error("FORGOT PASSWORD ERROR:", error)
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    )
  }
}

import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import crypto from "crypto"
import { Resend } from "resend"

function getResend() {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not set")
  }
  return new Resend(process.env.RESEND_API_KEY)
}

export async function POST(req: Request) {
  try {
    const { email } = await req.json()

    if (!email) {
      return NextResponse.json({ message: "OK" })
    }

    const user = await prisma.user.findUnique({
      where: { email },
    })

    if (!user) {
      // jangan bocorkan apakah email ada
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

    const resetLink = `${process.env.NEXT_PUBLIC_APP_URL}/set-new-password?token=${token}`

    const resend = getResend()

    await resend.emails.send({
      from: process.env.FROM_EMAIL!,
      to: user.email,
      subject: "Reset your password",
      html: `
        <p>You requested to reset your password.</p>
        <p><a href="${resetLink}">Click here to reset your password</a></p>
        <p>This link will expire in 1 hour.</p>
      `,
    })

    return NextResponse.json({ message: "OK" })
  } catch (error) {
    console.error("FORGOT PASSWORD ERROR:", error)
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    )
  }
}

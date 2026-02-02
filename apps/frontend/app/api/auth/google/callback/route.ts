import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { SignJWT } from "jose";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");

  if (!code) {
    return NextResponse.redirect("/login?error=google_failed");
  }

  // 1️⃣ Tukar code → access_token
  const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: process.env.GOOGLE_CLIENT_ID!,
      client_secret: process.env.GOOGLE_CLIENT_SECRET!,
      redirect_uri: process.env.GOOGLE_REDIRECT_URI!,
      grant_type: "authorization_code",
      code,
    }),
  });

  const tokenData = await tokenRes.json();

  // 2️⃣ Ambil profile user
  const userRes = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
    headers: {
      Authorization: `Bearer ${tokenData.access_token}`,
    },
  });

  const googleUser = await userRes.json();

  const email = googleUser.email;

  // 3️⃣ Cari / buat user
  let user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    user = await prisma.user.create({
      data: {
        email,
        name: googleUser.name,
        pictureUrl: googleUser.picture,
        accounts: {
          create: {
            provider: "GOOGLE",
            providerId: googleUser.sub,
          },
        },
      },
    });
  }

  // 4️⃣ Buat JWT session
  const jwt = await new SignJWT({
    sub: user.id,
    email: user.email,
  })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("7d")
    .sign(new TextEncoder().encode(process.env.JWT_SECRET!));

  // 5️⃣ Set cookie + redirect
  const res = NextResponse.redirect(new URL("/dashboard", req.url));
  res.cookies.set("session", jwt, {
    httpOnly: true,
    path: "/",
  });

  return res;
}

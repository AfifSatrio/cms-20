"use client";

import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const ForgotPasswordPage = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      // 🔐 selalu redirect (anti email enumeration)
      router.push("/check-email");
    } catch (err) {
      setError("Terjadi kesalahan. Coba lagi.");
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-zinc-900">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg dark:bg-zinc-800">
        <h1 className="text-center text-3xl font-bold">Forgot Password</h1>

        <p className="mb-8 mt-4 text-center text-sm text-gray-600 dark:text-gray-300">
          Enter your email and we’ll send you a reset link.
        </p>

        {error && (
          <div className="mb-4 rounded bg-red-100 p-3 text-sm text-red-700">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="mb-2 block text-sm font-medium">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border p-3"
            />
          </div>

          <button
            disabled={loading}
            className="mt-6 w-full rounded-lg bg-green-700 py-3 font-semibold text-white disabled:opacity-60"
          >
            {loading ? "Sending..." : "Reset Password"}
          </button>
        </form>

        <a
          href="/login"
          className="mt-6 flex items-center justify-center gap-2 text-sm"
        >
          <ArrowLeft className="h-4 w-4" /> Back to login
        </a>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;

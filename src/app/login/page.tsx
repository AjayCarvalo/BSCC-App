// src/app/login/page.tsx
"use client";

import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const formData = new FormData(e.currentTarget);

    const res = await signIn("credentials", {
      redirect: false,
      email: formData.get("email"),
      password: formData.get("password"),
    });

    if (res?.error) {
      setError(res.error);
    } else {
      // after login, send admins to /admin, players to /player (later)
      router.push("/admin");
    }
  }

  return (
    <div className="max-w-md mx-auto mt-8 bg-white-900 p-6 rounded-xl border border-neutral-800">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-3 py-2 rounded bg-white-800 border border-neutral-700 text-sm"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Password</label>
          <input
            type="password"
            name="password"
            required
            className="w-full px-3 py-2 rounded bg-white-800 border border-neutral-700 text-sm"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 rounded bg-yellow-400 text-black font-semibold text-sm"
        >
          Login
        </button>
        {error && <p className="text-sm text-red-400 mt-2">{error}</p>}
      </form>
    </div>
  );
}

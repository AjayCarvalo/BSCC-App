// src/app/register/page.tsx
"use client";

import { FormEvent, useState } from "react";

export default function RegisterPage() {
  const [status, setStatus] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const res = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
        role: formData.get("role"),
      }),
    });

    if (res.ok) {
      setStatus("User created successfully");
      (e.target as HTMLFormElement).reset();
    } else {
      const data = await res.json();
      setStatus(data.error || "Something went wrong");
    }
  }

  return (
    <div className="max-w-md mx-auto mt-8 bg-neutral-900 p-6 rounded-xl border border-neutral-800">
      <h1 className="text-2xl font-bold mb-4">Register user (temp page)</h1>
      <p className="text-sm text-gray-400 mb-4">
        Use this just to create your first ROOT_ADMIN and admin users. Later we
        can remove or lock this page.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm mb-1">Name</label>
          <input
            name="name"
            className="w-full px-3 py-2 rounded bg-neutral-800 border border-neutral-700 text-sm"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-3 py-2 rounded bg-neutral-800 border border-neutral-700 text-sm"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Password</label>
          <input
            type="password"
            name="password"
            required
            className="w-full px-3 py-2 rounded bg-neutral-800 border border-neutral-700 text-sm"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Role</label>
          <select
            name="role"
            className="w-full px-3 py-2 rounded bg-neutral-800 border border-neutral-700 text-sm"
          >
            <option value="ROOT_ADMIN">ROOT_ADMIN</option>
            <option value="ADMIN">ADMIN</option>
            <option value="MEMBERSHIP_ADMIN">MEMBERSHIP_ADMIN</option>
            <option value="PLAYER">PLAYER</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full py-2 rounded bg-yellow-400 text-black font-semibold text-sm"
        >
          Create user
        </button>

        {status && (
          <p className="text-sm mt-2 text-yellow-300">
            {status}
          </p>
        )}
      </form>
    </div>
  );
}

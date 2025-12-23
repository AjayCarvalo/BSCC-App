// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Braywood Stallions CC",
  description: "Official website of Braywood Stallions Cricket Club (BSCC)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-white">
        <div className="min-h-screen flex flex-col">
          {/* Top black strip (Section 1) */}
          <div className="w-full bg-black text-xs text-gray-300">
            <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-1">
              {/* Left: social icons placeholder */}
              <div className="flex gap-3">
                <span>Facebook</span>
                <span>X</span>
                <span>YouTube</span>
                <span>Install App</span>
              </div>
              {/* Right: 3 links placeholder */}
              <div className="flex gap-4">
                <a href="#" className="hover:text-white">
                  League
                </a>
                <a href="#" className="hover:text-white">
                  Play-Cricket
                </a>
                <a href="#" className="hover:text-white">
                  RBWM
                </a>
              </div>
            </div>
          </div>

          {/* Nav bar (Section 2) */}
          <header className="w-full bg-[#800000]">
            <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
              {/* Left: logo + name */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold">
                  BS
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="font-bold text-lg">
                    Braywood Stallions CC
                  </span>
                  <span className="text-xs text-gray-200">
                    Braywood Stallions Cricket Club
                  </span>
                </div>
              </div>

              {/* Right: nav links + buttons */}
              <nav className="flex items-center gap-4 text-sm">
                <a href="/" className="hover:underline">
                  Home
                </a>
                <a href="/fixtures" className="hover:underline">
                  Fixtures
                </a>
                <a href="/table" className="hover:underline">
                  Table
                </a>
                <a href="/news" className="hover:underline">
                  News
                </a>
                <a href="/media" className="hover:underline">
                  Media
                </a>
                <a href="/contact" className="hover:underline">
                  Contact
                </a>
                <a href="/information" className="hover:underline">
                  Information
                </a>

                {/* Buttons */}
                <a
                  href="/join"
                  className="ml-2 border border-white/60 px-3 py-1 rounded-full text-xs hover:bg-white hover:text-[#800000] transition"
                >
                  Join
                </a>
                <a
                  href="/login"
                  className="border border-yellow-400 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-semibold hover:bg-yellow-300 transition"
                >
                  Login
                </a>
              </nav>
            </div>
          </header>

          {/* Page content */}
          <main className="flex-1">
            <div className="max-w-6xl mx-auto px-4 py-6">{children}</div>
          </main>

          {/* Footer (Sections 9 & 10 combined for now) */}
          <footer className="mt-8">
            {/* Main footer */}
            <div className="bg-neutral-900 border-t border-neutral-800">
              <div className="max-w-6xl mx-auto px-4 py-8 grid gap-6 md:grid-cols-3 text-sm text-gray-300">
                {/* Club name & address */}
                <div>
                  <h3 className="font-semibold text-white mb-2">
                    Braywood Stallions Cricket Club
                  </h3>
                  <p>
                    Braywood CC Ground
                    <br />
                    Fifield, Berkshire
                    <br />
                    SL4 XXX
                  </p>
                </div>

                {/* Quick links */}
                <div>
                  <h3 className="font-semibold text-white mb-2">
                    Quick Links
                  </h3>
                  <ul className="space-y-1">
                    <li>
                      <a href="/fixtures" className="hover:underline">
                        Fixtures
                      </a>
                    </li>
                    <li>
                      <a href="/table" className="hover:underline">
                        League Table
                      </a>
                    </li>
                    <li>
                      <a href="/news" className="hover:underline">
                        News
                      </a>
                    </li>
                    <li>
                      <a href="/contact" className="hover:underline">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Newsletter */}
                <div>
                  <h3 className="font-semibold text-white mb-2">
                    Join our newsletter
                  </h3>
                  <p className="mb-3">
                    Get updates about fixtures, results, and club news.
                  </p>
                  <form className="flex gap-2">
                    <input
                      type="email"
                      placeholder="Your email"
                      className="flex-1 px-3 py-2 rounded-md bg-neutral-800 text-white text-sm border border-neutral-700 focus:outline-none focus:ring-1 focus:ring-yellow-400"
                    />
                    <button
                      type="submit"
                      className="px-3 py-2 text-sm rounded-md bg-yellow-400 text-black font-semibold hover:bg-yellow-300"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Bottom strip (Section 10) */}
            <div className="bg-black text-xs text-gray-400">
              <div className="max-w-6xl mx-auto px-4 py-2 flex justify-between">
                <span>
                  © {new Date().getFullYear()} Braywood Stallions Cricket Club.
                  All rights reserved.
                </span>
                <span>Website by NextGen Technologies</span>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}

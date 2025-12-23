// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import AuthSessionProvider from "@/components/SessionProvider";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import Image from "next/image";


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
        <AuthSessionProvider>
        <div className="min-h-screen flex flex-col">

{/* Section 1: Top black strip */}
<div className="w-full bg-black text-xs text-gray-300">
  <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-2">
    
    {/* Left: Social media icons */}
    <div className="flex items-center gap-4">
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition"
        aria-label="Facebook"
      >
        <FaFacebookF size={14} />
      </a>

      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition"
        aria-label="Instagram"
      >
        <FaInstagram size={15} />
      </a>

      <a
        href="https://www.youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition"
        aria-label="YouTube"
      >
        <FaYoutube size={16} />
      </a>
    </div>

    {/* Right: External links */}
    <div className="flex items-center gap-4">
      <a 
      href="https://tvlcricket.uk/"
      target="_blank" 
      rel="noopener noreferrer"
      className="hover:text-white transition">
        TVCL
      </a>
      <a href="https://middlesexpremier.co.uk/"
      target="_blank" 
      rel="noopener noreferrer" 
      className="hover:text-white transition">
        MPCL
      </a>
      <a href="https://braywoodcc.play-cricket.com/"
      target="_blank" 
      rel="noopener noreferrer" 
      className="hover:text-white transition">
        Play-Cricket
      </a>
    </div>
  </div>
</div>

          {/* Nav bar (Section 2) */}
          <header className="w-full bg-[#800000]">
            <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">

              {/* Left: logo + name */}
              <div className="flex items-center gap-3 text-white">
              
                    {/* Logo */}
              <Image
                src="/logo.jpg"
                alt="Braywood Stallions CC Logo"
                width={150}
                height={150}
                className="object-contain rounded-md"
                priority
              />

                <div className="flex flex-col leading-tight">
                  <span className="font-bold text-lg">
                    Braywood Stallions CC
                  </span>
                  <span className="text-xs text-gray-200">
                    
                  </span>
                </div>
              </div>

              {/* Right: nav links + buttons */}
              <nav className="flex items-center gap-4 text-sm text-white">
                <Link href="/" className="hover:underline">
                  Home
                </Link>
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
                {/* <a
                  href="/register"
                  className="ml-2 border border-white/60 px-3 py-1 rounded-full text-xs hover:bg-white hover:text-[#800000] transition"
                >
                  Register
                </a> */}
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
            <div className="bg-red-900 border-t border-neutral-800">
              <div className="max-w-6xl mx-auto px-4 py-8 grid gap-6 md:grid-cols-3 text-sm text-gray-300">
                {/* Club name & address */}
                <div>
                  <h3 className="font-semibold text-white mb-2">
                    Braywood Stallions Cricket Club
                  </h3>
                  <p>
                    Oakley Green Road
                    <br />
                    Fifield, Windsor
                    <br />
                    SL4 4QF
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
        </AuthSessionProvider>
      </body>
    </html>
  );
}

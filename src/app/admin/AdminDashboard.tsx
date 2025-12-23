// src/components/admin/AdminDashboard.tsx
"use client";

import { useState, FormEvent } from "react";
import { signOut } from "next-auth/react";

type AdminDashboardProps = {
  userName: string;
  role: string;
};

type AdminSection =
  | "HERO"
  | "NEWS"
  | "MEDIA"
  | "AFFILIATIONS"
  | "SPONSORS"
  | "FORMS";

export default function AdminDashboard({ userName, role }: AdminDashboardProps) {
  const [activeSection, setActiveSection] = useState<AdminSection>("HERO");

  // For now, just log the form data – later we will call API routes.
  function handleSimpleSubmit(e: FormEvent<HTMLFormElement>, label: string) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    console.log(`[${label}] submitted:`, data);
    alert(`${label} submitted (check console for data).`);
    e.currentTarget.reset();
  }

  return (
    <div className="mt-4 space-y-4">
      {/* Top bar: user info + sign out (top-right) */}
      <header className="bg-neutral-900 border border-neutral-800 rounded-2xl px-4 py-3 flex items-center justify-between">
        <div>
          <h1 className="text-lg font-semibold">Admin Dashboard</h1>
          <p className="text-xs text-gray-400">
            Manage homepage hero, news, media, affiliations, sponsors and player
            forms.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-sm font-semibold">
              {userName}{" "}
              <span className="text-[10px] uppercase bg-yellow-500/10 text-yellow-300 px-2 py-0.5 rounded-full ml-1">
                {role}
              </span>
            </p>
            <p className="text-xs text-gray-400">Braywood Stallions CC</p>
          </div>
          <button
            onClick={() => signOut({ callbackUrl: "/login" })}
            className="px-3 py-2 rounded-xl bg-red-500/10 text-red-300 text-xs font-semibold hover:bg-red-500/20 transition"
          >
            Sign out
          </button>
        </div>
      </header>

      {/* Main area: left = actions, right = details */}
      <div className="flex gap-4">
        {/* Left pane: action bar */}
        <aside className="w-64 bg-neutral-900 border border-neutral-800 rounded-2xl p-4 flex flex-col shrink-0">
          <nav className="flex-1 space-y-1 text-sm">
            <SidebarButton
              label="Hero section images"
              description="Manage main homepage banner images"
              active={activeSection === "HERO"}
              onClick={() => setActiveSection("HERO")}
            />
            <SidebarButton
              label="News"
              description="Create and edit news posts"
              active={activeSection === "NEWS"}
              onClick={() => setActiveSection("NEWS")}
            />
            <SidebarButton
              label="Media"
              description="Photo albums & videos"
              active={activeSection === "MEDIA"}
              onClick={() => setActiveSection("MEDIA")}
            />
            <SidebarButton
              label="Affiliations"
              description="League & governing body logos"
              active={activeSection === "AFFILIATIONS"}
              onClick={() => setActiveSection("AFFILIATIONS")}
            />
            <SidebarButton
              label="Sponsors"
              description="Club sponsors & partners"
              active={activeSection === "SPONSORS"}
              onClick={() => setActiveSection("SPONSORS")}
            />
            <SidebarButton
              label="Player forms"
              description="Approve players & grant login"
              active={activeSection === "FORMS"}
              onClick={() => setActiveSection("FORMS")}
            />
          </nav>

          <div className="mt-4 pt-4 border-t border-neutral-800 text-xs text-gray-500">
            <p>Later we&apos;ll connect these forms to the database & APIs.</p>
          </div>
        </aside>

        {/* Right pane: content / details */}
        <section className="flex-1 bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
          {activeSection === "HERO" && (
            <HeroSectionForm onSubmit={handleSimpleSubmit} />
          )}
          {activeSection === "NEWS" && (
            <NewsSectionForm onSubmit={handleSimpleSubmit} />
          )}
          {activeSection === "MEDIA" && (
            <MediaSectionForm onSubmit={handleSimpleSubmit} />
          )}
          {activeSection === "AFFILIATIONS" && (
            <AffiliationsSectionForm onSubmit={handleSimpleSubmit} />
          )}
          {activeSection === "SPONSORS" && (
            <SponsorsSectionForm onSubmit={handleSimpleSubmit} />
          )}
          {activeSection === "FORMS" && <FormsSection />}
        </section>
      </div>
    </div>
  );
}

/* ---------- Sidebar button component ---------- */

type SidebarButtonProps = {
  label: string;
  description: string;
  active: boolean;
  onClick: () => void;
};

function SidebarButton({
  label,
  description,
  active,
  onClick,
}: SidebarButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        "w-full text-left px-3 py-2 rounded-xl transition border " +
        (active
          ? "bg-[#800000] border-[#b03030] text-white"
          : "bg-neutral-900 border-transparent hover:border-neutral-700 text-gray-200")
      }
    >
      <div className="text-[13px] font-semibold">{label}</div>
      <div className="text-[11px] text-gray-400">{description}</div>
    </button>
  );
}

/* ---------- Forms / sections ---------- */

type SimpleFormProps = {
  onSubmit: (e: FormEvent<HTMLFormElement>, label: string) => void;
};

/* 1. Hero section images */

function HeroSectionForm({ onSubmit }: SimpleFormProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Hero Section Images</h2>
      <p className="text-sm text-gray-400 mb-4">
        Add or update images that appear in the main homepage hero section.
        Later we can support actual file uploads – for now, use image URLs from
        your storage (e.g. Cloudinary, Imgur, etc.).
      </p>

      <form
        onSubmit={(e) => onSubmit(e, "Hero images")}
        className="space-y-4 max-w-xl"
      >
        <div>
          <label className="block text-sm mb-1">Title / Caption</label>
          <input
            name="title"
            className="w-full px-3 py-2 rounded-md bg-neutral-800 border border-neutral-700 text-sm"
            placeholder="e.g. BSCC 1st XI vs Example CC"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Image URL</label>
          <input
            name="imageUrl"
            className="w-full px-3 py-2 rounded-md bg-neutral-800 border border-neutral-700 text-sm"
            placeholder="https://..."
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Display order</label>
          <input
            name="order"
            type="number"
            min={1}
            className="w-32 px-3 py-2 rounded-md bg-neutral-800 border border-neutral-700 text-sm"
            placeholder="1"
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 rounded-full bg-yellow-400 text-black font-semibold text-sm hover:bg-yellow-300"
        >
          Save hero image
        </button>
      </form>
    </div>
  );
}

/* 2. News */

function NewsSectionForm({ onSubmit }: SimpleFormProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">News</h2>
      <p className="text-sm text-gray-400 mb-4">
        Create a news item. Latest items will appear on the Home page, and the
        full list will show on the News page.
      </p>

      <form
        onSubmit={(e) => onSubmit(e, "News")}
        className="space-y-4 max-w-xl"
      >
        <div>
          <label className="block text-sm mb-1">Headline</label>
          <input
            name="headline"
            required
            className="w-full px-3 py-2 rounded-md bg-neutral-800 border border-neutral-700 text-sm"
            placeholder="e.g. BSCC win thriller by 2 runs"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Short summary</label>
          <input
            name="summary"
            className="w-full px-3 py-2 rounded-md bg-neutral-800 border border-neutral-700 text-sm"
            placeholder="One or two sentence summary"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Image URL (optional)</label>
          <input
            name="imageUrl"
            className="w-full px-3 py-2 rounded-md bg-neutral-800 border border-neutral-700 text-sm"
            placeholder="https://..."
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Full content</label>
          <textarea
            name="content"
            rows={5}
            className="w-full px-3 py-2 rounded-md bg-neutral-800 border border-neutral-700 text-sm"
            placeholder="Full match report or detailed news"
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 rounded-full bg-yellow-400 text-black font-semibold text-sm hover:bg-yellow-300"
        >
          Publish news
        </button>
      </form>
    </div>
  );
}

/* 3. Media (photos or videos) */

function MediaSectionForm({ onSubmit }: SimpleFormProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Media</h2>
      <p className="text-sm text-gray-400 mb-4">
        Create a photo album or add a video via YouTube link. The most recent
        items will appear on the Home & Media pages.
      </p>

      <form
        onSubmit={(e) => onSubmit(e, "Media")}
        className="space-y-4 max-w-xl"
      >
        <div>
          <label className="block text-sm mb-1">Title</label>
          <input
            name="title"
            required
            className="w-full px-3 py-2 rounded-md bg-neutral-800 border border-neutral-700 text-sm"
            placeholder="e.g. BSCC vs Example CC – Highlights"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Type</label>
          <select
            name="type"
            className="w-full px-3 py-2 rounded-md bg-neutral-800 border border-neutral-700 text-sm"
          >
            <option value="PHOTOS">Photo album</option>
            <option value="VIDEO">Video (YouTube)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm mb-1">
            Cover image URL (album cover or video thumbnail)
          </label>
          <input
            name="coverImageUrl"
            className="w-full px-3 py-2 rounded-md bg-neutral-800 border border-neutral-700 text-sm"
            placeholder="https://..."
          />
        </div>

        <div>
          <label className="block text-sm mb-1">
            YouTube URL (only if type is Video)
          </label>
          <input
            name="youtubeUrl"
            className="w-full px-3 py-2 rounded-md bg-neutral-800 border border-neutral-700 text-sm"
            placeholder="https://www.youtube.com/watch?v=..."
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 rounded-full bg-yellow-400 text-black font-semibold text-sm hover:bg-yellow-300"
        >
          Save media item
        </button>
      </form>
    </div>
  );
}

/* 4. Affiliations */

function AffiliationsSectionForm({ onSubmit }: SimpleFormProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Affiliations</h2>
      <p className="text-sm text-gray-400 mb-4">
        Add governing body / league logos that appear in the Affiliations
        section on the Home page.
      </p>

      <form
        onSubmit={(e) => onSubmit(e, "Affiliations")}
        className="space-y-4 max-w-xl"
      >
        <div>
          <label className="block text-sm mb-1">Name</label>
          <input
            name="name"
            required
            className="w-full px-3 py-2 rounded-md bg-neutral-800 border border-neutral-700 text-sm"
            placeholder="e.g. ECB, Berkshire Cricket Board"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Logo URL</label>
          <input
            name="logoUrl"
            required
            className="w-full px-3 py-2 rounded-md bg-neutral-800 border border-neutral-700 text-sm"
            placeholder="https://..."
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Website URL (optional)</label>
          <input
            name="linkUrl"
            className="w-full px-3 py-2 rounded-md bg-neutral-800 border border-neutral-700 text-sm"
            placeholder="https://..."
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 rounded-full bg-yellow-400 text-black font-semibold text-sm hover:bg-yellow-300"
        >
          Save affiliation
        </button>
      </form>
    </div>
  );
}

/* 5. Sponsors */

function SponsorsSectionForm({ onSubmit }: SimpleFormProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Sponsors</h2>
      <p className="text-sm text-gray-400 mb-4">
        Add sponsor logos and links that appear in the Sponsors section on the
        Home page.
      </p>

      <form
        onSubmit={(e) => onSubmit(e, "Sponsors")}
        className="space-y-4 max-w-xl"
      >
        <div>
          <label className="block text-sm mb-1">Sponsor name</label>
          <input
            name="name"
            required
            className="w-full px-3 py-2 rounded-md bg-neutral-800 border border-neutral-700 text-sm"
            placeholder="e.g. NextGen Technologies"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Logo URL</label>
          <input
            name="logoUrl"
            required
            className="w-full px-3 py-2 rounded-md bg-neutral-800 border border-neutral-700 text-sm"
            placeholder="https://..."
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Website URL</label>
          <input
            name="linkUrl"
            className="w-full px-3 py-2 rounded-md bg-neutral-800 border border-neutral-700 text-sm"
            placeholder="https://..."
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 rounded-full bg-yellow-400 text-black font-semibold text-sm hover:bg-yellow-300"
        >
          Save sponsor
        </button>
      </form>
    </div>
  );
}

/* 6. Player forms approval */

function FormsSection() {
  // For now, just fake some sample data.
  const sampleForms = [
    {
      id: 1,
      playerName: "John Smith",
      team: "BSCC 1st XI",
      email: "john@example.com",
      status: "PENDING",
    },
    {
      id: 2,
      playerName: "Alex Patel",
      team: "BSCC 2nd XI",
      email: "alex@example.com",
      status: "PENDING",
    },
  ];

  function handleApprove(id: number) {
    console.log("Approve form ID:", id);
    alert(
      `Form ${id} approved (mock). In real app we will update DB & grant login.`
    );
  }

  function handleReject(id: number) {
    console.log("Reject form ID:", id);
    alert(`Form ${id} rejected (mock).`);
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Player Forms</h2>
      <p className="text-sm text-gray-400 mb-4">
        Review player registration forms. Once approved, the player will be able
        to log in with their account (later, this will be linked to the forms
        table and user creation logic).
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-sm border-separate border-spacing-y-2">
          <thead className="text-gray-400 text-xs">
            <tr>
              <th className="text-left px-2">Player</th>
              <th className="text-left px-2">Team</th>
              <th className="text-left px-2">Email</th>
              <th className="text-left px-2">Status</th>
              <th className="text-left px-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sampleForms.map((form) => (
              <tr key={form.id} className="bg-neutral-900/70">
                <td className="px-2 py-2">{form.playerName}</td>
                <td className="px-2 py-2">{form.team}</td>
                <td className="px-2 py-2">{form.email}</td>
                <td className="px-2 py-2">
                  <span className="inline-flex items-center rounded-full bg-yellow-500/10 text-yellow-300 px-2 py-0.5 text-[11px]">
                    {form.status}
                  </span>
                </td>
                <td className="px-2 py-2">
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleApprove(form.id)}
                      className="px-2 py-1 rounded-full bg-green-500/80 text-xs text-black font-semibold hover:bg-green-400"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleReject(form.id)}
                      className="px-2 py-1 rounded-full bg-red-500/80 text-xs text-black font-semibold hover:bg-red-400"
                    >
                      Reject
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {sampleForms.length === 0 && (
              <tr>
                <td
                  className="px-2 py-4 text-center text-gray-500 text-xs"
                  colSpan={5}
                >
                  No pending forms right now.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

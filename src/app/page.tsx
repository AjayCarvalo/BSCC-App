// src/app/page.tsx

export default function HomePage() {
  return (
    <div className="space-y-10">
      {/* Section 3: Hero */}
      <section className="grid gap-8 md:grid-cols-2 items-center mt-4">
        {/* Left: images placeholder */}
        <div className="aspect-video rounded-2xl bg-neutral-800 flex items-center justify-center">
          <span className="text-gray-400 text-sm">
            [Match photos / BSCC hero image]
          </span>
        </div>

        {/* Right: welcome text */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Welcome to Braywood Stallions Cricket Club
          </h1>
          <p className="text-gray-300 mb-4">
            Home of grassroots cricket in Berkshire. We are a community-focused
            club competing in local leagues and providing opportunities for
            players of all ages and abilities.
          </p>
          <div className="flex gap-3">
            <a
              href="/join"
              className="px-4 py-2 rounded-full bg-yellow-400 text-black font-semibold text-sm hover:bg-yellow-300"
            >
              Join the Stallions
            </a>
            <a
              href="/fixtures"
              className="px-4 py-2 rounded-full border border-white/70 text-sm hover:bg-white hover:text-[#800000]"
            >
              View Fixtures
            </a>
          </div>
        </div>
      </section>

      {/* Section 4: Latest News */}
      <section>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl font-semibold">Latest News</h2>
          <a href="/news" className="text-sm text-yellow-300 hover:underline">
            View all news
          </a>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {/* Placeholder cards – later from DB */}
          {[1, 2, 3].map((n) => (
            <article
              key={n}
              className="rounded-xl border border-neutral-800 bg-neutral-900/70 p-4"
            >
              <p className="text-xs text-gray-400 mb-1">12 Dec 2025</p>
              <h3 className="font-semibold mb-2">
                Sample news headline #{n}
              </h3>
              <p className="text-sm text-gray-300">
                Short description of the club news item. This will come from the
                admin dashboard.
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Section 5: Upcoming Fixtures */}
      <section>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl font-semibold">Upcoming Fixtures (Next 4 weeks)</h2>
          <a
            href="/fixtures"
            className="text-sm text-yellow-300 hover:underline"
          >
            Full fixtures
          </a>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-separate border-spacing-y-2">
            <thead className="text-gray-400">
              <tr>
                <th className="text-left">Date</th>
                <th className="text-left">Team</th>
                <th className="text-left">Opposition</th>
                <th className="text-left">Home/Away</th>
                <th className="text-left">Competition</th>
              </tr>
            </thead>
            <tbody>
              {/* Placeholder fixtures */}
              <tr className="bg-neutral-900/70">
                <td className="px-2 py-2">Sat 10 Jan</td>
                <td className="px-2 py-2">BSCC 1st XI</td>
                <td className="px-2 py-2">Example CC</td>
                <td className="px-2 py-2">Home</td>
                <td className="px-2 py-2">League</td>
              </tr>
              <tr className="bg-neutral-900/70">
                <td className="px-2 py-2">Sat 17 Jan</td>
                <td className="px-2 py-2">BSCC 2nd XI</td>
                <td className="px-2 py-2">Another CC</td>
                <td className="px-2 py-2">Away</td>
                <td className="px-2 py-2">Friendly</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 6: Photos & Videos */}
      <section>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl font-semibold">Photos &amp; Videos</h2>
          <a
            href="/media"
            className="text-sm text-yellow-300 hover:underline"
          >
            View all media
          </a>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900/50"
            >
              <div className="aspect-video bg-neutral-800 flex items-center justify-center text-gray-400 text-xs">
                Album / Video #{n}
              </div>
              <div className="p-3 text-sm">
                <div className="font-semibold mb-1">Media title #{n}</div>
                <div className="text-gray-400">
                  Brief description from admin dashboard.
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 7: Affiliations */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Affiliations</h2>
        <div className="flex flex-wrap gap-4 items-center">
          {/* Vertical logos placeholder */}
          <a
            href="#"
            className="w-32 h-20 bg-white flex items-center justify-center rounded-md"
          >
            <span className="text-xs text-black text-center">
              ECB
              <br />
              Logo
            </span>
          </a>
          <a
            href="#"
            className="w-32 h-20 bg-white flex items-center justify-center rounded-md"
          >
            <span className="text-xs text-black text-center">
              Berkshire
              <br />
              Cricket
            </span>
          </a>
          <a
            href="#"
            className="w-32 h-20 bg-white flex items-center justify-center rounded-md"
          >
            <span className="text-xs text-black text-center">
              League
              <br />
              Partner
            </span>
          </a>
        </div>
      </section>

      {/* Section 8: Sponsors */}
      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-3">Sponsors</h2>
        <div className="flex flex-wrap gap-4 items-center">
          {/* Sponsor logos placeholder */}
          <a
            href="#"
            className="w-40 h-16 bg-white flex items-center justify-center rounded-md"
          >
            <span className="text-xs text-black text-center">
              Main Sponsor
            </span>
          </a>
          <a
            href="#"
            className="w-32 h-16 bg-white flex items-center justify-center rounded-md"
          >
            <span className="text-xs text-black text-center">
              Sponsor 2
            </span>
          </a>
          <a
            href="#"
            className="w-32 h-16 bg-white flex items-center justify-center rounded-md"
          >
            <span className="text-xs text-black text-center">
              Sponsor 3
            </span>
          </a>
        </div>
      </section>
    </div>
  );
}

import GameList from '@/components/GameList'

export default function HomePage() {
  return (
    <>
      {/* Unified light theme section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
                PlayIO Today
              </h1>
              <p className="mt-3 max-w-2xl text-slate-600">
                Play HTML5 games instantly. No download. Free. Unblocked.
              </p>
            </div>
            {/* search (static UI only) */}
            <div className="w-full md:w-[420px]">
              <div className="relative">
                <input
                  className="w-full rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 py-3 pl-11 pr-4 focus:outline-none focus:ring-2 focus:ring-slate-300"
                  placeholder="Search games..."
                  aria-label="Search games"
                />
                <svg
                  className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="11" cy="11" r="7" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </div>
            </div>
          </div>

          {/* quick categories (static placeholders) */}
          <div className="mt-6 flex flex-wrap gap-2">
            {['Arcade', 'Action', 'Puzzle', 'Racing', 'Sports'].map((cat) => (
              <a
                key={cat}
                href="#"
                className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700 hover:bg-slate-50 transition"
              >
                {cat}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Content with unified light background */}
      <main className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-slate-900">All Games</h2>
            <div className="text-sm text-slate-500">Latest updates</div>
          </div>
          <GameList className="mt-4" />
        </div>
      </main>
    </>
  )
}

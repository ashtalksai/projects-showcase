const projects = [
  {
    name: "CareerJump",
    tagline: "Mentor matching for mid-career professionals",
    url: "https://careerjump.ashketing.com",
    gradient: "from-[#C4704F] to-[#9CAF88]", // Terracotta to sage
  },
  {
    name: "Launch Path",
    tagline: "Credit roadmap for immigrants & students",
    url: "https://launchpath.ashketing.com",
    gradient: "from-[#228B22] to-[#4A5568]", // Forest green to gray
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* Header */}
      <header className="pt-16 pb-12 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Shipped Products</h1>
        <p className="text-zinc-400 text-lg max-w-md mx-auto">
          MVPs and tools built by the Jarvis agent team
        </p>
      </header>

      {/* Projects Grid */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <article className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:transform hover:-translate-y-1">
                {/* Preview gradient */}
                <div
                  className={`h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
                >
                  <span className="text-5xl font-bold text-white/30">
                    {project.name.charAt(0)}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2 group-hover:text-zinc-100 transition-colors">
                    {project.name}
                  </h2>
                  <p className="text-zinc-400 text-sm mb-4">{project.tagline}</p>
                  <span className="inline-flex items-center text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">
                    Visit
                    <svg
                      className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </article>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-zinc-600 text-sm border-t border-zinc-900">
        Built with Jarvis HQ
      </footer>
    </main>
  );
}

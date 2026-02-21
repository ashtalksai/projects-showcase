import Image from "next/image";

const projects = [
  {
    name: "CareerJump",
    tagline: "Mentor matching for 40+ career changers",
    url: "https://careerjump.ashketing.com",
    gradient: "from-[#D4735E] to-[#8B9D83]",
    logo: "/logos/careerjump.svg",
  },
  {
    name: "Launch Path",
    tagline: "Credit roadmap for immigrants & students",
    url: "https://launchpath.ashketing.com",
    gradient: "from-[#2D5016] to-[#6B7280]",
    logo: "/logos/launchpath.svg",
  },
  {
    name: "ReviewPulse",
    tagline: "AI review monitoring for SMBs",
    url: "https://reviewpulse.ashketing.com",
    gradient: "from-[#6366F1] to-[#8B5CF6]",
    logo: "/logos/reviewpulse.svg",
  },
  {
    name: "TikTok Trend Catcher",
    tagline: "Viral sound alerts for creators",
    url: "https://trendcatch.ashketing.com",
    gradient: "from-[#EE1D52] to-[#69C9D0]",
    logo: "/logos/trendcatcher.svg",
  },
  {
    name: "OnHold Bot",
    tagline: "AI that sits on hold for you",
    url: "https://onholdbot.ashketing.com",
    gradient: "from-[#F59E0B] to-[#EF4444]",
    logo: "/logos/onholdbot.svg",
  },
  {
    name: "ClientShell",
    tagline: "White-label client portal for small firms",
    url: "https://clientshell.ashketing.com",
    gradient: "from-[#3B82F6] to-[#1D4ED8]",
    logo: "/logos/clientshell.svg",
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
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <article className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:transform hover:-translate-y-1">
                {/* Preview gradient with logo */}
                <div
                  className={`h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
                >
                  <Image
                    src={project.logo}
                    alt={`${project.name} logo`}
                    width={80}
                    height={80}
                    className="drop-shadow-lg"
                  />
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

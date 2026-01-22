import Link from "next/link"

export default function Page() {
  const projects = [
    {
      id: "01",
      name: "ALPHABET_WALL",
      description: "Interactive 3D environment // Stranger Things motif",
      href: "/alphabet-wall",
      status: "DEPLOYED",
    },
    {
      id: "02",
      name: "VOID_SPACE",
      description: "Empty buffer for future expansion",
      href: "#",
      status: "PENDING",
    },
    {
      id: "03",
      name: "NEURAL_LINK",
      description: "Interface experimentation unit",
      href: "#",
      status: "OFFLINE",
    }
  ]

  return (
    <div className="min-h-screen bg-[#f0f0f0] text-black font-mono selection:bg-black selection:text-white dark:bg-[#0a0a0a] dark:text-gray-100">
      {/* Top Bar */}
      <div className="border-b border-black/10 dark:border-white/10 px-4 py-3 flex justify-between text-xs uppercase tracking-widest sticky top-0 bg-[#f0f0f0]/80 dark:bg-[#0a0a0a]/80 backdrop-blur-sm z-50">
        <span>Harsh Jadhav // Labs</span>
        <span className="opacity-50">Est. 2026</span>
      </div>

      <main className="max-w-[1400px] mx-auto p-4 md:p-8">
        {/* Header Section */}
        <header className="mb-24 mt-12 space-y-8">
          <div className="border border-black dark:border-white p-6 max-w-2xl relative">
            <div className="absolute -top-3 left-4 bg-[#f0f0f0] dark:bg-[#0a0a0a] px-2 text-xs font-bold border border-black dark:border-white">
              MANIFESTO
            </div>
            <p className="text-sm md:text-base leading-relaxed opacity-80">
              THIS IS WHERE I DO WHATEVER THE FUCK I WANT.
              <br />
              <br />
              NO CLIENTS. NO DEADLINES. JUST RAW DESIGN ENGINEERING.
              EXPECT BROKEN LAYOUTS, EXPERIMENTAL INTERACTIONS,
              AND UNSOLICITED VISUAL NOISE.
            </p>
          </div>

          <div className="space-y-2">
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.8]">
              INDEX
              <span className="text-black/10 dark:text-white/10 block">LABS</span>
            </h1>
          </div>
        </header>

        {/* Project Index */}
        <div className="border-t-2 border-black dark:border-white">
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 py-3 border-b border-black/20 dark:border-white/20 text-xs opacity-50 uppercase tracking-wider">
            <div className="col-span-1 md:col-span-1">ID</div>
            <div className="col-span-11 md:col-span-4">Project Name</div>
            <div className="hidden md:block col-span-5">Description</div>
            <div className="hidden md:block col-span-2 text-right">Status</div>
          </div>

          {/* Table Rows */}
          <div className="flex flex-col">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={project.href}
                className="group relative grid grid-cols-12 gap-4 py-6 border-b border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition-colors items-baseline"
              >
                <div className="col-span-1 md:col-span-1 font-bold text-xs pt-1 text-black/40 dark:text-white/40 group-hover:text-black dark:group-hover:text-white transition-colors">
                  {project.id}
                </div>
                <div className="col-span-11 md:col-span-4 font-bold text-xl md:text-2xl tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                  {project.name}
                </div>
                <div className="col-span-1 md:hidden"></div> {/* Spacer for mobile alignment */}
                <div className="col-span-11 md:col-span-5 text-sm opacity-60 group-hover:opacity-100 transition-opacity">
                  {project.description}
                </div>
                <div className="hidden md:block col-span-2 text-right text-xs pt-1 font-medium">
                   <span className={`px-2 py-1 border ${
                       project.status === 'DEPLOYED' ? 'border-green-500 text-green-600 dark:text-green-400' : 
                       project.status === 'OFFLINE' ? 'border-red-500 text-red-600 dark:text-red-400' :
                       'border-black/20 dark:border-white/20 opacity-50'
                   }`}>
                     {project.status}
                   </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-32 pt-8 border-t border-black/10 dark:border-white/10 flex flex-col md:flex-row justify-between text-xs opacity-40 uppercase">
          <div className="flex gap-8">
            <span>Localhost:3000</span>
            <span>Region: APEC</span>
          </div>
          <div className="mt-4 md:mt-0">
            System Operational
          </div>
        </footer>
      </main>
    </div>
  )
}

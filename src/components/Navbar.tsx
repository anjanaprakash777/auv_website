export function Navbar() {
  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Rovers", href: "#rovers" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 p-4 flex justify-center pointer-events-none">
      <nav className="flex items-center gap-8 rounded-full border border-white/10 bg-black/20 px-6 py-2 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.1)] pointer-events-auto transition-all duration-300 hover:bg-black/30">
        <div className="font-[Orbitron] text-lg font-bold tracking-widest text-white">
          CHINMAYA<span className="text-cyan-400">AUV</span>
        </div>

        <ul className="flex items-center gap-3">
          {links.map((link) => (
            <li
              key={link.label}
              className="relative group rounded-full px-4 py-1.5 overflow-hidden border border-white/20 transition-all duration-300 hover:border-white"
            >
              {/* Slide-in white background fill */}
              <span className="absolute inset-0 bg-white scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
              
              <a
                href={link.href}
                className="relative z-10 text-xs uppercase tracking-widest transition-colors duration-300 text-slate-200 group-hover:text-black font-semibold"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}


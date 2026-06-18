import { useState } from "react";

interface NavbarProps {
  dark?: boolean;
  absolute?: boolean;
}

export function Navbar({ dark = false, absolute = false }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: "HOME", href: "#home" },
    { label: "AUVS", href: "#rovers" },
    { label: "TECHNOLOGY", href: "#technology" },
    { label: "APPLICATIONS", href: "#applications" },
    { label: "ABOUT US", href: "#about" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <header
      className={`${absolute ? "absolute" : "fixed"} top-0 left-0 w-full z-50 transition-all duration-300`}
    >
      <nav
        className={`flex items-center justify-between px-8 lg:px-12 py-4 transition-all duration-300 ${
          dark ? "bg-black/90 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-full border-2 border-cyan-400 flex items-center justify-center group-hover:bg-cyan-400/10 transition-colors duration-300">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-5 h-5"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                stroke="rgb(34,211,238)"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="leading-tight">
            <span className="font-[Orbitron] text-xl font-bold tracking-wider text-white block">
              CHINMAYA
            </span>
            <span className="font-[Orbitron] text-[10px] font-bold tracking-[0.35em] text-slate-400 block">
              AUV
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex items-center gap-1">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="relative px-4 py-2 text-[13px] font-medium tracking-wider text-slate-300 hover:text-white transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-3/4"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Download Brochure Button */}
        <a
          href="#brochure"
          className="hidden lg:flex items-center gap-2 border border-white/30 hover:border-white px-5 py-2.5 text-[12px] font-semibold tracking-wider text-white transition-all duration-300 hover:bg-white hover:text-black group"
        >
          DOWNLOAD BROCHURE
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-black/95 backdrop-blur-xl border-t border-white/10 px-8 py-6 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium tracking-wider text-slate-300 hover:text-white transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#brochure"
            className="mt-2 inline-flex items-center gap-2 border border-white/30 px-5 py-2.5 text-xs font-semibold tracking-wider text-white w-fit"
          >
            DOWNLOAD BROCHURE
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
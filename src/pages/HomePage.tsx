export function HomePage() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Ocean Background Image */}
      <img
        src="/hero/home_bg.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Subtle radial light from top center */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,rgba(100,180,255,0.08)_0%,transparent_60%)]" />

      {/* Content Layer */}
      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Main hero content — centered */}
        <div className="flex flex-1 flex-col items-center justify-center px-6 pt-24 pb-40 text-center">
          {/* Subtitle */}
          <p
            className="mb-5 text-sm tracking-[0.35em] text-cyan-300 uppercase font-medium hero-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Explore the Future
          </p>

          {/* Main heading */}
          <h1
            className="font-[Orbitron] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight hero-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            BEYOND DEPTH.
            <br />
            BEYOND LIMITS.
          </h1>

          {/* Description */}
          <p
            className="mt-8 max-w-lg text-base sm:text-lg leading-relaxed text-slate-300 font-light hero-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            Advanced Autonomous Underwater Vehicles
            <br className="hidden sm:block" />
            Engineered for Stability. Built for Exploration.
          </p>

          {/* CTA Button */}
          <a
            href="#rovers"
            className="mt-10 group inline-flex items-center gap-3 border border-white/40 hover:border-white px-8 py-3.5 text-[13px] font-semibold tracking-[0.2em] text-white transition-all duration-400 hover:bg-white hover:text-black hero-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            EXPLORE OUR AUVS
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>

        {/* Vehicle images — positioned on sides */}
        {/* Pragna - Left */}
        <div className="absolute left-0 bottom-32 w-[250px] sm:w-[300px] lg:w-[380px] pointer-events-none hero-slide-left hidden md:block">
          <img
            src="/vehicles/pragna.png"
            alt="Pragna 2026 AUV"
            className="w-full object-contain drop-shadow-[0_0_40px_rgba(0,0,0,0.8)]"
          />
        </div>

        {/* Dhruva - Right */}
        <div className="absolute right-0 bottom-32 w-[250px] sm:w-[300px] lg:w-[380px] pointer-events-none hero-slide-right hidden md:block">
          <img
            src="/vehicles/dhruva.png"
            alt="Dhruva 1 AUV"
            className="w-full object-contain drop-shadow-[0_0_40px_rgba(0,0,0,0.8)]"
          />
        </div>

        {/* Bottom Bar */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <div className="flex items-end justify-between px-6 sm:px-10 lg:px-16 pb-8">
            {/* Pragna Info — Left */}
            <div
              className="hidden md:block hero-fade-in"
              style={{ animationDelay: "1s" }}
            >
              <h3 className="font-[Orbitron] text-xl lg:text-2xl font-bold tracking-wide text-white">
                PRAGNA 2026
              </h3>
              <p className="mt-1 text-sm text-slate-400 tracking-wide">
                Stability. Precision. Freedom.
              </p>
              <a
                href="#pragna-design"
                className="mt-3 group inline-flex items-center gap-2 border border-white/30 hover:border-white px-5 py-2 text-[11px] font-semibold tracking-[0.15em] text-white transition-all duration-300 hover:bg-white hover:text-black"
              >
                VIEW PRAGNA 2026
                <svg
                  className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>

            {/* Watch Video — Center */}
            {/* <div
              className="flex flex-col items-center gap-2 hero-fade-in mx-auto md:mx-0"
              style={{ animationDelay: "1.1s" }}
            >
              <button className="w-14 h-14 rounded-full border-2 border-white/40 hover:border-white flex items-center justify-center transition-all duration-300 hover:bg-white/10 hover:scale-110 group">
                <svg
                  className="w-5 h-5 text-white ml-0.5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <polygon points="5,3 19,12 5,21" />
                </svg>
              </button>
              <span className="text-[11px] font-semibold tracking-[0.2em] text-slate-300 uppercase">
                Watch Video
              </span>
            </div> */}

            {/* Dhruva Info — Right */}
            <div
              className="hidden md:block text-right hero-fade-in"
              style={{ animationDelay: "1.2s" }}
            >
              <h3 className="font-[Orbitron] text-xl lg:text-2xl font-bold tracking-wide text-white">
                DHRUVA 1
              </h3>
              <p className="mt-1 text-sm text-slate-400 tracking-wide">
                Clarity. Modularity. Endurance.
              </p>
              <a
                href="#dhruva-design"
                className="mt-3 group inline-flex items-center gap-2 border border-white/30 hover:border-white px-5 py-2 text-[11px] font-semibold tracking-[0.15em] text-white transition-all duration-300 hover:bg-white hover:text-black"
              >
                VIEW DHRUVA 1
                <svg
                  className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

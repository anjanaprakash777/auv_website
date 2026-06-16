import React from "react";

export function Dhruva() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#031426] font-['Inter']">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero/ocean-bg.png')" }}
      />

      {/* Deep Ocean Fog overlay */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[20px]" />

      {/* Huge Background Typography */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none z-10 w-full text-center overflow-visible flex justify-center items-start h-screen"
        style={{
          maskImage: "linear-gradient(to bottom, black 15%, transparent 70%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 15%, transparent 70%)"
        }}
      >
        <h1
          className="text-[26vw] font-bold tracking-[0.02em] text-white/20 leading-none select-none font-['Antonio'] inline-block uppercase"
          style={{ transform: "scale(1, 1.5)", transformOrigin: "top center" }}
        >
          DHRUVA 1
        </h1>
      </div>

      {/* Main Grid Container */}
      <div className="relative z-30 mx-auto grid h-screen max-w-[1600px] grid-cols-[40%_60%] items-center px-10 md:px-[60px]">

        {/* Left Panel */}
        <div className="flex flex-col justify-center">
          <p className="mb-4 text-[18px] font-bold uppercase tracking-[0.18em] text-white">
            Autonomous
            <br />
            Underwater
            <br />
            Vehicle
          </p>

          <div className="mb-6 h-[2px] w-[50px] bg-white" />

          <p className="mb-12 max-w-sm text-[18px] leading-[1.8] text-white/75">
            Engineered to explore. Built to endure. Designed to discover.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <button className="rounded bg-white px-8 py-4 text-[13px] font-bold tracking-widest text-[#0b1623] transition-transform hover:scale-105">
              EXPLORE DESIGN &gt;
            </button>
            <button className="rounded border border-white/20 bg-transparent px-8 py-4 text-[13px] font-bold tracking-widest text-white transition-colors hover:bg-white/10">
              VIEW SPECIFICATIONS
            </button>
          </div>
        </div>

        {/* Right Panel (3D Showcase Image) */}
        <div className="relative z-40 flex h-full items-center justify-center">
          <div className="relative w-[85%] translate-x-[-5%] translate-y-[-3%] -rotate-12 drop-shadow-[0_20px_50px_rgba(77,168,255,0.15)]">
            <img
              src={`/vehicles/dhruva.png?v=${Date.now()}`}
              alt="Dhruva AUV"
              className="w-full object-contain animate-[float_8s_ease-in-out_infinite]"
              style={{
                filter: "drop-shadow(0 0 40px rgba(255,255,255,0.1))"
              }}
            />
          </div>
        </div>
      </div>

      {/* Bottom Stats Row */}
      <div className="absolute bottom-[30px] left-1/2 z-40 w-[90%] -translate-x-1/2 border-t border-white/10 pt-6">
        <div className="grid grid-cols-4 divide-x divide-white/10">

          {/* Stat 1: Depth */}
          <div className="flex flex-col items-center justify-center px-4 md:flex-row md:items-start md:justify-start md:gap-4 md:px-8">
            <div className="flex h-12 w-12 items-center justify-center text-white/50">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.6 2 5 2 2.3 0 2.3-2 5-2 1.3 0 1.9.5 2.5 1" />
                <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.6 2 5 2 2.3 0 2.3-2 5-2 1.3 0 1.9.5 2.5 1" />
                <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.6 2 5 2 2.3 0 2.3-2 5-2 1.3 0 1.9.5 2.5 1" />
              </svg>
            </div>
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-white/50">Depth Rating</p>
              <div className="flex items-baseline gap-2">
                <span className="text-[42px] font-bold leading-none text-white md:text-[54px]">300</span>
                <span className="text-[12px] font-bold uppercase tracking-widest text-white/50">Meters</span>
              </div>
            </div>
          </div>

          {/* Stat 2: Endurance */}
          <div className="flex flex-col items-center justify-center px-4 md:flex-row md:items-start md:justify-center md:gap-4 md:px-8">
            <div className="flex h-12 w-12 items-center justify-center text-white/50">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-white/50">Endurance</p>
              <div className="flex items-baseline gap-2">
                <span className="text-[42px] font-bold leading-none text-white md:text-[54px]">4+</span>
                <span className="text-[12px] font-bold uppercase tracking-widest text-white/50">Hours</span>
              </div>
            </div>
          </div>

          {/* Stat 3: Payload */}
          <div className="flex flex-col items-center justify-center px-4 md:flex-row md:items-start md:justify-center md:gap-4 md:px-8">
            <div className="flex h-12 w-12 items-center justify-center text-white/50">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 19v-3" />
                <path d="M10 19v-3" />
                <path d="M14 19v-3" />
                <path d="M18 19v-3" />
                <path d="M8 11V9c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v2" />
                <path d="M2 11h20v8c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-8z" />
                <circle cx="12" cy="15" r="1" />
              </svg>
            </div>
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-white/50">Payload</p>
              <div className="flex items-baseline gap-2">
                <span className="text-[42px] font-bold leading-none text-white md:text-[54px]">1.5</span>
                <span className="text-[12px] font-bold uppercase tracking-widest text-white/50">KG</span>
              </div>
            </div>
          </div>

          {/* Stat 4: Top Speed */}
          <div className="flex flex-col items-center justify-center px-4 md:flex-row md:items-start md:justify-end md:gap-4 md:px-8">
            <div className="flex h-12 w-12 items-center justify-center text-white/50">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v4" />
                <path d="m4.9 4.9 2.9 2.9" />
                <path d="M2 12h4" />
                <path d="m4.9 19.1 2.9-2.9" />
                <path d="M12 22v-4" />
                <path d="m19.1 19.1-2.9-2.9" />
                <path d="M22 12h-4" />
                <path d="m19.1 4.9-2.9 2.9" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-white/50">Top Speed</p>
              <div className="flex items-baseline gap-2">
                <span className="text-[42px] font-bold leading-none text-white md:text-[54px]">3.5</span>
                <span className="text-[12px] font-bold uppercase tracking-widest text-white/50">Knots</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Right Scroll Indicator */}
      <div className="absolute top-1/2 right-[30px] z-50 flex -translate-y-1/2 flex-col items-center gap-4 text-white/50">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] [writing-mode:vertical-rl] rotate-180">Scroll</span>
        <div className="h-2 w-2 rounded-full border border-white/50" />
      </div>

      {/* Global Styles for Custom Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  );
}

export function AboutPage() {
  return (
    <div className="bg-black text-white">

      {/* ── Hero Section — circuit background ── */}
      <section className="relative min-h-screen w-full overflow-hidden bg-[#04090f]">
        {/* Full-width Circuit Background Pattern */}
        <div className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.25]">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="circuit-bg-hero" width="200" height="150" patternUnits="userSpaceOnUse">
                {/* Horizontal tracks */}
                <path d="M0 20 H200 M0 130 H200" stroke="#22d3ee" strokeWidth="0.5" opacity="0.3" />
                {/* Angled branches */}
                <path d="M20 75 L40 20 H60 M120 75 L140 130 H160" stroke="#22d3ee" strokeWidth="0.5" fill="none" opacity="0.5" />
                <path d="M80 75 L60 130 H40 M180 75 L160 20 H140" stroke="#22d3ee" strokeWidth="0.5" fill="none" opacity="0.5" />
                {/* Nodes */}
                <circle cx="60" cy="20" r="2" fill="#22d3ee" />
                <circle cx="160" cy="130" r="2" fill="#22d3ee" />
                <circle cx="40" cy="130" r="2" fill="#22d3ee" />
                <circle cx="140" cy="20" r="2" fill="#22d3ee" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit-bg-hero)" />
            {/* A main horizontal faint line across the middle */}
            <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#22d3ee" strokeWidth="0.5" opacity="0.4" />
          </svg>
        </div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between min-h-screen px-10 sm:px-16 lg:px-20 xl:px-24 pt-24 pb-12 gap-12">
          {/* Left Text */}
          <div className="flex flex-col justify-center lg:w-1/2">
            <p className="mb-5 text-[11px] font-bold tracking-[0.35em] text-cyan-400 uppercase">
              ABOUT US
            </p>
            <h1
              className="font-[Orbitron] font-black uppercase leading-[1.15] tracking-tight mb-6 whitespace-nowrap"
              style={{ fontSize: "clamp(2.8rem, 4.2vw, 4.2rem)" }}
            >
              WE DON'T BUILD
              <br />
              VEHICLES.
              <br />
              WE BUILD ACCESS
              <br />
              TO THE{" "}
              <span className="text-cyan-400">UNKNOWN.</span>
            </h1>
            <div className="mb-6 h-[3px] w-[48px] bg-cyan-400" />
            <p className="text-[16px] leading-[1.8] text-slate-300 font-light max-w-sm">
              Chinmaya AUV Systems is driven by a passion for the
              oceans and the technology to explore them.
              <br />
              We build intelligent, autonomous systems that operate
              where humans can't.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end lg:w-1/2 mt-10 lg:mt-0">
            <img
              src="/vehicles/auv%20icon.png"
              alt="AUV Icon"
              className="w-full max-w-none lg:max-w-[130%] lg:scale-[1.35] xl:scale-[1.55] lg:translate-x-24 xl:translate-x-40 object-contain drop-shadow-[0_0_25px_rgba(34,211,238,0.3)]"
              style={{ transformOrigin: 'center right' }}
            />
          </div>
        </div>
      </section>

      {/* ── Second Section — 71% + WHAT DRIVES US ── */}
      <section className="relative bg-[#070d18] text-white flex flex-col justify-center px-10 sm:px-16 lg:px-20 xl:px-24 py-24 overflow-hidden">

        {/* Background Circuit Line with Dots */}
        <div className="absolute top-[20%] left-0 w-full h-[100px] pointer-events-none opacity-[0.2]">
          <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1000 100">
            <path d="M0 20 H150 L180 80 H350 L380 20 H650 L680 80 H850 L880 20 H1000" stroke="#22d3ee" strokeWidth="1" fill="none" />
            <circle cx="100" cy="20" r="3" fill="#22d3ee" />
            <circle cx="450" cy="20" r="3" fill="#22d3ee" />
            <circle cx="600" cy="20" r="3" fill="#22d3ee" />
            <circle cx="950" cy="20" r="3" fill="#22d3ee" />
            <circle cx="265" cy="80" r="3" fill="#22d3ee" />
            <circle cx="765" cy="80" r="3" fill="#22d3ee" />
          </svg>
        </div>
        <div className="absolute bottom-[20%] left-0 w-full h-[100px] pointer-events-none opacity-[0.1]">
          <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1000 100">
            <path d="M0 80 H250 L280 20 H550 L580 80 H850 L880 20 H1000" stroke="#22d3ee" strokeWidth="1" fill="none" />
            <circle cx="150" cy="80" r="3" fill="#22d3ee" />
            <circle cx="400" cy="20" r="3" fill="#22d3ee" />
            <circle cx="700" cy="80" r="3" fill="#22d3ee" />
            <circle cx="920" cy="20" r="3" fill="#22d3ee" />
          </svg>
        </div>

        {/* 71% block + right text */}
        <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-stretch mb-24">

          {/* Left: 71% */}
          <div className="relative flex flex-col items-start justify-center pr-14 lg:w-[45%]">
            {/* Radar bg */}
            <div className="absolute left-[-5%] top-1/2 -translate-y-1/2 w-[350px] h-[350px] opacity-[0.04] pointer-events-none">
              <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
                <circle cx="100" cy="100" r="90" stroke="#22d3ee" strokeWidth="1" />
                <circle cx="100" cy="100" r="65" stroke="#22d3ee" strokeWidth="1" />
                <circle cx="100" cy="100" r="40" stroke="#22d3ee" strokeWidth="1" />
                <circle cx="100" cy="100" r="15" stroke="#22d3ee" strokeWidth="1" />
                <line x1="100" y1="10" x2="100" y2="190" stroke="#22d3ee" strokeWidth="0.5" />
                <line x1="10" y1="100" x2="190" y2="100" stroke="#22d3ee" strokeWidth="0.5" />
                <line x1="36" y1="36" x2="164" y2="164" stroke="#22d3ee" strokeWidth="0.5" />
                <line x1="164" y1="36" x2="36" y2="164" stroke="#22d3ee" strokeWidth="0.5" />
              </svg>
            </div>
            <div className="relative">
              <span
                className="font-bold text-[#22d3ee] leading-none"
                style={{ fontSize: "clamp(6rem, 11vw, 11rem)", fontFamily: "'Inter', sans-serif", letterSpacing: "-0.03em" }}
              >
                71%
              </span>
              <p className="mt-4 text-[13px] font-bold tracking-[0.2em] text-[#5ea9e8] uppercase">
                OF OUR PLANET IS COVERED BY OCEANS.
              </p>
            </div>
          </div>

          {/* Vertical divider */}
          <div className="hidden lg:block w-px self-stretch bg-white/10 mx-6" />

          {/* Right: paragraphs */}
          <div className="flex flex-col justify-center pl-10 lg:w-[55%] gap-6">
            <p className="text-[14px] leading-[1.8] text-slate-300">
              Yet, more than 80% of the deep ocean remains
              <br className="hidden sm:block" />
              unexplored and unmapped.
            </p>
            <p className="text-[14px] leading-[1.8] text-slate-300">
              From climate insights to resource discovery,
              <br className="hidden sm:block" />
              from infrastructure inspection to scientific research—
              <br className="hidden sm:block" />
              the possibilities beneath the surface are limitless.
            </p>
            <p className="text-[14px] leading-[1.8] text-slate-300">
              We exist to unlock them.
            </p>
          </div>
        </div>

        {/* WHAT DRIVES US label */}
        <p className="text-center text-[12px] font-bold tracking-[0.35em] text-cyan-400 uppercase mb-8 max-w-6xl mx-auto w-full">
          WHAT DRIVES US
        </p>

        {/* Three cards */}
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              icon: (
                <svg viewBox="0 0 60 60" fill="none" className="w-[56px] h-[56px] shrink-0">
                  <circle cx="30" cy="30" r="28" stroke="#22d3ee" strokeWidth="1.2" />
                  <circle cx="30" cy="30" r="18" stroke="#22d3ee" strokeWidth="1.2" />
                  <circle cx="30" cy="30" r="8" stroke="#22d3ee" strokeWidth="1.2" />
                  <circle cx="30" cy="30" r="2.5" fill="#22d3ee" />
                  <line x1="30" y1="2" x2="30" y2="58" stroke="#22d3ee" strokeWidth="0.8" />
                  <line x1="2" y1="30" x2="58" y2="30" stroke="#22d3ee" strokeWidth="0.8" />
                </svg>
              ),
              title: "EXPLORATION",
              text: "Pushing beyond known boundaries to discover what lies beneath.",
            },
            {
              icon: (
                <svg viewBox="0 0 60 60" fill="none" className="w-[56px] h-[56px] shrink-0">
                  <path d="M30 5 L52 18 L52 42 L30 55 L8 42 L8 18 Z" stroke="#22d3ee" strokeWidth="1.2" />
                  <path d="M30 18 L42 24.5 L42 37.5 L30 44 L18 37.5 L18 24.5 Z" stroke="#22d3ee" strokeWidth="1.2" />
                  <circle cx="30" cy="30" r="4" stroke="#22d3ee" strokeWidth="1.2" />
                  <line x1="30" y1="5" x2="30" y2="18" stroke="#22d3ee" strokeWidth="0.8" />
                  <line x1="52" y1="18" x2="42" y2="24.5" stroke="#22d3ee" strokeWidth="0.8" />
                  <line x1="52" y1="42" x2="42" y2="37.5" stroke="#22d3ee" strokeWidth="0.8" />
                  <line x1="30" y1="55" x2="30" y2="44" stroke="#22d3ee" strokeWidth="0.8" />
                  <line x1="8" y1="42" x2="18" y2="37.5" stroke="#22d3ee" strokeWidth="0.8" />
                  <line x1="8" y1="18" x2="18" y2="24.5" stroke="#22d3ee" strokeWidth="0.8" />
                </svg>
              ),
              title: "INNOVATION",
              text: "Combining robotics, AI, and engineering to solve real-world challenges.",
            },
            {
              icon: (
                <svg viewBox="0 0 60 60" fill="none" className="w-[56px] h-[56px] shrink-0">
                  <path d="M30 5 L52 14 L52 32 C52 43 42 52 30 56 C18 52 8 43 8 32 L8 14 Z" stroke="#22d3ee" strokeWidth="1.2" />
                  <path d="M20 30 L27 37 L40 23" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ),
              title: "RELIABILITY",
              text: "Building robust systems that perform in the most demanding environments.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="flex items-start gap-6 bg-[#0a1628] border border-white/10 rounded-xl p-8 hover:border-cyan-400/30 transition-all duration-300"
            >
              <div>{card.icon}</div>
              <div>
                <h3 className="font-[Orbitron] text-[14px] font-bold tracking-widest text-white mb-3 uppercase">
                  {card.title}
                </h3>
                <p className="text-slate-400 text-[14px] leading-relaxed">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* ── Our Team Section ── */}
      <section className="relative bg-[#04090f] text-white overflow-hidden">

        {/* Background circuit decoration */}
        <div className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.12]">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="circuit-team" width="200" height="150" patternUnits="userSpaceOnUse">
                <path d="M0 20 H200 M0 130 H200" stroke="#22d3ee" strokeWidth="0.5" opacity="0.3" />
                <path d="M20 75 L40 20 H60 M120 75 L140 130 H160" stroke="#22d3ee" strokeWidth="0.5" fill="none" opacity="0.5" />
                <path d="M80 75 L60 130 H40 M180 75 L160 20 H140" stroke="#22d3ee" strokeWidth="0.5" fill="none" opacity="0.5" />
                <circle cx="60" cy="20" r="2" fill="#22d3ee" />
                <circle cx="160" cy="130" r="2" fill="#22d3ee" />
                <circle cx="40" cy="130" r="2" fill="#22d3ee" />
                <circle cx="140" cy="20" r="2" fill="#22d3ee" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit-team)" />
          </svg>
        </div>

        {/* Section heading */}
        <div className="relative z-10 text-center pt-2 pb-0">
          <h2 className="font-[Orbitron] font-bold text-white uppercase tracking-[0.25em] text-[36px] lg:text-[44px]">
            OUR TEAM
          </h2>
          <div className="flex justify-center mt-3">
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
              <path d="M1 1L9 10L17 1" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* Canvas — 8 identical circles perfectly aligned in the asymmetrical layout */}
        <div className="relative w-full" style={{ height: "700px" }}>
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 2200 1050"
            preserveAspectRatio="xMidYMid meet"
          >

            {[
              { id: '1', cx: 160,  cy: 160, name: 'NAME', role: 'POSITION' },
              { id: '2', cx: 980,  cy: 240, name: 'NAME', role: 'POSITION' },
              { id: '3', cx: 1800, cy: 160, name: 'NAME', role: 'POSITION' },
              { id: '4', cx: 310,  cy: 470, name: 'NAME', role: 'POSITION' },
              { id: '5', cx: 1650, cy: 470, name: 'NAME', role: 'POSITION' },
              { id: '6', cx: 160,  cy: 820, name: 'NAME', role: 'POSITION' },
              { id: '7', cx: 950,  cy: 740, name: 'NAME', role: 'POSITION' },
              { id: '8', cx: 1800, cy: 820, name: 'NAME', role: 'POSITION' },
            ].map((member) => {
              const startX = member.cx + 78;
              const startY = member.cy - 78;
              const endX = member.cx + 206;
              const endY = member.cy - 111;

              // All paths go to the right with a loop
              const pathData = `M ${startX} ${startY} c 13 5, 26 7, 38 2 c 15 -7, 17 -22, 5 -31 c -17 -11, -35 1, -27 21 c 7 22, 37 22, 62 7 c 17 -10, 32 -20, 50 -32`;

              return (
                <g key={member.id}>
                  {/* Circle Placeholder */}
                  <circle cx={member.cx} cy={member.cy} r="110" fill="rgba(69,231,255,0.04)" stroke="#45E7FF" strokeOpacity="0.38" strokeWidth="1.2" />

                  {/* Thin Dashed Path */}
                  <path
                    d={pathData}
                    stroke="#45E7FF"
                    strokeWidth="1.5"
                    fill="none"
                    strokeDasharray="6 6"
                    strokeLinecap="round"
                  />


                  {/* Text positioned at the end of the line */}
                  <text x={endX + 15} y={endY - 5} fill="white" fontSize="16" fontWeight="bold" textAnchor="start" letterSpacing="1">
                    {member.name}
                  </text>
                  <text x={endX + 15} y={endY + 15} fill="#22d3ee" fontSize="12" textAnchor="start" letterSpacing="1" opacity="0.8">
                    {member.role}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Bottom padding */}
        <div className="h-16" />

      </section>

    </div>
  );
}


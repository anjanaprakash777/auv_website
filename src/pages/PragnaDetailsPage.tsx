import { Zap } from "lucide-react";
import { Rocket } from "lucide-react";
import { CircleDot } from "lucide-react";
import { Radar } from "lucide-react";
import {
    Waves,
    Anchor,
    FlaskConical,
    Radio
} from "lucide-react";
import {
    Boxes,
    Feather,
    ShieldCheck,
    Wrench,
} from "lucide-react";

export function PragnaDetailsPage() {
    return (
        <div className="bg-[#f5f5f5] text-black">

            {/* ── Pragna Hero Showcase ── */}
            <section id="pragna-top" className="relative min-h-screen w-full overflow-hidden bg-[#031426] font-['Inter']">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('/hero/ocean-bg.webp')" }}
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
                        PRAGNA
                    </h1>
                </div>

                {/* Main Grid Container */}
                <div className="relative z-30 mx-auto grid h-screen max-w-[1600px] grid-cols-1 md:grid-cols-[40%_60%] items-center px-6 md:px-[60px]">

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
                            <button
                                onClick={() => document.getElementById('pragna-core-section')?.scrollIntoView({ behavior: 'smooth' })}
                                className="rounded bg-white px-8 py-4 text-[13px] font-bold tracking-widest text-[#0b1623] transition-transform hover:scale-105 text-center"
                            >
                                EXPLORE DESIGN &gt;
                            </button>
                        </div>
                    </div>

                    {/* Right Panel (3D Showcase Image) */}
                    <div className="relative z-40 hidden md:flex h-full items-center justify-center">
                        <div className="relative w-[85%] translate-x-[-5%] translate-y-[-3%] -rotate-12 drop-shadow-[0_20px_50px_rgba(77,168,255,0.15)]">
                            <img
                                src={`/vehicles/pragna.webp?v=${Date.now()}`}
                                alt="Pragna AUV"
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
                    <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/10">

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
                                    <span className="text-[42px] font-bold leading-none text-white md:text-[54px]">1000</span>
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
                                    <span className="text-[42px] font-bold leading-none text-white md:text-[54px]">8+</span>
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
                                    <span className="text-[42px] font-bold leading-none text-white md:text-[54px]">5.0</span>
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
                                    <span className="text-[42px] font-bold leading-none text-white md:text-[54px]">4.5</span>
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

                {/* Float animation */}
                <style>{`
                    @keyframes float {
                        0%, 100% { transform: translateY(0); }
                        50% { transform: translateY(-20px); }
                    }
                `}</style>
            </section>

            {/* Transparent Core Section */}
            <section
                id="pragna-core-section"
                className="mx-auto grid max-w-[1800px] grid-cols-1 items-center gap-12 px-6 md:px-16 py-16 md:py-24 lg:grid-cols-2"
            >
                {/* Left Image */}
                <div className="flex justify-center">
                    <img
                        src="/vehicles/pragna-og.webp"
                        alt="Pressure Hull"
                        className="w-full max-w-[900px] object-contain"
                    />
                </div>

                {/* Right Content */}
                <div>
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
                        DESIGN EXCELLENCE
                    </p>

                    <h2 className="mb-8 font-['Inter'] text-6xl font-black leading-tight">
                        Engineered for Stability
                        <br />
                        Built for Exploration
                    </h2>

                    <p className="mb-12 max-w-xl text-lg leading-relaxed text-gray-600">
                        PRAGNA combines a rugged circular frame with advanced
                        thruster systems to deliver unmatched control,
                        endurance and reliability in the most challenging
                        underwater environments.
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">

                        {/* Modular */}
                        <div className="border border-gray-300 p-8">
                            <Boxes className="mb-4 h-8 w-8 text-gray-700" />

                            <h3 className="font-semibold">
                                MODULAR
                            </h3>

                            <p className="mt-2 text-sm text-gray-500">
                                Payloads
                            </p>
                        </div>

                        {/* Lightweight */}
                        <div className="border border-gray-300 p-6">
                            <Radar className="h-10 w-10 text-gray-500" />

                            <h3 className="font-semibold">
                                CIRCULAR
                            </h3>

                            <p className="mt-2 text-sm text-gray-500">
                                Stability
                            </p>
                        </div>

                        {/* Corrosion */}
                        <div className="border border-gray-300 p-6">
                            <ShieldCheck className="mb-4 h-8 w-8 text-gray-600" />

                            <h3 className="font-semibold">
                                CORROSION
                            </h3>

                            <p className="mt-2 text-sm text-gray-500">
                                Resistant
                            </p>
                        </div>

                        {/* Easy Manufacturing */}
                        <div className="border border-gray-300 p-6">
                            <Rocket className="h-10 w-10 text-gray-500" />
                            <h3 className="font-semibold">
                                POWERFUL
                            </h3>

                            <p className="mt-2 text-sm text-gray-500">
                                Thrusters
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Thrusters Section */}
            <section
                id="thrusters-section"
                className="relative min-h-screen overflow-hidden bg-[#031426]"
            >
                {/* Ocean Background */}
                <div className="absolute inset-0 bg-black" />

                <div className="absolute inset-0 bg-black/60" />

                {/* Background Text */}
                <div className="absolute inset-0 flex justify-center items-start pt-8 pointer-events-none">
                    <h1
                        className="font-['Antonio'] text-[10vw] font-black uppercase whitespace-nowrap text-cyan-400/12"
                        style={{
                            transform: "scale(1.8,2.3)"
                        }}
                    >
                        8 THRUSTERS
                    </h1>
                </div>

                <div className="relative z-10 mx-auto w-full grid min-h-screen grid-cols-1 lg:grid-cols-[28%_44%_28%] items-center px-6 lg:px-8 gap-8 py-24 lg:py-0">

                    {/* Left Content */}
                    <div className="pt-32">
                        <p className="mb-2 text-xs uppercase tracking-[0.25em] text-white/40">
                            Total Control
                        </p>

                        <h2 className="mb-8 font-['Inter'] text-5xl font-black text-white">
                            8 Thrusters.
                            <br />
                            Unlimited Precision.
                        </h2>

                        <ul className="space-y-4 text-white/80">
                            <li>✓ 4 Horizontal Thrusters</li>
                            <li>✓ 4 Vertical Thrusters</li>
                            <li>✓ Full 6DOF Control</li>
                            <li>✓ Stable Hovering</li>
                            <li>✓ Precise Navigation</li>
                        </ul>
                    </div>

                    {/* Center Image */}
                    <div className="flex justify-center">
                        <img
                            src="/vehicles/pragna.webp"
                            alt="Thruster Layout"
                            className="w-full max-w-[800px]"
                        />
                    </div>


                    {/* Right Side */}
                    <div className="flex flex-col justify-center gap-10 lg:gap-20 text-white pt-10 lg:pt-40 px-4">

                        <div className="text-center">
                            <div className="mb-4 text-5xl lg:text-7xl">↕</div>

                            <h3 className="text-xl lg:text-2xl font-bold">
                                4 Vertical Thrusters
                            </h3>

                            <p className="mt-3 text-white/60">
                                Depth control and stable hovering.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="mb-4 text-5xl lg:text-7xl">↔</div>

                            <h3 className="text-xl lg:text-2xl font-bold">
                                4 Horizontal Thrusters
                            </h3>

                            <p className="mt-3 text-white/60">
                                Precise movement and navigation.
                            </p>
                        </div>

                    </div>

                </div>
            </section>
            {/* Applications Section */}
            <section className="relative min-h-screen overflow-hidden">

                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/hero/underwater-applications.webp')",
                    }}
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/45" />

                <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-10">

                    <p className="mb-3 text-xs uppercase tracking-[0.35em] text-white/60">
                        BUILT FOR THE OCEAN
                    </p>

                    <h2 className="mb-10 md:mb-16 text-center font-['Inter'] text-4xl md:text-6xl font-black text-white">
                        Versatile. Reliable. Autonomous.
                    </h2>

                    <div className="grid w-full max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                        <div className="rounded-xl border border-white/20 bg-white/5 p-8 backdrop-blur-sm">
                            <div className="mb-6 flex justify-center">
                                <Waves size={64} strokeWidth={1.5} className="text-white" />
                            </div>

                            <h3 className="mb-4 text-center text-xl font-bold text-white">
                                Inspection Mission
                            </h3>

                            <p className="text-center text-white/70">
                                Structural inspection of bridges,
                                dams, pipelines and offshore assets.
                            </p>
                        </div>

                        <div className="rounded-xl border border-white/20 bg-white/5 p-8 backdrop-blur-sm">
                            <div className="mb-6 flex justify-center">
                                <Anchor size={64} strokeWidth={1.5} className="text-white" />
                            </div>
                            <h3 className="mb-4 text-center text-xl font-bold text-white">
                                Research Applications
                            </h3>

                            <p className="text-center text-white/70">
                                Oceanography, habitat mapping
                                and environmental monitoring.
                            </p>
                        </div>

                        <div className="rounded-xl border border-white/20 bg-white/5 p-8 backdrop-blur-sm">
                            <div className="mb-6 flex justify-center">
                                <FlaskConical size={64} strokeWidth={1.5} className="text-white" />
                            </div>
                            <h3 className="mb-4 text-center text-xl font-bold text-white">
                                Academic Development
                            </h3>

                            <p className="text-center text-white/70">
                                A modular platform for innovation,
                                learning and experimentation.
                            </p>
                        </div>

                        <div className="rounded-xl border border-white/20 bg-white/5 p-8 backdrop-blur-sm">
                            <div className="mb-6 flex justify-center">
                                <Radio size={64} strokeWidth={1.5} className="text-white" />
                            </div>

                            <h3 className="mb-4 text-center text-xl font-bold text-white">
                                Autonomous Navigation
                            </h3>

                            <p className="text-center text-white/70">
                                Advanced sensors and control
                                algorithms for autonomous operation.
                            </p>
                        </div>

                    </div>

                </div>
            </section>
            {/* Form Follows Function */}
            <section className="min-h-screen bg-[#f5f5f5] flex items-center">

                <div className="mx-auto grid h-full w-full max-w-[1900px] grid-cols-1 md:grid-cols-4 gap-8 md:gap-10 px-6 md:px-16 py-12 md:py-0">

                    {/* Left Content */}
                    <div className="flex flex-col justify-center">

                        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-gray-500">
                            DESIGN PHILOSOPHY
                        </p>

                        <h2 className="mb-8 font-['Inter'] text-6xl font-black leading-none text-black">
                            FORM FOLLOWS
                            <br />
                            FUNCTION
                        </h2>

                        <p className="max-w-sm text-lg leading-relaxed text-gray-600">
                            A circular design built for balance,
                            efficiency and strength.
                            Every detail serves a purpose.
                        </p>

                        <div className="mt-10 h-[4px] w-16 bg-black" />
                    </div>

                    {/* Front View */}
                    <div className="rounded-lg bg-white p-6">
                        <img
                            src="/vehicles/pragna-frontview.webp"
                            alt="Front View"
                            className="h-[500px] w-full scale-140 object-contain"
                        />

                        <p className="mt-6 text-center text-sm font-bold uppercase tracking-[0.25em] text-black">
                            FRONT VIEW
                        </p>
                    </div>

                    {/* Isometric View */}
                    <div className="rounded-lg bg-white p-6">
                        <img
                            src="/vehicles/pragna-isometricview.webp"
                            alt="Isometric View"
                            className="h-[500px] w-full scale-140 object-contain"
                        />

                        <p className="mt-6 text-center text-sm font-bold uppercase tracking-[0.25em] text-black">
                            ISOMETRIC VIEW
                        </p>
                    </div>

                    {/* Side View */}
                    <div className="rounded-lg bg-white p-6">
                        <img
                            src="/vehicles/pragna-sideview.webp"
                            alt="Side View"
                            className="h-[500px] w-full scale-150 object-contain"
                        />

                        <p className="mt-6 text-center text-sm font-bold uppercase tracking-[0.25em] text-black">
                            SIDE VIEW
                        </p>
                    </div>

                </div>

            </section>
            {/* Technical Specifications */}
            <section className="relative min-h-screen overflow-hidden bg-black">

                {/* Background */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/hero/dhruva-bg.webp')",
                    }}
                />

                <div className="absolute inset-0 bg-black/75" />

                <div className="relative z-10 grid min-h-screen grid-cols-1 lg:grid-cols-[50%_60%] items-center px-6 md:px-20 py-20 lg:py-0">

                    {/* Left Side */}
                    <div>

                        <h2 className="mb-8 md:mb-16 font-['Inter'] text-5xl md:text-7xl font-black leading-[0.95] text-white">
                            TECHNICAL
                            <br />
                            SPECIFICATION
                        </h2>

                        <div className="relative max-w-[600px] text-white">
                            {/* Vertical divider */}
                            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/20" />

                            {[
                                { left: { label: 'Diameter',       value: '520 mm'              }, right: { label: 'Thrusters', value: '8 (4H + 4V)' } },
                                { left: { label: 'Height',         value: '220 mm'              }, right: { label: 'Endurance', value: '8+ Hours'     } },
                                { left: { label: 'Weight',         value: '12.5 kg'             }, right: { label: 'Payload',   value: '5.0 kg'       } },
                                { left: { label: 'Depth Rating',   value: '1000 m'              }, right: { label: 'Top Speed', value: '4.5 Knots'    } },
                                { left: { label: 'Frame Material', value: 'Anodized Aluminium'  }, right: { label: 'Buoyancy',  value: 'Neutral'      } },
                            ].map((row, i) => (
                                <div key={i} className="grid grid-cols-2 border-b border-white/10 mb-10 pb-6">
                                    {/* Left spec */}
                                    <div className="flex justify-between items-start pr-8">
                                        <span className="text-white/50 whitespace-nowrap">{row.left.label}</span>
                                        <span className="text-right ml-4">{row.left.value}</span>
                                    </div>
                                    {/* Right spec */}
                                    <div className="flex justify-between items-start pl-8">
                                        <span className="text-white/50 whitespace-nowrap">{row.right.label}</span>
                                        <span className="text-right ml-4">{row.right.value}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                    {/* Right Side — hidden on mobile */}
                    <div className="hidden lg:flex justify-end pr-24">

                        <img
                            src="/vehicles/pragna.webp"
                            alt="Dhruva"
                            className="w-full max-w-[1500px] object-contain"
                        />

                    </div>

                </div>

                {/* Back to Top — bottom right pill */}
                <div className="absolute bottom-8 right-8 z-20">
                    <button
                        onClick={() => document.getElementById('pragna-top')?.scrollIntoView({ behavior: 'smooth' })}
                        className="group flex items-center gap-3 bg-[#0d1f33] hover:bg-white border border-white/10 hover:border-white rounded-full px-6 py-3 transition-all duration-300 cursor-pointer"
                    >
                        <span className="text-white/40 group-hover:text-slate-500 text-[11px] font-medium tracking-[0.2em] uppercase transition-colors duration-300">Back to Top</span>
                        <svg className="w-4 h-4 text-cyan-400 group-hover:text-slate-700 transition-all duration-300 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                        </svg>
                    </button>
                </div>

            </section>


        </div>
    );
}

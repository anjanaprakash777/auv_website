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

            {/* Transparent Core Section */}
            <section
                id="pragna-design"
                className="mx-auto grid max-w-[1800px] grid-cols-1 items-center gap-20 px-16 py-24 lg:grid-cols-2"
            >
                {/* Left Image */}
                <div className="flex justify-center">
                    <img
                        src="/vehicles/pragna-og.png"
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

                    <div className="grid grid-cols-4 gap-5">

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

                <div className="relative z-10 mx-auto w-[98vw] grid h-screen grid-cols-[20%_60%_20%] items-center px-4">

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
                            src="/vehicles/pragna.png"
                            alt="Thruster Layout"
                            className="w-full max-w-[800px]"
                        />
                    </div>


                    {/* Right Side */}
                    <div className="flex flex-col justify-center gap-28 text-white pt-40">

                        <div className="text-center">
                            <div className="mb-4 text-7xl">↕</div>

                            <h3 className="text-2xl font-bold">
                                4 Vertical Thrusters
                            </h3>

                            <p className="mt-3 text-white/60">
                                Depth control and stable hovering.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="mb-4 text-7xl">↔</div>

                            <h3 className="text-2xl font-bold">
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
                        backgroundImage: "url('/hero/underwater-applications.png')",
                    }}
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/45" />

                <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-10">

                    <p className="mb-3 text-xs uppercase tracking-[0.35em] text-white/60">
                        BUILT FOR THE OCEAN
                    </p>

                    <h2 className="mb-16 text-center font-['Inter'] text-6xl font-black text-white">
                        Versatile. Reliable. Autonomous.
                    </h2>

                    <div className="grid w-full max-w-7xl grid-cols-4 gap-8">

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

                <div className="mx-auto grid h-full w-full max-w-[1900px] grid-cols-4 gap-10 px-16">

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
                            src="/vehicles/pragna-frontview.png"
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
                            src="/vehicles/pragna-isometricview.png"
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
                            src="/vehicles/pragna-sideview.png"
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
                        backgroundImage: "url('/hero/dhruva-bg.png')",
                    }}
                />

                <div className="absolute inset-0 bg-black/75" />

                <div className="relative z-10 grid min-h-screen grid-cols-[50%_60%] items-center px-20">

                    {/* Left Side */}
                    <div>

                        <h2 className="mb-16 font-['Inter'] text-7xl font-black leading-[0.95] text-white">
                            TECHNICAL
                            <br />
                            SPECIFICATION
                        </h2>

                        <div className="relative grid grid-cols-2 gap-12 max-w-[600px] text-white">
                            <div className="absolute left-1/2 top-0 h-[90%] w-px -translate-x-1/2 bg-white/20" />

                            {/* Column 1 */}
                            <div className="pr-8">

                                <div className="mb-10 flex justify-between border-b border-white/10 pb-6">
                                    <span className="text-white/50">Diameter</span>
                                    <span>520 mm</span>
                                </div>

                                <div className="mb-10 flex justify-between border-b border-white/10 pb-6">
                                    <span className="text-white/50">Height</span>
                                    <span>220 mm</span>
                                </div>

                                <div className="mb-10 flex justify-between border-b border-white/10 pb-6">
                                    <span className="text-white/50">Weight</span>
                                    <span>12.5 kg</span>
                                </div>

                                <div className="mb-10 flex justify-between border-b border-white/10 pb-6">
                                    <span className="text-white/50">Depth Rating</span>
                                    <span>1000 m</span>
                                </div>

                                <div className="mb-10 flex justify-between border-b border-white/10 pb-6">
                                    <span className="text-white/50">Frame Material</span>
                                    <span>Anodized Aluminium</span>
                                </div>

                            </div>

                            {/* Column 2 */}
                            <div className="pl-8">

                                <div className="mb-10 flex justify-between border-b border-white/10 pb-6">
                                    <span className="text-white/50">Thrusters</span>
                                    <span>8 (4H + 4V)</span>
                                </div>

                                <div className="mb-10 flex justify-between border-b border-white/10 pb-6">
                                    <span className="text-white/50">Endurance</span>
                                    <span>8+ Hours</span>
                                </div>

                                <div className="mb-10 flex justify-between border-b border-white/10 pb-6">
                                    <span className="text-white/50">Payload</span>
                                    <span>5.0 kg</span>
                                </div>

                                <div className="mb-10 flex justify-between border-b border-white/10 pb-6">
                                    <span className="text-white/50">Top Speed</span>
                                    <span>4.5 Knots</span>
                                </div>

                                <div className="flex items-start justify-between border-b border-white/10 py-6">
                                    <span className="text-white/50">Buoyancy</span>
                                    <span>Neutral</span>
                                </div>



                            </div>

                        </div>

                    </div>

                    {/* Right Side */}
                    <div className="flex justify-end pr-24">

                        <img
                            src="/vehicles/pragna.png"
                            alt="Dhruva"
                            className="w-full max-w-[1500px] object-contain"
                        />

                    </div>

                </div>

            </section>
            {/* Final CTA Section */}
            <section
                className="relative min-h-screen overflow-hidden bg-black"
            >
                {/* Background */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/vehicles/final-bg.jpg')",
                    }}
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/50" />

                {/* Left Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

                {/* Background Text */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <h1
                        className="font-['Antonio'] text-[18vw] font-black uppercase whitespace-nowrap text-cyan-400/12"
                        style={{
                            transform: "scale(1,1.3)",
                        }}
                    >
                        EXPLORE
                    </h1>
                </div>

                {/* Content */}
                <div className="relative z-10 grid h-screen grid-cols-[55%_65%] items-center px-20">

                    {/* Left Side */}
                    <div>
                        <p className="mb-6 text-xs uppercase tracking-[0.35em] text-white/50">
                            READY FOR THE NEXT MISSION?
                        </p>

                        <h2 className="mb-8 font-['Inter'] text-7xl font-black leading-tight text-white">
                            Explore the Future
                            <br />
                            Beneath the Surface
                        </h2>

                        <p className="max-w-xl text-lg leading-relaxed text-white/70">
                            PRAGNA is ready for deep-sea challenges.
                            From exploration to inspection,
                            it delivers performance you can trust.
                        </p>

                        <div className="mt-12 flex gap-5">

                            <button
                                className="rounded-xl bg-white px-8 py-4 font-semibold text-black transition hover:bg-gray-200"
                            >
                                Download Brochure
                            </button>

                            <button
                                className="rounded-xl border border-white/20 px-8 py-4 text-white transition hover:bg-white/10"
                            >
                                Contact Team
                            </button>

                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="flex justify-end">
                        <img
                            src="/vehicles/pragna-og.png"
                            alt="Pragna"
                            className="w-[800px] object-contain -translate-x-40"
                        />
                    </div>

                </div>
            </section>


        </div>
    );
}

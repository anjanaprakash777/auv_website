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

export function DhruvaDetails() {
    return (
        <div className="bg-[#f5f5f5] text-black">

            {/* Transparent Core Section */}
            <section
                id="dhruva-design"
                className="mx-auto grid max-w-[1800px] grid-cols-1 items-center gap-20 px-16 py-24 lg:grid-cols-2"
            >
                {/* Left Image */}
                <div className="flex justify-center">
                    <img
                        src="/vehicles/core.png"
                        alt="Pressure Hull"
                        className="w-full max-w-[900px] object-contain"
                    />
                </div>

                {/* Right Content */}
                <div>
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
                        DESIGN EXCELLENCE
                    </p>

                    <h2 className="mb-8 text-6xl font-bold leading-tight">
                        Designed Around
                        <br />
                        a Transparent Core
                    </h2>

                    <p className="mb-12 max-w-xl text-lg leading-relaxed text-gray-600">
                        The modular acrylic pressure hull forms the heart of DHRUVA,
                        protecting mission-critical electronics while enabling modular
                        integration and rapid maintenance.
                    </p>

                    <div className="grid grid-cols-4 gap-5">

                        {/* Modular */}
                        <div className="border border-gray-300 p-8">
                            <Boxes className="mb-4 h-8 w-8 text-gray-700" />

                            <h3 className="font-semibold">
                                MODULAR
                            </h3>

                            <p className="mt-2 text-sm text-gray-500">
                                Architecture
                            </p>
                        </div>

                        {/* Lightweight */}
                        <div className="border border-gray-300 p-6">
                            <Feather className="mb-4 h-8 w-8 text-gray-600" />

                            <h3 className="font-semibold">
                                LIGHTWEIGHT
                            </h3>

                            <p className="mt-2 text-sm text-gray-500">
                                Frame
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
                            <Wrench className="mb-4 h-8 w-8 text-gray-600" />

                            <h3 className="font-semibold">
                                EASY
                            </h3>

                            <p className="mt-2 text-sm text-gray-500">
                                Manufacturing
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

                        <h2 className="mb-8 text-5xl font-bold text-white">
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
                            src="/vehicles/dhruva.png"
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

                    <h2 className="mb-16 text-center text-6xl font-bold text-white">
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

        </div>
    );
}
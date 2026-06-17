import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Dhruva } from "./components/Dhruva";
import { Pragna } from "./components/pragna";
import { DhruvaDetails } from "./components/DhruvaDetails";

function HomeHero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Ocean Background */}
      <video
        src="/hero/fallback.mp4"
        autoPlay
        muted
        loop
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Left Dark Gradient */}
      <div className="absolute inset-0 bg-linear-to-r from-black/75 via-black/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-8 pt-16">
        <div className="grid w-full items-center gap-10 lg:grid-cols-2">
          {/* Left Side */}
          <div>
            <p className="mb-6 text-sm uppercase tracking-[0.45em] text-cyan-300">
              Explore • Discover • Protect
            </p>

            <h1 className="font-[Orbitron] text-6xl font-black leading-[0.9] tracking-tight md:text-8xl">
              EXPLORING
              <br />
              EARTH&apos;S LAST
              <br />
              <span className="text-cyan-400 drop-shadow-[0_0_30px_rgba(34,211,238,0.9)]">
                FRONTIER
              </span>
            </h1>

            <div className="mt-6 h-[3px] w-24 bg-cyan-400" />

            <p className="mt-8 max-w-xl text-2xl font-light italic leading-relaxed text-slate-200">
              Advanced Autonomous Underwater Vehicles for Research,
              Inspection and Exploration.
            </p>
          </div>

          {/* Right Side */}
          <div className="relative flex justify-center">
            <div className="absolute h-[650px] w-[650px] rounded-full bg-cyan-400/20 blur-[180px]" />

            <img
              src="/vehicles/dhruva.png"
              alt="Dhruva AUV"
              className="relative z-10 w-full max-w-[950px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [route, setRoute] = useState(
    () => window.location.hash || "#home"
  );

  useEffect(() => {
    const handleHashChange = () =>
      setRoute(window.location.hash || "#home");

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener(
        "hashchange",
        handleHashChange
      );
    };
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">

      {route === "#dhruva-design" ? (
        <Navbar dark absolute />
      ) : (
        <Navbar />
      )}

      {route === "#dhruva-design" ? (
        <DhruvaDetails />
      ) : route === "#rovers" ? (
        <>
          <Dhruva />
          <Pragna />
        </>
      ) : (
        <HomeHero />
      )}

    </main>
  );
}

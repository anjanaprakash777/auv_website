import { Navbar } from "./components/layout/Navbar";
import { useHashRoute } from "./hooks/useHashRoute";
import {
  HomePage,
  DhruvaDetailsPage,
  PragnaDetailsPage,
} from "./pages";

export default function App() {
  const route = useHashRoute("#home");

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {route === "#dhruva-design" ? (
        <DhruvaDetailsPage />
      ) : route === "#pragna-design" ? (
        <PragnaDetailsPage />
      ) : (
        <HomePage />
      )}
    </main>
  );
}


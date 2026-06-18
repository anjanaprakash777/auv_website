import { Navbar } from "./components/layout/Navbar";
import { useHashRoute } from "./hooks/useHashRoute";
import {
  HomePage,
  AuvsPage,
  DhruvaDetailsPage,
  PragnaDetailsPage,
} from "./pages";

export default function App() {
  const route = useHashRoute("#home");

  /** Detail pages use absolute-positioned dark navbars */
  const isDetailPage =
    route === "#dhruva-design" || route === "#pragna-design";

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar dark={isDetailPage} absolute={isDetailPage} />

      {route === "#dhruva-design" ? (
        <DhruvaDetailsPage />
      ) : route === "#pragna-design" ? (
        <PragnaDetailsPage />
      ) : route === "#rovers" ? (
        <AuvsPage />
      ) : (
        <HomePage />
      )}
    </main>
  );
}

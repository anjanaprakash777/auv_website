import { useState, useEffect } from "react";

/**
 * Custom hook for hash-based routing.
 * Returns the current hash route and updates on hash changes.
 */
export function useHashRoute(defaultRoute = "#home") {
  const [route, setRoute] = useState(
    () => window.location.hash || defaultRoute
  );

  useEffect(() => {
    const handleHashChange = () =>
      setRoute(window.location.hash || defaultRoute);

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [defaultRoute]);

  return route;
}

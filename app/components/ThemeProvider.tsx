"use client";

import { createContext, useContext, useEffect, useState, useCallback, ReactNode } from "react";

type Theme = "light" | "dark" | "system";

interface ThemeContextType {
  theme: Theme;
  resolvedTheme: "light" | "dark";
  setTheme: (theme: Theme) => void;
}

const defaultContext: ThemeContextType = {
  theme: "system",
  resolvedTheme: "dark",
  setTheme: () => {},
};

const ThemeContext = createContext<ThemeContextType>(defaultContext);

// Lazy initializer to read from localStorage without triggering effect
function getInitialTheme(): Theme {
  if (typeof window !== "undefined") {
    return (localStorage.getItem("theme") as Theme) || "system";
  }
  return "system";
}

function getInitialResolvedTheme(initialTheme: Theme): "light" | "dark" {
  if (typeof window !== "undefined") {
    if (initialTheme === "system") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return initialTheme;
  }
  return "dark";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">(() =>
    getInitialResolvedTheme(getInitialTheme())
  );
  const [mounted, setMounted] = useState(false);

  // Mark as mounted after first render (avoids hydration mismatch)
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  // Apply theme changes to document and localStorage
  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;
    let resolved: "light" | "dark";

    if (theme === "system") {
      resolved = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    } else {
      resolved = theme;
    }

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setResolvedTheme(resolved);
    root.setAttribute("data-theme", resolved);
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  // Listen for system theme changes
  useEffect(() => {
    if (!mounted || theme !== "system") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      const resolved = e.matches ? "dark" : "light";
      setResolvedTheme(resolved);
      document.documentElement.setAttribute("data-theme", resolved);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme, mounted]);

  const setThemeCallback = useCallback((newTheme: Theme) => {
    setTheme(newTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme: setThemeCallback }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
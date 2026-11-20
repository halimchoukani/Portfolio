"use client";

import { useTheme } from "./ThemeProvider";
import { useEffect, useState, useRef } from "react";
import { Sun, Moon, Monitor } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Use a ref to track mounted state without triggering re-render in effect
  const mountedRef = useRef(false);
  useEffect(() => {
    mountedRef.current = true;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const themes: { value: Theme; label: string; icon: React.ReactNode }[] = [
    { value: "light", label: "Light", icon: <Sun size={16} aria-hidden="true" /> },
    { value: "dark", label: "Dark", icon: <Moon size={16} aria-hidden="true" /> },
    { value: "system", label: "System", icon: <Monitor size={16} aria-hidden="true" /> },
  ];

  if (!mounted) {
    return (
      <div className="relative">
        <button
          className="flex items-center gap-2 px-3 py-2 rounded-md bg-surface border border-border text-text-muted font-mono text-[11px] tracking-[0.1em] uppercase transition-all duration-200 cursor-pointer"
          disabled
          aria-label="Theme toggle loading"
        >
          <Monitor size={16} aria-hidden="true" />
          <span className="hidden sm:inline">System</span>
        </button>
      </div>
    );
  }

  const currentTheme = themes.find((t) => t.value === theme);
  const handleCycle = () => {
    const currentIndex = themes.findIndex((t) => t.value === theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex].value);
  };

  return (
    <div className="relative">
      <button
        aria-label={`Current theme: ${theme}. Click to change.`}
        aria-expanded="false"
        aria-haspopup="listbox"
        className="flex items-center gap-2 px-3 py-2 rounded-md bg-surface border border-border text-text-muted font-mono text-[11px] tracking-[0.1em] uppercase transition-all duration-200 hover:border-accent/50 hover:text-accent hover:bg-accent-muted cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
        onClick={handleCycle}
      >
        {currentTheme?.icon}
        <span className="hidden sm:inline">{currentTheme?.label}</span>
      </button>
    </div>
  );
}

type Theme = "light" | "dark" | "system";
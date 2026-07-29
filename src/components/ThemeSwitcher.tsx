import { useEffect, useState } from "react";
import { useDarkMode } from "../contexts/AppThemeProvider";
import { Moon, Sun } from "lucide-react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      type="button"
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      onClick={toggleDarkMode}
      className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-[var(--ink)] transition-colors hover:text-[var(--brand)]"
    >
      {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
}

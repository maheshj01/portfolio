// src/contexts/AppThemeProvider.tsx
import React, { createContext, useContext, ReactNode, useState } from "react";

interface DarkModeContextProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextProps | undefined>(
  undefined
);

/** Read the theme decided by the pre-paint script in index.html. */
function getInitialDarkMode(): boolean {
  if (typeof document === "undefined") return false;
  return document.documentElement.classList.contains("dark");
}

export const AppThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [darkMode, setDarkMode] = useState<boolean>(getInitialDarkMode);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => {
      const newDarkMode = !prevDarkMode;
      const root = document.documentElement;
      if (newDarkMode) {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
      try {
        localStorage.setItem("theme", newDarkMode ? "dark" : "light");
      } catch (e) {
        /* ignore storage errors */
      }
      return newDarkMode;
    });
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error("useDarkMode must be used within a AppThemeProvider");
  }
  return context;
};

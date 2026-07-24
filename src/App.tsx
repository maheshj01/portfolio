import React from "react";
import "./index.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useDarkMode } from "./contexts/AppThemeProvider";
import Main from "./components/Main";

function App() {
  const { darkMode } = useDarkMode();

  // One continuous vertical gradient across the whole page so section
  // boundaries blend smoothly instead of butting against hard edges.
  const themeStyles = {
    light: {
      background:
        "bg-[linear-gradient(180deg,#dbeafe_0%,#cffafe_22%,#eff6ff_48%,#ccfbf1_74%,#dbeafe_100%)]",
      text: "text-gray-800"
    },
    dark: {
      background:
        "bg-[linear-gradient(180deg,#0f172a_0%,#1f2937_50%,#111827_100%)]",
      text: "text-gray-100"
    }
  };

  const currentTheme = darkMode ? themeStyles.dark : themeStyles.light;

  return (
    <div id="about" className={`flex flex-col min-h-screen ${currentTheme.background} ${currentTheme.text}`}>
      <Header className="bg-transparent" />
      <div className="flex-grow mt-16">
        <Main />
      </div>
      <Footer className="flex-grow" year={new Date().getFullYear().toString()} />

    </div>
  );
}

export default App;

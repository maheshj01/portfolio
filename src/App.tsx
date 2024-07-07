import React from "react";
import "./index.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useDarkMode } from "./contexts/AppThemeProvider";
import Main from "./components/Main";

function App() {
  const { darkMode } = useDarkMode();

  const themeStyles = {
    light: {
      background: "bg-gradient-to-r from-blue-100 to-teal-100",
      text: "text-gray-800"
    },
    dark: {
      background: "bg-gradient-to-r from-gray-900 to-gray-800",
      text: "text-gray-100"
    }
  };

  const currentTheme = darkMode ? themeStyles.dark : themeStyles.light;

  return (
    <div id="about" className={`min-h-full flex flex-col ${currentTheme.background}`}>
      <Header className="bg-transparent" />
      <div className="flex-grow mt-16"> {/* Add padding-top here */}
        <Main />
      </div>
      <Footer year="2024" />
    </div>
  );
}

export default App;
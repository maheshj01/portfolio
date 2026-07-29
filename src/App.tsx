import React from "react";
import "./index.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

function App() {
  return (
    <div
      id="about"
      className="relative flex min-h-screen flex-col bg-[var(--page-bg)] text-[var(--ink)]"
    >
      {/* A single, quiet teal glow at the top: the only flourish on an
          otherwise flat, paper-like surface. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px] opacity-[0.5]"
        style={{
          background:
            "radial-gradient(60% 100% at 50% 0%, var(--brand-tint) 0%, transparent 70%)",
        }}
      />
      <Header />
      <div className="relative flex-grow">
        <Main />
      </div>
      <Footer year={new Date().getFullYear().toString()} />
    </div>
  );
}

export default App;

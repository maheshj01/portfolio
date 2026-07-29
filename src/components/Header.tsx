import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeSwitcher } from "./ThemeSwitcher";

const navbarItems = [
  { id: 1, name: "Blog", url: "https://blog.maheshjamdade.com", target: "_blank" },
  { id: 2, name: "About", url: "#about", target: "_self" },
  { id: 3, name: "Projects", url: "#projects", target: "_self" },
  { id: 4, name: "Skills", url: "#skills", target: "_self" },
  { id: 5, name: "Experience", url: "#experience", target: "_self" },
  { id: 6, name: "Contact", url: "#contact", target: "_self" },
];

function Header() {
  const [open, setOpen] = useState(false);

  // Close the mobile menu whenever the viewport grows to desktop width.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--rule)] bg-[var(--page-bg)]/75 backdrop-blur-md backdrop-saturate-150">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#about" className="flex items-center gap-2 no-underline">
          <span className="font-mono font-semibold text-[var(--brand)]" aria-hidden="true">
            ~/
          </span>
          <span className="font-display text-[0.98rem] font-semibold tracking-tight text-[var(--ink)]">
            Mahesh Jamdade
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navbarItems.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target={item.target}
              rel="noreferrer"
              className="font-mono text-[0.82rem] text-[var(--ink-soft)] no-underline transition-colors hover:text-[var(--brand)]"
            >
              {item.name}
            </a>
          ))}
          <ThemeSwitcher />
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-1 lg:hidden">
          <ThemeSwitcher />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-[var(--ink)]"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-[var(--rule)] bg-[var(--page-bg)] px-5 py-3 lg:hidden">
          {navbarItems.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target={item.target}
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="block py-2.5 font-mono text-sm text-[var(--ink-soft)] no-underline transition-colors hover:text-[var(--brand)]"
            >
              {item.name}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Header;

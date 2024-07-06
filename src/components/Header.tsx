import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import { useDarkMode } from "../contexts/AppThemeProvider";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { Bars3Icon } from "@heroicons/react/24/solid";

function Header({ className }: { className?: string }) {
  const navbarItems = [
    {
      id: 1,
      name: "Blog",
      url: "https://blog.maheshjamdade.com",
      target: "_blank",
    },
    {
      id: 2,
      name: "Docs",
      url: "https://docs.maheshjamdade.com",
      target: "_blank",
    },
    {
      id: 3,
      name: "About",
      url: "#about",
      target: "_self",
    },
    {
      id: 4,
      name: "Projects",
      url: "#projects",
      target: "_self",
    },
    {
      id: 5,
      name: "Skills",
      url: "#skills",
      target: "_self",
    },
    {
      id: 6,
      name: "Let's Connect",
      url: "#letsconnect",
      target: "_self",
    },
  ];
  const { darkMode } = useDarkMode();

  return (
    <Navbar
      className={`px-4 ${className} fixed-top ${darkMode ? 'bg-gray-900 bg-opacity-80' : 'bg-white bg-opacity-80'
        } backdrop-filter backdrop-blur-lg transition-all duration-300`}
      expand="lg"
    >
      <Navbar.Toggle
        aria-controls="navbarNav"
        className={`border-none ${darkMode ? 'border-white' : 'border-black'}`}
      >
        <Bars3Icon className={`h-8 w-8 ${darkMode ? 'text-slate-200' : 'text-slate-950'}`} />
      </Navbar.Toggle>
      <Navbar.Collapse id="navbarNav" color="red" >
        <ThemeSwitcher />
        <Nav className="ms-auto">
          {navbarItems.map((item) => (
            <Nav.Link
              key={item.id}
              href={item.url}
              target={item.target}
              rel="noreferrer"
              className={`mx-2 ${darkMode ? "text-white" : "text-black"} hover:opacity-75 transition-opacity duration-300`}
            >
              {item.name}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
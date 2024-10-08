import React from "react";
import { FaCode, FaGithub, FaLinkedin, FaMedium, FaStackOverflow, FaXTwitter } from "react-icons/fa6";
import { useDarkMode } from "../contexts/AppThemeProvider";
import Tooltip from 'react-bootstrap/Tooltip'
import { OverlayTrigger } from "react-bootstrap";
const Footer = ({ year, className }: { year: string, className: string }) => {
  const { darkMode } = useDarkMode();

  const socialLinks = [
    { name: "Github", icon: FaGithub, url: "https://github.com/maheshj01", },
    { name: "LinkedIn", icon: FaLinkedin, url: "https://linkedin.com/in/maheshjamdade", color: "text-blue-600" },
    { name: "Twitter", icon: FaXTwitter, url: "https://twitter.com/maheshj01" },
    { name: "Leetcode", icon: FaCode, url: "https://leetcode.com/maheshjamdade/", color: "text-orange-500" },
    { name: "Stackoverflow", icon: FaStackOverflow, url: "https://stackoverflow.com/users/8253662/mahesh-jamdade", color: "text-orange-500" },
    { name: "medium", icon: FaMedium, url: "https://maheshjamdade.medium.com/", color: darkMode ? "text-white" : "text-black" }
  ];

  return (
    <footer className={`py-6 ${darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-800"} ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h5 className="text-xl font-semibold">Mahesh Jamdade</h5>
            <p className="text-sm">Full Stack Developer</p>
          </div>
          <div className="mb-4 md:mb-0 text-center">
            <p className="text-sm">&copy; {year} All rights reserved</p>
          </div>
          <div className="flex justify-center md:justify-end">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <OverlayTrigger overlay={<Tooltip id={`tip-${index}`}>{social.name}</Tooltip>}>
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none me-3"
                  >
                    <Icon size={24} className={social.color} />
                  </a>
                </OverlayTrigger>
              );
            })
            }
          </div>
        </div>
      </div>
    </footer >
  );
};

export default Footer;
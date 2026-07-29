import React from "react";
import {
  FaCode, FaGithub, FaInstagram, FaLinkedin, FaMedium,
  FaStackOverflow, FaXTwitter, FaYoutube,
} from "react-icons/fa6";

const socialLinks = [
  { name: "GitHub", icon: FaGithub, url: "https://github.com/maheshj01" },
  { name: "LinkedIn", icon: FaLinkedin, url: "https://linkedin.com/in/maheshjamdade" },
  { name: "Twitter / X", icon: FaXTwitter, url: "https://twitter.com/maheshj01" },
  { name: "LeetCode", icon: FaCode, url: "https://leetcode.com/maheshjamdade/" },
  { name: "Stack Overflow", icon: FaStackOverflow, url: "https://stackoverflow.com/users/8253662/mahesh-jamdade" },
  { name: "Medium", icon: FaMedium, url: "https://maheshjamdade.medium.com/" },
  { name: "Instagram", icon: FaInstagram, url: "https://www.instagram.com/maheshj01/" },
  { name: "YouTube", icon: FaYoutube, url: "https://www.youtube.com/@maheshj01" },
];

const Footer = ({ year }: { year: string }) => {
  return (
    <footer className="border-t border-[var(--rule)] bg-[var(--page-bg)] py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 md:flex-row md:justify-between md:gap-4">
        <div className="text-center md:text-left">
          <p className="flex items-center justify-center gap-1.5 font-display text-base font-semibold text-[var(--ink)] md:justify-start">
            <span className="font-mono text-[var(--brand)]">~/</span>
            Mahesh Jamdade
          </p>
          <p className="mt-0.5 font-mono text-xs text-[var(--muted)]">
            Full-Stack Engineer · © {year}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-1">
          {socialLinks.map(({ name, icon: Icon, url }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              title={name}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-[var(--ink-soft)] transition-colors hover:text-[var(--brand)]"
            >
              <Icon className="h-[18px] w-[18px]" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

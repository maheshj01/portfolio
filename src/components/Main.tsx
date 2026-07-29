// src/components/Main.tsx
import React from "react";
import avatarImage from "../assets/img/public_profile.jpg";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import GHContribution from "./GHContribution";
import { motion } from "framer-motion";
import ContactForm from "./Contact";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { ArrowUpRight, ArrowDown } from "lucide-react";

const socials = [
  { name: "GitHub", icon: FaGithub, url: "https://github.com/maheshj01" },
  { name: "LinkedIn", icon: FaLinkedin, url: "https://linkedin.com/in/maheshjamdade" },
  { name: "Twitter / X", icon: FaXTwitter, url: "https://twitter.com/maheshj01" },
];

function Hero() {
  return (
    <section className="section-shell pt-14 pb-12 md:pt-20 md:pb-16">
      <div className="grid items-center gap-10 md:grid-cols-[auto_1fr] md:gap-14">
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative mx-auto md:mx-0"
        >
          <div
            aria-hidden="true"
            className="absolute -inset-3 rounded-full opacity-70 blur-2xl"
            style={{ background: "var(--brand-tint)" }}
          />
          <img
            src={avatarImage}
            alt="Mahesh Jamdade"
            className="relative h-40 w-40 rounded-full object-cover ring-1 ring-[var(--rule-strong)] md:h-52 md:w-52"
          />
        </motion.div>

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
          className="flex flex-col items-center text-center md:items-start md:text-left"
        >
          <p className="mb-4 inline-flex items-center gap-2 font-mono text-[0.78rem] font-medium uppercase tracking-wider text-[var(--brand)]">
            <span
              className="h-2 w-2 rounded-full bg-[var(--brand)]"
              style={{ boxShadow: "0 0 0 4px var(--brand-tint)" }}
              aria-hidden="true"
            />
            Senior Full-Stack Engineer
          </p>

          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-[var(--ink)] md:text-6xl">
            Mahesh Jamdade
          </h1>

          <p className="mt-4 max-w-xl font-display text-xl font-medium text-[var(--ink-soft)] md:text-2xl">
            Delivering Polished Mobile and Web experiences.
          </p>

          <p className="mt-4 max-w-xl text-[1.02rem] leading-relaxed text-[var(--ink-soft)]">
            I'm a Senior Full-Stack Engineer with 4+ years of experience building
            high-quality mobile and web applications. I enjoy turning complex problems
            into intuitive experiences through clean architecture, polished interfaces,
            and performant systems that scale.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 md:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center gap-1.5 rounded-full bg-[var(--brand)] px-5 py-2.5 text-[0.95rem] font-semibold text-[var(--brand-contrast)] no-underline transition-transform hover:-translate-y-0.5"
            >
              View my work
              <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 font-medium text-[var(--ink-soft)] no-underline transition-colors hover:text-[var(--brand)]"
            >
              Get in touch
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <div className="flex items-center gap-1">
              {socials.map(({ name, icon: Icon, url }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={name}
                  title={name}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-[var(--ink-soft)] transition-colors hover:text-[var(--brand)]"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>

          <p className="mt-8 font-mono text-[0.8rem] text-[var(--muted)]">
            Currently @ iVUEIT LLC · Columbus, OH · Learn → Code → Build
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function Main() {
  return (
    <main className="flex-grow">
      <Hero />

      <div className="section-shell">
        <GHContribution username="maheshj01" />
      </div>

      <div id="skills">
        <Skills />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <ContactForm />
      </div>
    </main>
  );
}

export default Main;

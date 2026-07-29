// src/components/Experience.tsx
import React from "react";
import { motion } from "framer-motion";

interface Role {
  title: string;
  period: string;
}

interface ExperienceEntry {
  company: string;
  location: string;
  roles: Role[];
}

const experiences: ExperienceEntry[] = [
  {
    company: "iVUEIT LLC",
    location: "Columbus, OH",
    roles: [
      { title: "Senior Fullstack Engineer", period: "Jan 2026 – Present" },
      { title: "Fullstack Engineer", period: "Jun 2025 – Jan 2026" },
    ],
  },
  {
    company: "The Citizen Project",
    location: "Boston, MA",
    roles: [{ title: "Software Engineer", period: "Aug 2024 – May 2025" }],
  },
  {
    company: "University of Massachusetts Dartmouth",
    location: "Dartmouth, MA",
    roles: [{ title: "CIS Graduate Research Assistant", period: "Jan 2024 – Jul 2024" }],
  },
  {
    company: "Building Assure PBC",
    location: "Boston, MA",
    roles: [{ title: "Software Engineer Intern", period: "Sep 2023 – Dec 2023" }],
  },
  {
    company: "Codemagic",
    location: "Tartu, Estonia (Remote)",
    roles: [{ title: "Open Source Engineer", period: "Jun 2020 – Aug 2022" }],
  },
  {
    company: "Codemonk",
    location: "Bangalore, India",
    roles: [{ title: "Associate Software Engineer", period: "Aug 2020 – Jun 2021" }],
  },
  {
    company: "Altorum Leren",
    location: "Bangalore, India",
    roles: [{ title: "Junior Software Engineer", period: "Jun 2019 – Jul 2020" }],
  },
  {
    company: "Hands in Technology",
    location: "Mumbai, India",
    roles: [{ title: "Android Developer Intern", period: "Jun 2018 – Aug 2018" }],
  },
];

const ExperienceItem = ({ company, location, roles, index }: ExperienceEntry & { index: number }) => {
  const isCurrent = index === 0;
  return (
    <li className="relative pl-9">
      {/* Node on the spine */}
      <span
        aria-hidden="true"
        className={
          isCurrent
            ? "absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full bg-[var(--brand)]"
            : "absolute left-[1px] top-1.5 h-[13px] w-[13px] rounded-full border-2 border-[var(--rule-strong)] bg-[var(--page-bg)]"
        }
        style={isCurrent ? { boxShadow: "0 0 0 4px var(--brand-tint)" } : undefined}
      />
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
      >
        <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
          <h3 className="font-display text-base font-semibold text-[var(--ink)]">{company}</h3>
          <span className="font-mono text-xs text-[var(--muted)]">{location}</span>
        </div>
        {roles.map((role, i) => (
          <div
            key={i}
            className="mt-1 flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between"
          >
            <p className="flex items-center gap-2 text-sm text-[var(--ink-soft)]">
              {role.title}
              {isCurrent && i === 0 && (
                <span className="rounded-full bg-[var(--brand-tint)] px-2 py-0.5 font-mono text-[0.62rem] font-medium uppercase tracking-wide text-[var(--brand)]">
                  Now
                </span>
              )}
            </p>
            <p className="font-mono text-xs text-[var(--muted)]">{role.period}</p>
          </div>
        ))}
      </motion.div>
    </li>
  );
};

function Experience() {
  return (
    <section className="section-shell py-16">
      <div className="section-head">
        <h2 className="section-title text-2xl md:text-3xl">Experience</h2>
        <span className="section-rule" aria-hidden="true" />
        <span className="font-mono text-xs text-[var(--muted)]">2018 → now</span>
      </div>

      <div className="relative">
        {/* Timeline spine */}
        <span
          aria-hidden="true"
          className="absolute bottom-2 left-[7px] top-2 w-px bg-[var(--rule)]"
        />
        <ol className="space-y-8">
          {experiences.map((exp, index) => (
            <ExperienceItem key={exp.company} {...exp} index={index} />
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Experience;

// src/components/Projects.tsx
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLink, FaGooglePlay, FaChrome } from "react-icons/fa6";
import { ArrowUpRight } from "lucide-react";
import { Project, projects } from "../constants";

const IconLink = ({ icon, href, label }: { icon: React.ReactNode; href?: string; label: string }) => {
  if (!href) return null;
  return (
    <a
      title={label}
      aria-label={label}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative z-10 inline-flex h-8 w-8 items-center justify-center rounded-lg text-[var(--ink-soft)] transition-colors hover:text-[var(--brand)]"
    >
      {icon}
    </a>
  );
};

const ProjectCard: React.FC<Project> = ({
  title, description, technologies, githubLink, liveLink, image, playstore, chromeStore,
}) => {
  const primary = liveLink || githubLink || playstore || chromeStore || "#";

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--rule)] bg-[var(--surface)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--brand)] hover:shadow-[0_18px_40px_-24px_rgba(15,118,110,0.55)]">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-semibold text-[var(--ink)] transition-colors group-hover:text-[var(--brand)]">
            <a
              href={primary}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline text-inherit before:absolute before:inset-0 before:content-['']"
            >
              {title}
            </a>
          </h3>
          <ArrowUpRight className="mt-1 h-[18px] w-[18px] shrink-0 text-[var(--muted)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--brand)]" />
        </div>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--ink-soft)]">{description}</p>

        <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1">
          {technologies.map((tech) => (
            <span key={tech} className="font-mono text-[0.72rem] text-[var(--muted)]">
              <span className="opacity-55">#</span>
              {tech.replace(/\s+/g, "")}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-1 border-t border-[var(--rule)] pt-3">
          <IconLink label="GitHub" href={githubLink} icon={<FaGithub className="h-[18px] w-[18px]" />} />
          <IconLink label="Live demo" href={liveLink} icon={<FaLink className="h-[18px] w-[18px]" />} />
          <IconLink label="Play Store" href={playstore} icon={<FaGooglePlay className="h-[18px] w-[18px]" />} />
          <IconLink label="Chrome Web Store" href={chromeStore} icon={<FaChrome className="h-[18px] w-[18px]" />} />
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section className="section-shell py-16">
      <div className="section-head">
        <h2 className="section-title text-2xl md:text-3xl">Projects</h2>
        <span className="section-rule" aria-hidden="true" />
        <span className="font-mono text-xs text-[var(--muted)]">few of my cool apps</span>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

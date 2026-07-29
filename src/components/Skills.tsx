// src/components/Skills.tsx
import React from "react";
import {
  SiDart, SiPython, SiReact, SiFlutter, SiAndroid, SiGit, SiNodedotjs,
  SiDocker, SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql,
  SiFirebase, SiFigma, SiGo,
} from "react-icons/si";
import { IconType } from "react-icons";

interface Skill {
  skill: string;
  icon: IconType;
  color: string;
}

const groups: { label: string; skills: Skill[] }[] = [
  {
    label: "Languages",
    skills: [
      { skill: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
      { skill: "Go", icon: SiGo, color: "text-cyan-500" },
      { skill: "Python", icon: SiPython, color: "text-blue-400" },
      { skill: "Dart", icon: SiDart, color: "text-sky-500" },
    ],
  },
  {
    label: "Frameworks & Libraries",
    skills: [
      { skill: "React", icon: SiReact, color: "text-sky-500" },
      { skill: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
      { skill: "Flutter", icon: SiFlutter, color: "text-sky-500" },
      { skill: "Android", icon: SiAndroid, color: "text-green-500" },
      { skill: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
    ],
  },
  {
    label: "Tools & Platforms",
    skills: [
      { skill: "Git", icon: SiGit, color: "text-orange-500" },
      { skill: "Docker", icon: SiDocker, color: "text-blue-500" },
      { skill: "PostgreSQL", icon: SiPostgresql, color: "text-blue-500" },
      { skill: "MongoDB", icon: SiMongodb, color: "text-green-500" },
      { skill: "Firebase", icon: SiFirebase, color: "text-amber-500" },
      { skill: "Figma", icon: SiFigma, color: "text-pink-500" },
    ],
  },
];

const SkillChip = ({ skill, Icon, color }: { skill: string; Icon: IconType; color: string }) => (
  <div className="group inline-flex items-center gap-2.5 rounded-xl border border-[var(--rule)] bg-[var(--surface)] px-3.5 py-2.5 transition-colors hover:border-[var(--brand)]">
    <Icon className={`h-5 w-5 ${color}`} />
    <span className="text-sm font-medium text-[var(--ink)]">{skill}</span>
  </div>
);

function Skills() {
  return (
    <section className="section-shell py-16">
      <div className="section-head">
        <h2 className="section-title text-2xl md:text-3xl">Skills</h2>
        <span className="section-rule" aria-hidden="true" />
        <span className="font-mono text-xs text-[var(--muted)]">what I build with</span>
      </div>

      <div className="space-y-8">
        {groups.map((group) => (
          <div key={group.label}>
            <h3 className="mb-3 font-mono text-[0.72rem] font-medium uppercase tracking-wider text-[var(--muted)]">
              {group.label}
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {group.skills.map((s) => (
                <SkillChip key={s.skill} skill={s.skill} Icon={s.icon} color={s.color} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

// src/components/Skills.tsx
import React from "react";
import { useDarkMode } from "../contexts/AppThemeProvider";
import { SiDart, SiPython, SiReact, SiFlutter, SiAndroid, SiGit, SiNodedotjs, SiDocker, SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql, SiFirebase, SiFigma, SiGo } from "react-icons/si";
import { IconType } from "react-icons";

interface Skill {
    skill: string;
    icon: IconType;
    color: string;
}

const SkillCard = ({ skill, Icon, color }: { skill: string, Icon: IconType, color: string }) => {
    const { darkMode } = useDarkMode();

    return (
        <div className="flex flex-col items-center p-4 bg-opacity-20 rounded-lg transition-shadow duration-300">
            <Icon className={`${color} w-7 h-7 md:h-8 md:w-8 sm:h-10 sm:w-10`} />
            <span className={`${darkMode ? 'text-white' : 'text-black'} mt-2 text-lg font-semibold`}>{skill}</span>
        </div>
    );
};

function Skills() {
    const { darkMode } = useDarkMode();

    const groups: { label: string; skills: Skill[] }[] = [
        {
            label: "Languages",
            skills: [
                { skill: "TypeScript", icon: SiTypescript, color: 'text-blue-600' },
                { skill: "Go", icon: SiGo, color: 'text-cyan-500' },
                { skill: "Python", icon: SiPython, color: 'text-blue-500' },
                { skill: "Dart", icon: SiDart, color: 'text-sky-500' },
            ]
        },
        {
            label: "Frameworks & Libraries",
            skills: [
                { skill: "React", icon: SiReact, color: 'text-sky-500' },
                { skill: "Node.js", icon: SiNodedotjs, color: 'text-green-600' },
                { skill: "Flutter", icon: SiFlutter, color: 'text-sky-500' },
                { skill: "Android", icon: SiAndroid, color: 'text-green-600' },
                { skill: "Tailwind CSS", icon: SiTailwindcss, color: 'text-cyan-500' },
            ]
        },
        {
            label: "Tools & Platforms",
            skills: [
                { skill: "Git", icon: SiGit, color: 'text-red-600' },
                { skill: "Docker", icon: SiDocker, color: 'text-blue-500' },
                { skill: "PostgreSQL", icon: SiPostgresql, color: 'text-blue-700' },
                { skill: "MongoDB", icon: SiMongodb, color: 'text-green-600' },
                { skill: "Firebase", icon: SiFirebase, color: 'text-yellow-500' },
                { skill: "Figma", icon: SiFigma, color: 'text-pink-500' },
            ]
        }
    ];

    return (
        <section className={`py-16`}>
            <div className="container mx-auto px-4">
                <h2 className={`text-3xl font-bold text-center mb-10 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Skills</h2>
                <div className="max-w-3xl mx-auto space-y-8">
                    {groups.map((group, gIndex) => (
                        <div key={gIndex}>
                            <h3 className={`text-center text-sm font-semibold uppercase tracking-wider mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                                {group.label}
                            </h3>
                            <div className="flex flex-wrap justify-center md:space-x-6 sm:xs-space-1 xs:space-x-2">
                                {group.skills.map((skill, index) => (
                                    <SkillCard key={index} skill={skill.skill} Icon={skill.icon} color={skill.color} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;

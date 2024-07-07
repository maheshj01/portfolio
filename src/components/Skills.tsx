// src/components/Skills.js
import React from "react";
import { useDarkMode } from "../contexts/AppThemeProvider";
import { SiDart, SiPython, SiReact, SiFlutter, SiAndroid, SiGit, SiNodedotjs, SiDocker, SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql, SiHtml5, SiCss3, SiFirebase, SiFigma } from "react-icons/si";
import { IconType } from "react-icons";

const SkillCard = ({ skill, Icon, color }: { skill: string, Icon: IconType, color: string }) => {
    return (
        <div className="flex flex-col items-center p-4 bg-white bg-opacity-20 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <Icon className={color} size={32} />
            <span className="mt-2 text-lg font-semibold">{skill}</span>
        </div>
    );
};

function Skills() {
    const { darkMode } = useDarkMode();

    const skills = [
        { skill: "Typescript", icon: SiTypescript, color: 'text-green-600' },
        { skill: "Python", icon: SiPython, color: 'text-blue-600' },
        { skill: "Dart", icon: SiDart, color: 'text-blue-500' },
        { skill: "React", icon: SiReact, color: 'text-blue-600' },
        { skill: "Node.js", icon: SiNodedotjs, color: 'text-green-600' },
        { skill: "Git", icon: SiGit, color: 'text-red-600' },
        { skill: "Flutter", icon: SiFlutter, color: 'text-blue-500' },
        { skill: "Android", icon: SiAndroid, color: 'text-green-600' },
        { skill: "Docker", icon: SiDocker, color: 'text-blue-600' },
        { skill: "Tailwind CSS", icon: SiTailwindcss, color: 'text-blue-500' },
        { skill: "PostgreSQL", icon: SiPostgresql, color: 'text-blue-600' },
        { skill: "MongoDB", icon: SiMongodb, color: 'text-green-600' },
        // { skill: "HTML5", icon: SiHtml5, color: 'orange' },
        // { skill: "CSS3", icon: SiCss3, color: 'blue' },
        { skill: "Firebase", icon: SiFirebase, color: 'text-yellow-400' },
        { skill: "Figma", icon: SiFigma, color: 'text-blue-600' },
    ];

    return (
        <section className={`py-16 text-gray-800`}>
            <div className="container mx-auto px-4">
                <h2 className={`text-3xl font-bold text-center mb-8 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Skills</h2>
                <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {skills.map((skill, index) => (
                        <SkillCard key={index} skill={skill.skill} Icon={skill.icon} color={skill.color} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
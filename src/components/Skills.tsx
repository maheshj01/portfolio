// src/components/Skills.js
import React from "react";
import { useDarkMode } from "../contexts/AppThemeProvider";
import { SiDart, SiPython, SiReact, SiFlutter, SiAndroid, SiGit, SiNodedotjs, SiDocker, SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql, SiHtml5, SiCss3, SiFirebase, SiFigma } from "react-icons/si";
import { IconType } from "react-icons";

const SkillCard = ({ skill, Icon, color }: { skill: string, Icon: IconType, color: string }) => {
    const { darkMode } = useDarkMode();

    return (
        <div className="flex flex-col items-center p-4  bg-opacity-20 rounded-lg transition-shadow duration-300">
            <Icon className={`${color} md:h-8 md:w-8 xs:h-4 xs:w-4`} />
            <span className={`${darkMode ? 'text-white' : 'text-black'} mt-2 text-lg font-semibold`}>{skill}</span>
        </div>
    );
};

function Skills() {
    const { darkMode } = useDarkMode();
    const programmingLanguages = [
        {
            skill: "Typescript", icon: SiTypescript, color: 'text-green-600'
        },
        { skill: "Python", icon: SiPython, color: 'text-blue-600' },
        { skill: "Dart", icon: SiDart, color: 'text-blue-500' }
    ];
    const frameworks = [
        { skill: "React", icon: SiReact, color: 'text-blue-600' },
        { skill: "Node.js", icon: SiNodedotjs, color: 'text-green-600' },
        { skill: "Android", icon: SiAndroid, color: 'text-green-600' },
        { skill: "Tailwind CSS", icon: SiTailwindcss, color: 'text-blue-500' },
        { skill: "Flutter", icon: SiFlutter, color: 'text-blue-500' },
    ]
    const tools = [
        { skill: "Git", icon: SiGit, color: 'text-red-600' },
        { skill: "Docker", icon: SiDocker, color: 'text-blue-600' },
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
                <div className="flex flex-wrap justify-center md:space-x-6 sm:xs-space-1 xs:space-x-2">
                    {programmingLanguages.map((skill, index) => (
                        <SkillCard key={index} skill={skill.skill} Icon={skill.icon} color={skill.color} />
                    ))}
                </div>
                <div className="flex flex-wrap justify-center md:space-x-6 sm:xs-space-1 xs:space-x-2">
                    {frameworks.map((skill, index) => (
                        <SkillCard key={index} skill={skill.skill} Icon={skill.icon} color={skill.color} />
                    ))}
                </div>
                <div className="flex flex-wrap justify-center md:space-x-6 sm:xs-space-1 xs:space-x-2">
                    {tools.map((skill, index) => (
                        <SkillCard key={index} skill={skill.skill} Icon={skill.icon} color={skill.color} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
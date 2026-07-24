// src/components/Experience.tsx
import React, { useEffect } from "react";
import { useDarkMode } from "../contexts/AppThemeProvider";
import { motion, useAnimation, useInView } from "framer-motion";

interface Role {
    title: string;
    period: string;
}

interface ExperienceEntry {
    company: string;
    location: string;
    roles: Role[];
}

const ExperienceItem = ({ company, location, roles, index }: ExperienceEntry & { index: number }) => {
    const { darkMode } = useDarkMode();
    const textColor = darkMode ? "text-gray-100" : "text-gray-800";
    const mutedColor = darkMode ? "text-gray-300" : "text-gray-600";
    const bgColor = darkMode ? "bg-gray-800" : "bg-white";
    const timelineColor = darkMode ? "bg-gray-600" : "bg-blue-200";

    const controls = useAnimation();
    const ref = React.useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.2 });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <div className="flex" ref={ref}>
            <div className="w-10 shrink-0 relative mr-4">
                <div className={`absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 ${timelineColor}`}></div>
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full ${timelineColor} border-[3px] ${darkMode ? 'border-gray-300' : 'border-blue-500'}`} style={{ top: '14px' }}></div>
            </div>
            <motion.div
                initial="hidden"
                animate={controls}
                variants={{
                    visible: { opacity: 1, x: 0 },
                    hidden: { opacity: 0, x: -40 }
                }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className={`flex-grow mb-3 px-4 py-3 rounded-lg shadow-sm ${bgColor}`}
            >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                    <h3 className={`text-base font-bold ${textColor}`}>{company}</h3>
                    <p className={`text-xs ${mutedColor}`}>{location}</p>
                </div>
                {roles.map((role, i) => (
                    <div key={i} className="mt-0.5 flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                        <p className={`text-sm font-medium ${textColor}`}>{role.title}</p>
                        <p className={`text-xs italic ${mutedColor}`}>{role.period}</p>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

function Experience() {
    const { darkMode } = useDarkMode();

    const experiences: ExperienceEntry[] = [
        {
            company: "iVUEIT LLC",
            location: "Columbus, OH",
            roles: [
                { title: "Senior Fullstack Engineer", period: "Jan 2026 – Present" },
                { title: "Fullstack Engineer", period: "Jun 2025 – Jan 2026" }
            ]
        },
        {
            company: "The Citizen Project",
            location: "Boston, MA",
            roles: [{ title: "Software Engineer", period: "Aug 2024 – May 2025" }]
        },
        {
            company: "University of Massachusetts Dartmouth",
            location: "Dartmouth, MA",
            roles: [{ title: "CIS Graduate Research Assistant", period: "Jan 2024 – July 2024" }]
        },
        {
            company: "Building Assure PBC",
            location: "Boston, MA",
            roles: [{ title: "Software Engineer Intern", period: "Sept 2023 – Dec 2023" }]
        },
        {
            company: "Codemagic",
            location: "Tartu, Estonia (Remote)",
            roles: [{ title: "Open Source Engineer", period: "Jun 2020 – Aug 2022" }]
        },
        {
            company: "Codemonk",
            location: "Bangalore, India",
            roles: [{ title: "Associate Software Engineer", period: "Aug 2020 – Jun 2021" }]
        },
        {
            company: "Altorum Leren",
            location: "Bangalore, India",
            roles: [{ title: "Junior Software Engineer", period: "Jun 2019 – Jul 2020" }]
        },
        {
            company: "Hands in Technology",
            location: "Mumbai, India",
            roles: [{ title: "Android Developer Intern", period: "Jun 2018 – Aug 2018" }]
        }
    ];

    const controls = useAnimation();
    const ref = React.useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.1 });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <section className={`py-16`}>
            <div className="container mx-auto px-4">
                <motion.h2
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: -50 }
                    }}
                    transition={{ duration: 0.5 }}
                    className={`text-4xl font-bold text-center mb-10 ${darkMode ? "text-gray-100" : "text-gray-800"}`}
                >
                    Experience
                </motion.h2>
                <div className="max-w-2xl mx-auto max-h-[34rem] overflow-y-auto pr-3 pt-1 experience-scroll">
                    {experiences.map((exp, index) => (
                        <ExperienceItem key={index} {...exp} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;

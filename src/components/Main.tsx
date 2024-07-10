// src/components/Main.js
import React from "react";
import { useDarkMode } from "../contexts/AppThemeProvider";
import avatarImage from '../assets/img/public_profile.jpg';
import pdf from '../assets/docs/My_Resume.pdf';
import { Button } from "react-bootstrap";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import GHContribution from "./GHContribution";
import { motion } from "framer-motion";

function Main() {
    const { darkMode } = useDarkMode();

    const themeStyles = {
        light: {
            text: "text-gray-800",
            button: "hover:bg-blue-600 text-black ",
            avatar: "border-slate-50",
            skillsGradient: "bg-gradient-to-b from-blue-100 to-teal-100",
            experienceGradient: "bg-gradient-to-b from-teal-100 to-blue-50",
            projectsGradient: "bg-gradient-to-b from-blue-50 to-teal-100"
        },
        dark: {
            text: "text-gray-100",
            button: "hover:bg-blue-700 text-black ",
            avatar: "border-slate-600",
            skillsGradient: "bg-gradient-to-b from-gray-900 to-gray-800",
            experienceGradient: "bg-gradient-to-b from-gray-800 to-gray-700",
            projectsGradient: "bg-gradient-to-b from-gray-800 to-gray-700"
        }
    };

    const currentTheme = darkMode ? themeStyles.dark : themeStyles.light;

    return (
        <main className={`mx-auto flex-grow mt-16`}>
            <section className="flex flex-col md:flex-row items-center justify-between px-4">
                <div className={`w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg animate-slide-left border-4 md:ml-20 ${currentTheme.avatar} `}>
                    <img
                        src={avatarImage}
                        alt="Mahesh Jamdade"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="md:w-1/2 mb-8 mt-8 animate-slide-right flex flex-col items-center">
                    <h1 className={`text-4xl md:text-6xl font-bold ${currentTheme.text}`}>
                        Mahesh Jamdade
                    </h1>
                    <p className={`text-xl md:text-2xl mt-4 ${currentTheme.text}`}>
                        Learn | Code | Build
                    </p>
                    <div className="mt-8 flex flex-row justify-center space-x-4 sm:space-y-0 sm:space-x-4">
                        <Button
                            href={pdf}
                            target="_blank"
                            variant="outline-primary"
                            rel="noopener noreferrer"
                            className={`px-6 py-2 rounded-md font-semibold transition duration-300 ease-in-out transform hover:scale-105`}
                        >
                            Resume
                        </Button>

                        <Button
                            href="https://blog.maheshjamdade.com"
                            target="_blank"
                            variant="outline-primary"
                            rel="noopener noreferrer"
                            className={`px-6 py-2 hover:text-white rounded-md font-semibold transition duration-300 ease-in-out transform hover:scale-105`}
                        >
                            Blog
                        </Button>
                    </div>
                </div>
            </section>
            <motion.div
                initial={{ y: 200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeIn" }}
                className="md:mt-40 xs:mt-2 flex justify-center"
            >
                <GHContribution username="maheshmnj" />
            </motion.div>
            <div className="h-40" />
            <div id="skills" className={`${currentTheme.skillsGradient}`}>
                <Skills />
            </div>
            <div id="experience" className={`${currentTheme.experienceGradient}`}>
                <Experience />
            </div>
            <div id="projects" className={`${currentTheme.projectsGradient}`}>
                <Projects />
            </div>
            <div className="h-40" />
        </main >
    );
}

export default Main;
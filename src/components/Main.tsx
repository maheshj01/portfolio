// src/components/Main.tsx
import React from "react";
import { useDarkMode } from "../contexts/AppThemeProvider";
import avatarImage from '../assets/img/public_profile.jpg';
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import GHContribution from "./GHContribution";
import { motion } from "framer-motion";
import ContactForm from "./Contact";

function Main() {
    const { darkMode } = useDarkMode();

    const themeStyles = {
        light: {
            text: "text-gray-800",
            muted: "text-gray-600",
            avatar: "border-slate-50"
        },
        dark: {
            text: "text-gray-100",
            muted: "text-gray-300",
            avatar: "border-slate-600"
        }
    };

    const currentTheme = darkMode ? themeStyles.dark : themeStyles.light;

    return (
        <main className={`mx-auto flex-grow mt-16`}>
            <section className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-12 md:gap-24 px-6 md:px-10 pt-6 md:pt-12">
                <div className={`shrink-0 w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg animate-slide-left border-4 ${currentTheme.avatar}`}>
                    <img
                        src={avatarImage}
                        alt="Mahesh Jamdade"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="animate-slide-right flex flex-col items-center md:items-start justify-center text-center md:text-left">
                    <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold ${currentTheme.text}`}>
                        Mahesh Jamdade
                    </h1>
                    <p className={`text-xl md:text-2xl mt-3 font-semibold ${currentTheme.text}`}>
                        Senior Full-Stack Engineer
                    </p>
                    <p className={`text-lg mt-2 ${currentTheme.muted}`}>
                        Learn | Code | Build
                    </p>
                </div>
            </section>
            <motion.div
                initial={{ y: 200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeIn" }}
                className="mt-16 md:mt-24 xs:m-2 flex justify-center">
                <GHContribution
                    className={`${darkMode ? 'bg-gray-800/70' : 'bg-white/40'} backdrop-blur-sm rounded-lg shadow-md`}
                    username="maheshj01" />
            </motion.div>
            <div className="h-24" />
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
        </main >
    );
}

export default Main;

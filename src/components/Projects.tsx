// src/components/Projects.tsx
import React from "react";
import { motion } from "framer-motion";
import { useDarkMode } from "../contexts/AppThemeProvider";
import pastelogBanner from '../assets/img/Pastelog.png';
import vocabhubBanner from '../assets/img/Vocabhub.jpg';
import epochBanner from '../assets/img/epoch_frame.png';
import omnisBanner from '../assets/img/omnis.png';
import ghfreak from '../assets/img/gh-freaks.png';
import portfolio from '../assets/img/portfolio.png';
import { FaGithub } from "react-icons/fa";
interface Project {
    title: string;
    description: string;
    technologies: string[];
    githubLink?: string;
    liveLink?: string;
    image: string;
    playstore?: string;
    chromeStore?: string;
}

const ProjectCard: React.FC<Project> = ({ title, description, technologies, githubLink, liveLink, image, playstore, chromeStore }) => {
    const { darkMode } = useDarkMode();
    const bgColor = darkMode ? "bg-gray-800" : "bg-white";
    const textColor = darkMode ? "text-black" : "text-gray-800";

    return (
        <motion.div
            className={`${bgColor} rounded-lg shadow-lg overflow-hidden`}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}>
            <motion.div
                className="flex flex-col w-full bg-gray-100 relative overflow-hidden"
                whileHover="hover"
            >
                <motion.img
                    src={image}
                    alt={title}
                    className="w-full h-48 object-cover"
                    variants={{
                        hover: {
                            scale: 1.1,
                            y: -10,
                            transition: { duration: 0.3 }
                        }
                    }}
                />
                <motion.div
                    className="p-6 relative z-10"
                    variants={{
                        hover: {
                            y: -5,
                            transition: { duration: 0.3 }
                        }
                    }}
                >
                    {/* Rest of the content */}
                    <h3 className={`text-xl font-bold mb-2 ${textColor}`}>{title}</h3>
                    <p className={`${textColor} mb-4`}>{description}</p>
                    <div className="h-16">
                        <div className="flex flex-wrap">
                            {technologies.map((tech, index) => (
                                <span key={index} className={`${darkMode ? 'bg-gray-700' : 'bg-gray-200'} dark:text-white px-2 py-1 rounded-full text-sm mr-2 mb-2`}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className='h-8' />
                    <div className="flex justify-between">
                        {githubLink ? <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-600"><FaGithub /> </a> : <div />}
                        {liveLink && <a href={liveLink} target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-600">Live Demo</a>}
                        {playstore && <a href={playstore} target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-600">Playstore</a>}
                        {chromeStore && <a href={chromeStore} target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-600">ChromeStore</a>}

                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};
const Projects: React.FC = () => {
    const { darkMode } = useDarkMode();

    const projects: Project[] = [
        {
            title: "Epoch",
            description: "An app that helps you track important events in your life. Simply add an event, set a target date, and watch the countdown begin. 🎉",
            technologies: ["Flutter", "Dart", "Firebase"],
            githubLink: "",
            image: epochBanner,
            playstore: "https://play.google.com/store/apps/details?id=com.wml.epoch"
        },
        {
            title: "Omnis AI",
            description: "A Chrome plugin to give you AI capabilities on any input on the internet. It can help you fill any input. All you have to do is ask with a prompt",
            technologies: ["Typescript", "Webpack", "React", "Tailwind CSS"],
            githubLink: "",
            image: omnisBanner,
            chromeStore: "https://chromewebstore.google.com/detail/omnis/jnlmmhniofekbnlhejdaflloeifkpfhh?authuser=0&hl=en"
        },
        {
            title: "Pastelog",
            description: "PasteLog is a simple, fast, and powerful pastebin. It allows you to publish Rich Text logs/Notes, and access them with a unique link.",
            technologies: ["NextJS", "TypeScript", "Tailwind CSS", "Firebase"],
            githubLink: "https://github.com/maheshj01/pastelog",
            liveLink: "https://pastelog.vercel.app",
            image: pastelogBanner
        },
        {
            title: "Github Freak",
            description: "Project for Github Freaks to view their Github stats and details. This project is built using React.js, Tailwind CSS, and Github API.",
            technologies: ["ReactJs", "TypeScript", "Tailwind CSS", "Github API"],
            githubLink: "https://github.com/maheshj01/github-freak",
            liveLink: "https://github-freak.vercel.app/",
            image: ghfreak
        },
        {
            title: "Portfolio",
            description: "This portfolio website is built using React, TypeScript, and Tailwind CSS with Github. Hosted on Vercel with CI/CD.",
            technologies: ["ReactJs", "TypeScript", "Tailwind CSS", "Github API"],
            githubLink: "https://github.com/maheshmn/portfolio:",
            image: portfolio,
        },
        {
            title: "Vocabhub",
            description: "A crowd-sourced platform for improving your Vocabulary . Users can add new words, meanings, and examples.",
            technologies: ["Flutter", "Dart", "Supabase", "PostgreSQL", "Firebase"],
            githubLink: "https://github.com/maheshj01/vocabhub",
            image: vocabhubBanner,
            playstore: "https://play.google.com/store/apps/details?id=com.vocabhub.app"
        },
    ];

    return (
        <section className={`py-16`}>
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`text-4xl font-bold text-center mb-12 ${darkMode ? "text-gray-100" : "text-gray-800"}`}
                >
                    Projects
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <ProjectCard {...project} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
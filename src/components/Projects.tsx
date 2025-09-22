// src/components/Projects.tsx
import React from "react";
import { motion } from "framer-motion";
import { useDarkMode } from "../contexts/AppThemeProvider";
import { FaGithub } from "react-icons/fa";
import { Project, projects } from "../constants";

const ProjectCard: React.FC<Project> = ({ title, description, technologies, githubLink, liveLink, image, playstore, chromeStore }) => {
    const { darkMode } = useDarkMode();
    const bgColor = darkMode ? "bg-gray-800" : "bg-white";
    const textColor = darkMode ? "text-black" : "text-gray-800";

    return (
        <div
            className={`${bgColor} rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-all duration-300`}
        // whileHover={{ scale: 1.03 }}
        // transition={{ duration: 0.3 }}
        >
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
        </div>
    );
};
const Projects: React.FC = () => {
    const { darkMode } = useDarkMode();

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
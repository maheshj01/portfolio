// src/components/Experience.js
import React, { useEffect } from "react";
import { useDarkMode } from "../contexts/AppThemeProvider";
import { motion, useAnimation, useInView } from "framer-motion";

const ExperienceItem = ({ title, company, period, description, location, index }: { title: string, location: string, company: string, period: string, description: string[], index: number }) => {
    const { darkMode } = useDarkMode();
    const textColor = darkMode ? "text-gray-100" : "text-gray-800";
    const bgColor = darkMode ? "bg-gray-800" : "bg-white";
    const timelineColor = darkMode ? "bg-gray-600" : "bg-blue-200";

    const controls = useAnimation();
    const ref = React.useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.1 });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <div className="flex" ref={ref}>
            <div className="w-1/12 relative mr-8">
                <div className={`absolute left-1/2 transform -translate-x-1/2 h-full w-1 ${timelineColor}`}></div>
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full ${timelineColor} border-4 ${darkMode ? 'border-gray-300' : 'border-blue-500'}`} style={{ top: '24px' }}></div>
            </div>
            <motion.div
                initial="hidden"
                animate={controls}
                variants={{
                    visible: { opacity: 1, x: 0 },
                    hidden: { opacity: 0, x: -50 }
                }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`w-11/12 mb-8 p-6 rounded-lg shadow-lg ${bgColor}`}
            >
                <h3 className={`text-xl font-bold ${textColor}`}>{title}</h3>
                <p className={`text-lg ${textColor}`}>{company} | {location}</p>
                <p className={`text-sm italic ${textColor}`}>{period}</p>
                {/* <ul className={`${textColor} list-disc list-inside`}>
                    {description.map((item, idx) => (
                        <li key={idx} className="mb-2">{item}</li>
                    ))}
                </ul> */}
            </motion.div>
        </div>
    );
};

function Experience() {
    const { darkMode } = useDarkMode();
    const bgColor = darkMode ? "bg-gray-800" : "bg-blue-50";


    const experiences = [
        {
            title: "CIS Graduate Research Assistant",
            company: "University of Massachusetts Dartmouth",
            location: "Dartmouth, MA",
            period: "Jan 2024 – July 2024",
            description: [

            ]
        },
        {
            title: "Software Engineer Intern",
            company: "Building Assure PBC",
            location: "Boston, MA",
            period: "Sept 2023 – Dec 2023",
            description: [
                "Engineered a robust REST API using Node.js, achieving a 20% reduction in response times and increased scalability.",
                "Built a web app using React, PostgreSQL, and Docker for utility bill management, resulting in a 30% reduction in processing time and a 20% increase in user productivity.",
                "Implemented offline access and data sync functionality, resulting in a 40% decrease in data loss incidents during connectivity issues and a 25% increase in user engagement metrics."
            ]
        },
        {
            title: "Open Source Engineer",
            company: "Codemagic",
            location: "Tartu, Estonia (Remote)",
            period: "Jun 2021 – Aug 2022",
            description: [
                "Collaborated with the Flutter team to prioritize and resolve 2000 critical issues in Google OSS, enriching framework stability and user experience.",
                "Validated, labeled, and categorized a weekly influx of 400 bugs, ensuring efficient issue resolution.",
                "Created reproducible code samples, contributed pull requests, and identified regressions, enhancing overall software quality."
            ]
        },
        {
            title: "Associate Software Engineer",
            company: "Codemonk",
            location: "Bangalore, India",
            period: "Aug 2020 – Jun 2021",
            description: [
                "Led the development of a high-impact enterprise mobile app, which caters to over 10,000 daily active users.",
                "Contributed to a 30% year-over-year revenue growth through the successful deployment of mobile applications.",
                "Crafted microservices fostering loose coupling, autonomous deployment, and improving system scalability by 20%."
            ]
        },
        {
            title: "Mobile Developer",
            company: "Altorum Leren Private Ltd",
            location: "Bangalore, India",
            period: "Jul 2019 – Aug 2020",
            description: [
                "Shipped an organic food delivery app to Playstore and Appstore, garnering over 500 daily active users.",
                "Collaborated with the backend team to develop REST APIs using Node.js, leading to a 10% improvement in API response time",
                "Implemented custom real-time data synchronization with an online data store, achieving a 40% reduction in data retrieval latency.",
                "Assisted in developing automation tools that boosted developer productivity by more than 20%."
            ]
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
                    className={`text-4xl font-bold text-center mb-12 ${darkMode ? "text-gray-100" : "text-gray-800"}`}
                >
                    Experience
                </motion.h2>
                <div className="max-w-3xl mx-auto">
                    {experiences.map((exp, index) => (
                        <ExperienceItem key={index} {...exp} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;
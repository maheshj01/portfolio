import epochBanner from './assets/img/epoch_frame.png';
import omnisBanner from './assets/img/omnis.png';
import pastelogBanner from './assets/img/Pastelog.png';
import ghfreak from './assets/img/gh-freaks.png';
import portfolio from './assets/img/portfolio.png';
import vocabhubBanner from './assets/img/Vocabhub.jpg';
import furdleBanner from './assets/img/furdle.jpeg';

export interface Project {
    title: string;
    description: string;
    technologies: string[];
    githubLink?: string;
    liveLink?: string;
    image: string;
    playstore?: string;
    chromeStore?: string;
}

export const projects: Project[] = [
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
    {
        title: "Furdle",
        description: "A word guessing game inspired by Wordle. Users can guess words and get feedback on their guesses.",
        technologies: ["Flutter", "Firebase", "Cloud Scheduler"],
        githubLink: "https://github.com/maheshj01/furdle",
        image: furdleBanner,
        playstore: "https://play.google.com/store/apps/details?id=com.wml.furdle",
        liveLink: "https://furdle.web.app"
    },
];

import React from 'react';
import ProjectCard from './ProjectCard';
import '../styles/Projects.css';

// date = GitHub repo creation date
const projects = [
    {
        id: 6,
        title: "SignNet",
        date: "2026-06-12",
        description: "A convolutional neural network that sorts German traffic signs into 43 classes, with backpropagation written from scratch in pure NumPy. No PyTorch, TensorFlow, or autograd.",
        image: "/imgs/SignNet.png",
        tags: ["Python", "NumPy", "React", "TypeScript"],
        demoLink: "https://signnet-cnn.netlify.app",
        codeLink: "https://github.com/sohan-bhat/signnet",
    },
    {
        id: 5,
        title: "Ensemble",
        date: "2026-02-08",
        description: "An r/place for music: one shared orchestral score the whole world writes together, note by note. Anyone, anywhere, adds to the same global symphony.",
        image: "/imgs/Ensemble.png",
        tags: ["React", "Vite", "Express", "VexFlow", "LibSQL"],
        demoLink: "https://ensemble-qnd2.onrender.com",
        codeLink: "https://github.com/sohan-bhat/ensemble",
    },
    {
        id: 4,
        title: "VacantCourt Config Utility",
        date: "2025-05-22",
        description: "Android app running on-device person detection (TensorFlow Lite) and pushing live court occupancy to Firebase. Camera in, signal out.",
        image: "/imgs/VacantCourtApp.png",
        tags: ["Kotlin", "Android", "TensorFlow Lite", "Firebase", "CameraX"],
        codeLink: "https://github.com/sohan-bhat/VacantCourtApp",
        system: "VacantCourt system",
    },
    {
        id: 1,
        title: "VacantCourt",
        date: "2025-03-17",
        description: "A real-time court availability system that finds free, nearby courts and shows if they're available. Play more, wait less.",
        image: "/imgs/VacantCourtWebsite.png",
        tags: ["Vite", "React", "Firebase", "Kotlin", "TensorFlow Lite"],
        demoLink: "https://vacantcourt.netlify.app",
        codeLink: "https://github.com/sohan-bhat/VacantCourt",
        system: "VacantCourt system",
    },
    {
        id: 2,
        title: "Mochi",
        date: "2024-07-25",
        description: "A fully responsive recipe finder from just the ingredients you have!",
        image: "/imgs/Mochi.png",
        tags: ["React", "Node.js", "Groq API"],
        demoLink: "https://trymochi.netlify.app",
        codeLink: "https://github.com/sohan-bhat/Mochi",
    },
    {
        id: 3,
        title: "Career AI",
        date: "2024-06-21",
        description: "Find your dream careers with the help of a personalized on-board AI just based on your interests!",
        image: "/imgs/CareerAI.png",
        tags: ["React", "Node.js", "Groq API"],
        demoLink: "https://careerai.netlify.app",
        codeLink: "https://github.com/sohan-bhat/CareerAI",
        legacy: true,
    }
];

const toMs = (iso) => new Date(iso).getTime();

// Newest first, grouped by year: [[2026, [...]], [2025, [...]], ...]
const groupByYear = (list) => {
    const sorted = [...list].sort((a, b) => toMs(b.date) - toMs(a.date));
    const groups = [];
    sorted.forEach((p) => {
        const year = new Date(p.date).getUTCFullYear();
        const last = groups[groups.length - 1];
        if (last && last[0] === year) last[1].push(p);
        else groups.push([year, [p]]);
    });
    return groups;
};

const yearGroups = groupByYear(projects);

const Projects = () => (
    <section className="projects">
        <div className="container">
            <h2 className="section-title">Projects<span className="title-period">.</span></h2>

            <div className="time-spine">
                {yearGroups.map(([year, items]) => (
                    <div className="spine-year-group" key={year}>
                        <h3 className="spine-year">{year}</h3>
                        {items.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Projects;

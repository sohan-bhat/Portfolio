// src/components/Projects.js
import React from 'react';
import ProjectCard from './ProjectCard';
import '../styles/Projects.css';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "VacantCourt",
            description: "A real-time court availibility website that finds free, nearby courts and shows if they're available or not. Play more, wait less.",
            image: "/imgs/VacantCourtWebsite.png",
            tags: ["Vite", "Firebase", "Kotlin", "AndroidX", "YoloV5" ],
            demoLink: "https://vacantcourt.netlify.app",
            codeLink: "https://github.com/sohan-bhat/vacantcourtwebsite"
        },
        {
            id: 2,
            title: "Foodify",
            description: "A fully responsive recipe finder from just the ingredients you have!",
            image: "/imgs/Foodify.png",
            tags: ["React", "Node.js", "Groq API"],
            demoLink: "https://foodistry.netlify.app",
            codeLink: "https://github.com/sohan-bhat/Foodify",
            status: "Production"
        },
        {
            id: 3,
            title: "Career AI",
            description: "Find your dream careers with the help of a personalized on-board AI just based on your interests!",
            image: "/imgs/CareerAI.png",
            tags: ["React", "Node.js", "Groq API"],
            demoLink: "https://careerai.netlify.app",
            codeLink: "https://github.com/sohan-bhat/CareerAI",
            status: "Production"
        }
    ];

    return (
        <section className="projects">
            <div className="container">
                <h2 className="section-title">Projects</h2>
                <div className="project-grid">
                    {projects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
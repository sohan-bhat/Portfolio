import React from 'react';
import ProjectCard from './ProjectCard';
import '../styles/Projects.css';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Foodify",
            description: "A fully responsive recipe finder from just the ingredients you have!",
            image: "/imgs/Foodify.png",
            tags: ["React", "Node.js", "Groq API"],
            demoLink: "https://foodistry.netlify.app",
            codeLink: "https://github.com/sohan-bhat/Foodify"
        },
        {
            id: 2,
            title: "Career AI",
            description: "Find your dream careers with the help of a personalized on-board AI just based on your interests!",
            image: "/imgs/CareerAI.png",
            tags: ["React", "Node.js", "Groq API"],
            demoLink: "https://careerai.netlify.app",
            codeLink: "https://github.com/sohan-bhat/CareerAI"
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

export default Projects
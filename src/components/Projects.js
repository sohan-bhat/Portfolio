import React from 'react';
import ProjectCard from './ProjectCard';
import ProjectGroup from './ProjectGroup';
import '../styles/Projects.css';

const projects = [
    {
        id: 4,
        title: "VacantCourt Config Utility",
        description: "Android app running on-device person detection (TensorFlow Lite) and pushing live court occupancy to Firebase. Camera in, signal out.",
        image: "/imgs/VacantCourtApp.png",
        tags: ["Kotlin", "Android", "TensorFlow Lite", "Firebase", "CameraX"],
        codeLink: "https://github.com/sohan-bhat/VacantCourtApp",
        groupId: "vacantcourt",
        groupRole: "source"
    },
    {
        id: 1,
        title: "VacantCourt",
        description: "A real-time court availability system that finds free, nearby courts and shows if they're available. Play more, wait less.",
        image: "/imgs/VacantCourtWebsite.png",
        tags: ["Vite", "React", "Firebase", "Kotlin", "TensorFlow Lite"],
        demoLink: "https://vacantcourt.netlify.app",
        codeLink: "https://github.com/sohan-bhat/vacantcourtwebsite",
        groupId: "vacantcourt",
        groupRole: "sink"
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

const projectGroups = {
    vacantcourt: {
        label: 'vacantcourt-system',
        flow: 'detection → web',
        order: ['source', 'sink']
    }
};

const splitProjects = (list) => {
    const ungrouped = [];
    const groupsById = {};
    list.forEach((p) => {
        if (p.groupId) {
            (groupsById[p.groupId] ||= []).push(p);
        } else {
            ungrouped.push(p);
        }
    });
    return { ungrouped, groupsById };
};

const Projects = () => {
    const { ungrouped, groupsById } = splitProjects(projects);

    return (
        <section className="projects">
            <div className="container">
                <h2 className="section-title">Projects<span className="title-period">.</span></h2>
                <div className="project-grid">
                    {Object.entries(groupsById).map(([id, members]) => (
                        <ProjectGroup
                            key={id}
                            config={projectGroups[id]}
                            projects={members}
                        />
                    ))}
                    {ungrouped.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

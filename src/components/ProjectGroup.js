import React from 'react';
import ProjectCard from './ProjectCard';
import '../styles/ProjectGroup.css';

const ProjectGroup = ({ config, projects }) => {
    const ordered = [...projects].sort(
        (a, b) => config.order.indexOf(a.groupRole) - config.order.indexOf(b.groupRole)
    );

    return (
        <div className="project-group">
            <span className="project-group-label">
                <span className="project-group-name">{config.label}</span>
                <span className="project-group-sep" aria-hidden="true">·</span>
                <span className="project-group-flow">{config.flow}</span>
            </span>
            <div className="project-group-cards">
                {ordered.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
                <span className="project-group-link" aria-hidden="true">
                    <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M9 17H7A5 5 0 0 1 7 7h2" />
                        <path d="M15 7h2a5 5 0 0 1 0 10h-2" />
                        <line x1="8" y1="12" x2="16" y2="12" />
                    </svg>
                </span>
            </div>
        </div>
    );
};

export default ProjectGroup;

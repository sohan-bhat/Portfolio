import React, { useState } from 'react';
import '../styles/ProjectCard.css';

const PLACEHOLDER_IMAGE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%230f172a'/%3E%3Ctext x='50' y='50' font-family='Arial' font-size='14' text-anchor='middle' fill='%233b82f6' dominant-baseline='middle'%3ENo Image%3C/text%3E%3C/svg%3E";

const buildCodeLinks = (project) => {
    if (project.codeLinks) return project.codeLinks;
    if (project.codeLink) return [{ label: 'Code', url: project.codeLink }];
    return [];
};

const ProjectCard = ({ project }) => {
    const [imageError, setImageError] = useState(false);
    const imgSrc = imageError || !project.image ? PLACEHOLDER_IMAGE : project.image;
    const codeLinks = buildCodeLinks(project);
    const isProduction = project.status === 'Production';

    return (
        <div className="project-card">
            <div className="project-image">
                <img
                    src={imgSrc}
                    alt={project.title}
                    loading="lazy"
                    onError={() => setImageError(true)}
                />
                <div className="project-overlay">
                    <div className="project-links">
                        {project.demoLink && (
                            <a
                                href={project.demoLink}
                                target="_blank"
                                rel="noreferrer"
                                className="project-link"
                            >
                                Demo
                            </a>
                        )}
                        {codeLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.url}
                                target="_blank"
                                rel="noreferrer"
                                className="project-link"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <div className="project-content">
                <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <span className={`project-badge ${isProduction ? 'badge-production' : 'badge-development'}`}>
                        {isProduction ? 'Prod' : 'Dev'}
                    </span>
                </div>
                <p>{project.description}</p>
                <div className="project-tags">
                    {project.tags.map((tag, index) => (
                        <span key={tag} className={`project-tag tag-${index % 4}`}>
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default React.memo(ProjectCard);

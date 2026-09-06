import React, { useState } from 'react';
import '../styles/ProjectCard.css';

const PLACEHOLDER_IMAGE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23f1eadb'/%3E%3Ctext x='50' y='50' font-family='Arial' font-size='10' text-anchor='middle' fill='%23a09480' dominant-baseline='middle'%3ENo Image%3C/text%3E%3C/svg%3E";

const buildCodeLinks = (project) => {
    if (project.codeLinks) return project.codeLinks;
    if (project.codeLink) return [{ label: 'Code', url: project.codeLink }];
    return [];
};

const ProjectCard = ({ project }) => {
    const [imageError, setImageError] = useState(false);
    const imgSrc = imageError || !project.image ? PLACEHOLDER_IMAGE : project.image;
    const codeLinks = buildCodeLinks(project);

    return (
        <article className="project-entry">
            <div className="entry-main">
                <div className="entry-title-row">
                    <h4 className="entry-title">{project.title}</h4>
                    {project.system && (
                        <span className="entry-chip">{project.system}</span>
                    )}
                    {project.legacy && (
                        <span className="entry-chip" title="This project is no longer maintained">
                            retired
                        </span>
                    )}
                    <div className="entry-links">
                        {project.demoLink && (
                            <a
                                href={project.demoLink}
                                target="_blank"
                                rel="noreferrer"
                                className="entry-link"
                            >
                                Live ↗
                            </a>
                        )}
                        {project.videoLink && (
                            <a
                                href={project.videoLink}
                                target="_blank"
                                rel="noreferrer"
                                className="entry-link"
                            >
                                Video ↗
                            </a>
                        )}
                        {codeLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.url}
                                target="_blank"
                                rel="noreferrer"
                                className="entry-link"
                            >
                                {link.label} ↗
                            </a>
                        ))}
                    </div>
                </div>
                <p className="entry-description">{project.description}</p>
                <div className="entry-tags">
                    {project.tags.map((tag) => (
                        <span key={tag} className="entry-tag">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
            <img
                className="entry-thumb"
                src={imgSrc}
                alt={project.title}
                loading="lazy"
                onError={() => setImageError(true)}
            />
        </article>
    );
};

export default React.memo(ProjectCard);

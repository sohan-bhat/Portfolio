import React, { useState, useEffect } from 'react';
import '../styles/ProjectCard.css'

const ProjectCard = ({ project }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [imageError, setImageError] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    const handleImageError = () => {
        setImageError(true);
    }

    // Default placeholder if image is missing or fails to load
    const placeholderImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%230f172a'/%3E%3Ctext x='50' y='50' font-family='Arial' font-size='14' text-anchor='middle' fill='%233b82f6' dominant-baseline='middle'%3ENo Image%3C/text%3E%3C/svg%3E";

    return (
        <div
            className={`project-card ${isHovered ? 'hovered' : ''} ${isVisible ? 'visible' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className='project-image'>
                <img
                    src={imageError || !project.image ? placeholderImage : project.image}
                    alt={project.title}
                    loading='lazy'
                    onError={handleImageError}
                />
                <div className='project-overlay'>
                    <div className='project-links'>
                        {project.demoLink && (
                            <a href={project.demoLink} target='_blank' className='project-link'>Demo</a>
                        )}
                        <a href={project.codeLink} target='_blank' className='project-link'>Code</a>
                    </div>
                </div>
            </div>
            <div className='project-content'>
                <h3 className='project-title'>{project.title}</h3>
                <p>{project.description}</p>
                <div className='project-tags'>
                    {project.tags.map((tag, index) => (
                        <span key={index} className={`project-tag tag-${index % 3}`}>
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default React.memo(ProjectCard);
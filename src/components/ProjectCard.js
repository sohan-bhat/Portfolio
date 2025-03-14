import React, { useState } from 'react';
import '../styles/ProjectCard.css'

const ProjectCard = ({ project }) => {
    // For Animation hover
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

  return (
    <div
        className={`project-card ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={handleMouseEnter}
        onmouseleave={handleMouseLeave}
    >
        <div className='project-image'>
            <image src={project.image} alt={project.title} />
            <div className='project-overlay'>
                <div className='project-links'>
                    <a href={project.demoLink} className='project-link'>Demo</a>
                    <a href={project.codeLink} className='project-link'>Code</a>
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

export default ProjectCard
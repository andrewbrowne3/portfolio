import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ title, description, link, imageUrl }) => {
  return (
    <div className="project-card">
      <img src={imageUrl} alt={`${title} screenshot`} className="project-image" />
      <div className="project-details">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
      </div>
    </div>
  );
};

export default ProjectCard;

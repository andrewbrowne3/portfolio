import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.css";

const ProjectCard = ({ id, title, description, imageUrl }) => {
  return (
    <div className="project-card">
      <img src={imageUrl} alt={`${title} screenshot`} className="project-image" />
      <div className="project-details">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to={`/project/${id}`} className="view-project-link">View Project</Link>
      </div>
    </div>
  );
};

export default ProjectCard;

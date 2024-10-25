import React from "react";

const ScienceCard = ({ title, description, link }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">View More</a>
    </div>
  );
};

export default ScienceCard;

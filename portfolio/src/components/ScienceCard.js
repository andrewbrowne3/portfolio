import React from "react";

const ScienceCard = ({ title, authors, status }) => {
  return (
    <div className="science-card">
       <h3 className="card-title">{title}</h3>
      <p className="card-authors">{authors}</p>
      <p className="card-status">{status}</p>
    </div>
  );
};

export default ScienceCard;

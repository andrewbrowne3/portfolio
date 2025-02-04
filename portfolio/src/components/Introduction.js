import React from "react";
import "../Introduction.css";

const Introduction = () => {
  return (
    <div className="introduction">
      <img 
        src="https://andrewslearningimage-bucket.s3.amazonaws.com/media/Aboutus_image.jpeg" 
        alt="Andrew Browne" 
        className="profile-photo" 
      />
      <div className="intro-text">
        <center>
        <h1>Welcome!</h1>
        <p>
          Hi! I’m Andrew Browne, a biochemist specializing in assay development, structural biology, and computational chemistry. I am also a trained full stack developer 
          and have experience with various aspects in machine learning! I build custom web applications 
          and tools for a variety of industries. Explore my portfolio to see my work, and feel free to 
          reach out if you’d like to collaborate!
        </p></center>
      </div>
    </div>
  );
};

export default Introduction;

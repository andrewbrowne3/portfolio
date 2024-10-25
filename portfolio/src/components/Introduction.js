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
        <h1>Greetings</h1>
        <p>
          Hi! I’m Andrew Browne, a full-stack developer and scientist. I build custom web applications 
          and tools for a variety of industries. Explore my portfolio to see my work, and feel free to 
          reach out if you’d like to collaborate!
        </p></center>
      </div>
    </div>
  );
};

export default Introduction;

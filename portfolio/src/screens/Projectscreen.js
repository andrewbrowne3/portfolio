
import React, { useState } from "react";

import { useParams, useNavigate } from "react-router-dom";

import './ProjectDetails.css';
import ImageModal from "../components/ImageModal.js";
const projectData = {
  "world-map": {
    title: "World Map Application",
    description: "A map application showcasing global locations.",
    blogpost: null,
    purpose: "Educational tool to teach geography.",
    galleryImages: [
      "https://andrewslearningimage-bucket.s3.us-east-1.amazonaws.com/worldmap.png",
      "https://via.placeholder.com/150"
    ],
    stack: "React, Django",
    database: "Postgres 16",
    hosting: "Personal Ubuntu Server and AWS",
    link_to_github: "https://github.com/yourgithub/project2",
    link_to_website: "https://andrewslearning.com"
  },
  "learning-center": {
    title: "Andrew's Learning Center",
    description: "Interactive learning platform.",
    blogpost: "Andrew's Learning Center was inspired by my time tutoring throughout grad school. I noticed patterns in how students learned challenging material, and I realized that to make concepts stick, learning had to be more engaging—almost game-like. That's where the idea came from! Inspired by the CAT exam from the nursing world, I decided to build my own CAT examination system with a custom algorithm, alongside a suite of tools that would make learning not just effective but enjoyable. This isn’t just a single app—it’s a super app! It features an AI chatbot to assist students, CAT exams to gauge their knowledge, and interactive experiences like an anatomy organ system visualizer to make learning hands-on. Creating this platform was a blast, and seeing it help so many of my students has been one of the most rewarding experiences of my career.",
    purpose: "Teaching various subjects through interactive content.",
    galleryImages: [
      "https://andrewslearningimage-bucket.s3.amazonaws.com/media/ALClogo.png"
    ],
    stack: "React, Django",
    database: "PostgreSQL",
    hosting: "Personal Ubuntu Server and AWS",
    link_to_github: null,
    link_to_website: "https://andrewslearning.com"
  },
  "mentee-college": {
    title: "Mentee College",
    description: "A comprehensive portal for college administration and resources.",
    blogpost: null,
    purpose: "Streamline college management and provide resources to students.",
    galleryImages: [
      "https://andrewslearningimage-bucket.s3.us-east-1.amazonaws.com/MenteeCollegeimage.png"
    ],
    stack: "React, Node.js",
    database: "MySQL",
    hosting: "Heroku",
    link_to_github: "https://github.com/yourgithub/project2",
    link_to_website: "https://github.com/yourgithub/project2"
  },
  "formulator": {
    title: "Formulator",
    description: "A tool for creating and managing formulations.",
    blogpost: null,
    purpose: "Assist users in developing and managing product formulations.",
    galleryImages: [
      "https://andrewslearningimage-bucket.s3.us-east-1.amazonaws.com/Formulator+.png"
    ],
    stack: "React, Flask",
    database: "SQLite",
    hosting: "AWS EC2",
    link_to_github: "https://github.com/yourgithub/project2",
    link_to_website: "https://github.com/yourgithub/project2"
  },
  "dna-translation": {
    title: "DNA Translation Application",
    description: "A bioinformatics tool to translate DNA sequences.",
    blogpost: null,
    purpose: "Help researchers and students understand DNA translation.",
    galleryImages: [
      "https://andrewslearningimage-bucket.s3.us-east-1.amazonaws.com/DNA_translator.png"
    ],
    stack: "JavaScript, HTML, CSS",
    database: "None",
    hosting: "GitHub Pages",
    link: "https://github.com/yourgithub/project2"
  },
  "langchain-ai": {
    title: "LangChain AI agents",
    description: "An AI-based application utilizing LangChain technology.",
    blogpost: null,
    purpose: "Demonstrate AI capabilities in natural language processing.",
    galleryImages: [
      "https://miro.medium.com/v2/resize:fit:1400/1*1L5F1Vd-lEeUQItztlbkhw.png"
    ],
    stack: "Python, LangChain, FastAPI",
    database: "MongoDB",
    hosting: "AWS Lambda",
    link_to_github: "https://github.com/yourgithub/project2",
    link_to_website: "https://github.com/yourgithub/project2"
  },
  "dht11-sensor": {
    title: "DHT11 CCS811 Sensor with Capacitance",
    description: "A sensor project integrating DHT11 and CCS811 for environmental monitoring.",
    blogpost: null,
    purpose: "Monitor environmental parameters like temperature, humidity, and air quality.",
    galleryImages: [
      "https://cdn-shop.adafruit.com/970x728/3269-04.jpg"
    ],
    stack: "Arduino, Python",
    database: "InfluxDB",
    hosting: "Raspberry Pi",
    link_to_github: "https://github.com/yourgithub/project2",
    link_to_website: "https://github.com/yourgithub/project2"
  },
  "password-generator": {
    title: "Random Password Generator Application",
    description: "A simple tool to generate random secure passwords.",
    blogpost: null,
    purpose: "Help users create strong, random passwords for enhanced security.",
    galleryImages: [
      "https://thumbs.dreamstime.com/b/lock-key-icon-355812.jpg"
    ],
    stack: "JavaScript, HTML, CSS",
    database: "None",
    hosting: "Netlify",
    link_to_github: "https://github.com/yourgithub/project2",
    link_to_website: "https://github.com/yourgithub/project2"
  }
};

const ProjectDetails = () => {
    const { id } = useParams();
    const project = projectData[id];
    const [selectedImage, setSelectedImage] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);
    const navigate = useNavigate();
  
    const openModal = (image) => {
      setSelectedImage(image);
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setSelectedImage(null);
      setModalOpen(false);
    };
  
    if (!project) {
      return <p>Project not found</p>;
    }
  
    return (
      <div className="project-details">
        <button className="back-button" onClick={() => navigate(-1)}>Back</button>
        <h2>{project.title}</h2>
        <p><strong>Description:</strong> {project.description}</p>
        <p><strong>Purpose:</strong> {project.purpose}</p>
        {project.link_to_website && (
          <a href={project.link_to_website}><strong>Link to Website!</strong></a>
        )}
        {project.link_to_github && (
          <a href={project.link_to_github}><strong>Link to Source Code!</strong></a>
        )}
        <p><strong>Making the Project:</strong> {project.blogpost}</p>
  
        {project.galleryImages && project.galleryImages.length > 0 && (
          <div className="gallery">
            <h3>Gallery</h3>
            <div className="gallery-images">
              {project.galleryImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${project.title} gallery ${index + 1}`}
                  onClick={() => openModal(image)}
                  className="gallery-thumbnail"
                />
              ))}
            </div>
          </div>
        )}
  
        <p><strong>Stack:</strong> {project.stack}</p>
        <p><strong>Database:</strong> {project.database}</p>
        <p><strong>Hosting Service:</strong> {project.hosting}</p>
  
        {project.link && (
          <p>
            <strong>Learn More:</strong> <a href={project.link} target="_blank" rel="noopener noreferrer">{project.link}</a>
          </p>
        )}
  
        {/* Modal for image */}
        <ImageModal image={selectedImage} isOpen={isModalOpen} onClose={closeModal} />
      </div>
    );
  };
  
  export default ProjectDetails;
  
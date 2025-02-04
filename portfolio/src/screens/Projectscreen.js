
import React, { useState } from "react";

import { useParams, useNavigate } from "react-router-dom";

import './ProjectDetails.css';
import ImageModal from "../components/ImageModal.js";
const projectData = {
  "world-map": {
    title: "World Map Application",
    description: "A map application showcasing global locations.",
    blogpost:" The World Map Application was an exciting project for me, inspired in part by my younger sibling who was taking AP Government in high school. Seeing them learn about different countries, borders, and global affairs got me thinking about how cool it would be to create an interactive map that brings these concepts to life. I wanted users to not just see the world but to explore it, zoom in on borders, and learn interesting facts about each country. One of the challenges I encountered was finding good APIs for country data. There aren't many comprehensive options out there, so I’m now considering building my own public API to make it easier for others to access detailed information about countries. Imagine being able to quickly find out the GDP, capital, languages spoken, and more with a simple request! I'm excited to keep expanding this project, so stay tuned for more updates!",
    purpose: "Educational tool to teach geography.",
    galleryImages: [
      "https://andrewslearningimage-bucket.s3.us-east-1.amazonaws.com/worldmap.png",
      "https://andrewslearningimage-bucket.s3.us-east-1.amazonaws.com/greenland.png"
    ],
    youtubeVideos: [
        null
      ],
    stack: "React, Django",
    database: "Postgres 16",
    hosting: "Personal Ubuntu Server and AWS",
    link_to_github: "https://github.com/andrewbrowne3/Worldmap.git",
    link_to_website: "https://worldmap.andrewslearning.com"
  },
  "learning-center": {
    title: "Andrew's Learning Center",
    description: "Interactive learning platform.",
    blogpost: "Andrew's Learning Center was inspired by my time tutoring throughout grad school. I noticed patterns in how students learned challenging material, and I realized that to make concepts stick, learning had to be more engaging—almost game-like. That's where the idea came from! Inspired by the CAT exam from the nursing world, I decided to build my own CAT examination system with a custom algorithm, alongside a suite of tools that would make learning not just effective but enjoyable. This isn’t just a single app—it’s a super app! It features an AI chatbot to assist students, CAT exams to gauge their knowledge, and interactive experiences like an anatomy organ system visualizer to make learning hands-on. Creating this platform was a blast, and seeing it help so many of my students has been one of the most rewarding experiences of my career.",
    purpose: "Teaching various subjects through interactive content.",
    galleryImages: [
      "https://andrewslearningimage-bucket.s3.amazonaws.com/media/ALClogo.png",
"https://andrewslearningimage-bucket.s3.us-east-1.amazonaws.com/anatomy+app.png",
"https://andrewslearningimage-bucket.s3.us-east-1.amazonaws.com/bohr_model.png",
"https://andrewslearningimage-bucket.s3.us-east-1.amazonaws.com/Cat+APP.png",
"https://andrewslearningimage-bucket.s3.us-east-1.amazonaws.com/cat_app.png"    ],
    stack: "React, Django",
    database: "PostgreSQL",
    hosting: "Personal Ubuntu Server and AWS",
    link_to_github: null,
    link_to_website: "https://andrewslearning.com"
  },
  "mentee-college": {
    title: "Mentee College",
    description: "A comprehensive portal for college administration and resources.",
    blogpost: "Mentee College was a project that started as a simple landing page, but it quickly turned into so much more! I integrated a Stripe payment system for tuition, added PayPal support for application fees, and even built a WebSocket connection with a Django backend to power a chatbot. This chatbot guides potential students and helps them navigate the site effortlessly. Plus, I set up Moodle for their online classes, making the entire student experience more streamlined. It was one of the most enjoyable projects I've worked on, as I got to see the direct impact of my work in helping a company grow and thrive. It also pushed me to grow technically, handling multiple integrations and challenges.",
    purpose: "Streamline college management and provide resources to students.",
    galleryImages: [
      "https://andrewslearningimage-bucket.s3.us-east-1.amazonaws.com/MenteeCollegeimage.png",
      "https://andrewslearningimage-bucket.s3.us-east-1.amazonaws.com/Application.png",
      "https://andrewslearningimage-bucket.s3.us-east-1.amazonaws.com/chatbot.png",
    "https://andrewslearningimage-bucket.s3.us-east-1.amazonaws.com/jwt+login+system.png",
"https://andrewslearningimage-bucket.s3.us-east-1.amazonaws.com/mentee+college+gallery.png",
"https://andrewslearningimage-bucket.s3.us-east-1.amazonaws.com/Moodle.png",
"https://andrewslearningimage-bucket.s3.us-east-1.amazonaws.com/Moodle+login.png",
"https://andrewslearningimage-bucket.s3.us-east-1.amazonaws.com/paypal+payment+system.png",
"https://andrewslearningimage-bucket.s3.us-east-1.amazonaws.com/stripe.png"
    ],
    youtubeVideos: [
        null
      ],
    stack: "HTML, JS, CSS, Django",
    database: "SQLITE",
    hosting: "AWS, Personal Ubuntu Server",
    link_to_github: null,
    link_to_website: "https://menteecollege.com"
  },
  "formulator": {
    title: "Formulation App",
    description: "A tool for creating and managing formulations.",
    blogpost: "The Formulations App was a rewarding project, designed for a small startup focused on hair care products. The goal was to create a robust, yet simple application that could keep their hair care formulations organized and easily accessible from anywhere. I built the app with a solid PostgreSQL database at its core, ensuring all data was securely stored and easily manageable. Using a well-structured API and implementing full CRUD functionality, users could effortlessly add, update, and manage formulations, ingredients, and product details. This project was all about making sure the startup had a reliable tool to streamline their workflow, enabling them to focus on innovation without worrying about data management. It’s a great example of how standard tech solutions can provide immense value when tailored to a business’s unique needs.",
    purpose: "Assist users in developing and managing product formulations.",
    galleryImages: [
      "https://andrewslearningimage-bucket.s3.us-east-1.amazonaws.com/Formulator+.png"
    ],
    youtubeVideos: [
        null
      ],
    stack: "React, Django",
    database: "SQLite",
    hosting: "AWS",
    link_to_github: null,
    link_to_website: null
  },
  "dna-translation": {
    title: "DNA Translation Application",
    description: "A bioinformatics tool to translate DNA sequences.",
    blogpost: "The DNA Translation App was a fascinating project that combined biology with technology, providing an easy-to-use tool for translating DNA sequences into proteins and even performing reverse translation. Built using PyQt6, the app features a sleek, intuitive interface that helps researchers, students, and enthusiasts navigate the complexities of molecular biology. In essence, DNA translation is the process of converting a sequence of nucleotides (DNA) into a chain of amino acids, which then folds into functional proteins. The app allows users to input DNA sequences and see their corresponding protein sequences, simulating the natural process of how genetic information is expressed. What makes this app even more versatile is its ability to reverse translate — taking a protein sequence and providing possible DNA sequences that could code for it. This is especially useful for researchers working on gene synthesis or studying protein structures. Developing this app was not only a technical challenge but also a great way to bring a complex biological process to life through a user-friendly platform. It bridges the gap between data and understanding, making molecular biology more approachable for everyone.",
    purpose: "Help researchers and students understand DNA translation.",
    galleryImages: [
      "https://andrewslearningimage-bucket.s3.us-east-1.amazonaws.com/DNA_translator.png"
    ],
    youtubeVideos: [
        "https://www.youtube.com/embed/XlW7PjUj12E?si=P4BAWH30ggqKwamw"
      ],
    stack: "PyQt6",
    database: "None",
    hosting: "None, Executable file",
  },
  "langchain-ai": {
    title: "LangChain AI agents",
    description: "An AI-based application utilizing LangChain technology.",
    blogpost: "The LangChain AI agent I developed uses OpenAI's language models to answer questions about research papers, with the added ability to search the web for real-time information. It leverages embeddings—a technique that’s like teaching the AI to understand context by converting text into vectors, or numerical representations. These vectors allow the model to quickly grasp relationships and nuances, making its answers more accurate and relevant. A standout feature is the AI's ability to use defined functions, enabling it to perform specific tasks automatically. This opens up possibilities for automation, where the AI can seamlessly switch between information retrieval, data processing, and other custom functions based on the task. This project showcases the future of AI agents: smarter, more context-aware, and capable of streamlining work across various fields by understanding, connecting, and acting on information effortlessly.",
    purpose: "Demonstrate AI capabilities in natural language processing.",
    galleryImages: [
      "https://miro.medium.com/v2/resize:fit:1400/1*1L5F1Vd-lEeUQItztlbkhw.png"
    ],
    youtubeVideos: [
"https://www.youtube.com/embed/W7IzKvZ4ctk?si=TJrxS3nxdFS-yIQL"],
    stack: "Python, LangChain",
    database: "None",
    hosting: "None, Executable",
    link_to_github: null,
    link_to_website: null
  },
  "dht11-sensor": {
    title: "DHT11 CCS811 Sensor with Capacitance",
    description: "A sensor project integrating DHT11 and CCS811 for environmental monitoring.",
    blogpost: "This project was a delightful blend of tech and creativity, designed specifically for my wife, who is a cosmetic chemist. The goal was to create a device that could monitor environmental parameters like temperature, humidity, and air quality using the DHT11 and CCS811 sensors, combined with a capacitance touch sensor for easy interaction. It was fascinating to see how these microcontrollers could bring together multiple functionalities into a compact, user-friendly device. Working with microcontrollers is always a fun challenge; it brings out the tinkerer in me. I enjoyed figuring out how to integrate the sensors, streamline data collection, and create a smooth interface. This project not only provided valuable data for my wife’s work but also let me dive deep into the world of IoT (Internet of Things) by connecting all these elements seamlessly. It’s projects like this that remind me how much fun it is to blend hardware and software to build something useful and cool.",
    purpose: "Monitor environmental parameters like temperature, humidity, and air quality.",
    galleryImages: [
      "https://cdn-shop.adafruit.com/970x728/3269-04.jpg"
    ],
    youtubeVideos: [
        "https://www.youtube.com/embed/8BPCiXDuZns?si=q_V9NyK7mWj5m36Z"
      ],
    stack: "ESP32WROOM, cpp",
    database: null,
    hosting: null,
    link_to_github: null,
    link_to_website: null
  },
  "password-generator": {
    title: "Random Password Generator Application",
    description: "A simple tool to generate random secure passwords.",
    blogpost: "This was a quick but purposeful project inspired by seeing multiple people get their accounts hacked due to weak or reused passwords. I wanted to build a simple tool that could help users generate strong, random passwords to enhance their online security. It’s straightforward, easy to use, and does exactly what it needs to—provide secure passwords that can prevent unauthorized access and keep accounts safe.",
    purpose: "Help users create strong, random passwords for enhanced security.",
    galleryImages: [
      "https://thumbs.dreamstime.com/b/lock-key-icon-355812.jpg",
"https://andrewslearningimage-bucket.s3.us-east-1.amazonaws.com/password+generator.png"   
 ],
    youtubeVideos: [
        null
      ],
    stack: "Python",
    database: "None",
    hosting: "None",
    link_to_github: null,
    link_to_website: null
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
          <a href={project.link_to_website}><strong><h3>Click here to see the Website!</h3></strong></a>
        )}
        <br/>
        {project.link_to_github && (
          <a href={project.link_to_github}><strong>Link to Source Code!</strong></a>
        )}
        <p><strong>Making the Project:</strong> {project.blogpost}</p>
  
        {project.youtubeVideos && Array.isArray(project.youtubeVideos) && project.youtubeVideos[0] && (
  <div className="video-gallery">
    <h3>Project Videos</h3>
    <div className="video-container">
      <iframe
        width="560"
        height="315"
        src={project.youtubeVideos[0]}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  </div>
)}
  
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
  
import React from "react";
import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard";
import ScienceCard from "../components/ScienceCard";
import Footer from "../components/Footer";
import Introduction from "../components/Introduction";
import "./PortfolioScreen.css";

const PortfolioScreen = () => {
  const projects = [
    {
      id: "world-map",
      title: "World Map Application",
      description: "A map application showcasing global locations.",
      imageUrl: "https://andrewslearningimage-bucket.s3.us-east-1.amazonaws.com/worldmap.png",
    },
    {
      id: "learning-center",
      title: "Andrew's Learning Center",
      description: "Interactive learning platform.",
      imageUrl: "https://andrewslearningimage-bucket.s3.amazonaws.com/media/ALClogo.png",
    },
    {
      id: "mentee-college",
      title: "Mentee College",
      description: "A comprehensive portal for college administration and resources.",
      imageUrl: "https://andrewslearningimage-bucket.s3.us-east-1.amazonaws.com/MenteeCollegeimage.png",
    },
    {
      id: "formulator",
      title: "Formulator",
      description: "A tool for creating and managing formulations.",
      imageUrl: "https://andrewslearningimage-bucket.s3.us-east-1.amazonaws.com/Formulator+.png",
    },
    {
      id: "dna-translation",
      title: "DNA Translation Application",
      description: "A bioinformatics tool to translate DNA sequences.",
      imageUrl: "https://andrewslearningimage-bucket.s3.us-east-1.amazonaws.com/DNA_translator.png",
    },
    {
      id: "langchain-ai",
      title: "LangChain AI agents",
      description: "An AI-based application utilizing LangChain technology.",
      imageUrl: "https://miro.medium.com/v2/resize:fit:1400/1*1L5F1Vd-lEeUQItztlbkhw.png",
    },
    {
      id: "dht11-sensor",
      title: "DHT11 CCS811 Sensor with Capacitance",
      description: "A sensor project integrating DHT11 and CCS811 for environmental monitoring.",
      imageUrl: "https://cdn-shop.adafruit.com/970x728/3269-04.jpg",
    },
    {
      id: "password-generator",
      title: "Random Password Generator Application",
      description: "A simple tool to generate random secure passwords.",
      imageUrl: "https://thumbs.dreamstime.com/b/lock-key-icon-355812.jpg",
    },
  ];

  return (
    <>
      <Header />
      <Introduction />
      <main>
        <section id="projects">
          <center><h2>Interesting Coding Projects</h2></center>
          <div className="cards-container">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
              />
            ))}
          </div>
        </section>
        <section id="science">
          <center><h2>Scientific Work (Manuscripts being submitted for publication coming soon)</h2></center>
          <div className="cards-container">
            <ScienceCard 
              title="Research Paper 1" 
              description="Brief description of your scientific work or research." 
              link="https://linktoreserachpaper1.com"
            />
            <ScienceCard 
              title="Research Paper 2" 
              description="Details about an experiment or scientific achievement." 
              link="https://linktoexperiment.com"
            />
            <ScienceCard 
              title="Research Paper 3" 
              description="Further exploration of scientific topics and findings." 
              link="https://linktoexperiment.com"
            />
          </div>
        </section> 
      </main>
      <Footer />
    </>
  );
};

export default PortfolioScreen;

import React from "react";
import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard";
import ScienceCard from "../components/ScienceCard";
import Footer from "../components/Footer";
import Introduction from "../components/Introduction";

const PortfolioScreen = () => {
  return (
    <>
      <Header />
      <Introduction />
      <main>
        <section id="projects">
          <center><h2>Interesting Coding Projects</h2></center>
          <div className="cards-container">
            <ProjectCard 
              title="World Map Application" 
              description="Brief description of coding project 2." 
              link="https://github.com/yourgithub/project2"
              imageUrl="https://example.com/world-map.jpg"
            />
            <ProjectCard 
              title="Andrew's Learning Center" 
              description="Brief description of coding project 1." 
              link="https://andrewslearning.com"
              imageUrl="https://andrewslearningimage-bucket.s3.amazonaws.com/media/ALClogo.png"
            />
            <ProjectCard 
              title="Mentee College" 
              description="Brief description of coding project 2." 
              link="https://menteecollege.com"
              imageUrl="https://andrewslearningimage-bucket.s3.us-east-1.amazonaws.com/MenteeCollegeimage.png"
            />
            <ProjectCard 
              title="Formulator" 
              description="Brief description of coding project 2." 
              link="https://github.com/yourgithub/project2"
              imageUrl="https://example.com/formulator.jpg"
            />
            <ProjectCard 
              title="DNA Translation Application" 
              description="Brief description of coding project 2." 
              link="https://github.com/yourgithub/project2"
              imageUrl="https://example.com/dna-translation.jpg"
            />
            <ProjectCard 
              title="LangChain AI agents" 
              description="Brief description of coding project 2." 
              link="https://github.com/yourgithub/project2"
              imageUrl="https://example.com/langchain.jpg"
            />
            <ProjectCard 
              title="DHT11 CCS811 Sensor with Capacitance" 
              description="Brief description of coding project 2." 
              link="https://github.com/yourgithub/project2"
              imageUrl="https://example.com/sensor.jpg"
            />
            <ProjectCard 
              title="Random Password Generator Application" 
              description="Brief description of coding project 2." 
              link="https://github.com/yourgithub/project2"
              imageUrl="https://example.com/password-generator.jpg"
            />
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
              title="Research Paper 2" 
              description="Details about an experiment or scientific achievement." 
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

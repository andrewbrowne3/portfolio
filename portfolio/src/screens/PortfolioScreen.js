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
          <h2>Coding Projects</h2>
          <div className="cards-container">
            <ProjectCard 
              title="Andrew's Learning Center" 
              description="Brief description of coding project 1." 
              link="https://andrewslearning.com"
            />
            <ProjectCard 
              title="Mentee College" 
              description="Brief description of coding project 2." 
              link="https://menteecollege.com"
            />
                <ProjectCard 
              title="Formulator" 
              description="Brief description of coding project 2." 
              link="https://github.com/yourgithub/project2"
            />
                <ProjectCard 
              title="DNA Translation Application" 
              description="Brief description of coding project 2." 
              link="https://github.com/yourgithub/project2"
            />
              <ProjectCard 
              title="LangChain AI agents" 
              description="Brief description of coding project 2." 
              link="https://github.com/yourgithub/project2"
            />
            <ProjectCard 
              title="DHT11 CCS811 Sensor with Capicitance" 
              description="Brief description of coding project 2." 
              link="https://github.com/yourgithub/project2"
            />
            <ProjectCard 
              title="Random Password Generator Application" 
              description="Brief description of coding project 2." 
              link="https://github.com/yourgithub/project2"
            />
            {/* Add more ProjectCards as needed */}
          </div>
        </section>
     
        <section id="science">
          <h2>Scientific Work (Manuscripts being submitted for publication coming soon)</h2>
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
 
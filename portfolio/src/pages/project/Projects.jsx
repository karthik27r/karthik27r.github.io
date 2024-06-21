import React, { useState } from "react";
import Card from "../../components/card/Card";
import Container from "../../components/contentContainer/ContentContainer";
import { projects } from "./ProjectList";
import { AiOutlineProject } from 'react-icons/ai';
import { BentoGrid, BentoGridItem } from "../../components/bento-grid/BentoGrid";

import './ProjectStyle.css'

function Projects(initPath) {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    console.log('Project Card ' + selectedProject)
    setSelectedProject(project);
  };

  const heading = (
    <>
      <AiOutlineProject className="icon" />
      <h1 className="title">Projects</h1>
    </>
  );

  return (
    <Container heading={heading} variantType={initPath === '/' ? 'upToDown' : 'downToUp'}>

    {selectedProject && (
            <div className="overlay">
            <Card 
                info={selectedProject}  
                onClose={() => setSelectedProject(null)}
            />
            </div>
        )}
    
      <p>I have worked on a variety of projects over the years; some of them as a hobby and some as a proof of concept. Here are some of the projects that I have worked on.</p>
      <BentoGrid className="mt-2">
        {projects.map((info, index) => (
          <BentoGridItem 
            key={index} 
            title={info.title} 
            description={info.body}
            onClick={() => handleProjectClick(info)}
          />
        ))}
      </BentoGrid>
    </Container>
  );
}

export default Projects;

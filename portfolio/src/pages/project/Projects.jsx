import React, { useState } from "react";
import Card from "../../components/card/Card";
import Container from "../../components/contentContainer/ContentContainer";
import { projects } from "./ProjectList";
import { AiOutlineProject } from 'react-icons/ai';
import { BentoGrid, BentoGridItem } from "../../components/bento-grid/BentoGrid";

import './ProjectStyle.css'

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const heading = (
    <>
      <AiOutlineProject className="icon" />
      <h1 className="title">[Work In Progress] Projects</h1>
    </>
  );

  return (
    <Container heading={heading} variantType='upToDown'>
      {selectedProject && (
        <div className="overlay">
          <div className="project-detail-component">
            <div className="close-button" onClick={() => setSelectedProject(null)}>X</div>
            <div className="project-detail-content">
              <Card
                info={selectedProject}
                overlay={true}
                onClose={() => setSelectedProject(null)}
              />
            </div>
          </div>
        </div>
      )}

      <p>I have worked on a variety of projects over the years; some of them as a hobby and some as a proof of concept. Here are some of the projects that I have worked on.</p>
      <BentoGrid className="mt-2">
  {projects.map((project, index) => (
    <BentoGridItem
      key={index}
      title={project.title}
      description={project.body}
      tags={project.tags}
      carousel={project.carousel}
      onClick={() => handleProjectClick(project)}
    />
  ))}
</BentoGrid>
    </Container>
  );
}

export default Projects;

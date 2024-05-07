import React from "react";

import Card from "../../components/card/Card";
import Container from "../../components/contentContainer/ContentContainer";

import { projects } from "./ProjectList";

function Projects() {
    return (
      <Container>
        <h1>Projects</h1>
        <a>These are some of the projects i have worked on recently...</a>
        <div className="project-list">
          {projects.map((info, index) => (
            <Card key={index} info={info} />
          ))}
        </div>
      </Container>
    );
  }
export default Projects;
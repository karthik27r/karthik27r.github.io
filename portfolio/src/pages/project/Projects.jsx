import React from "react";
import Card from "../../components/card/Card";
import Container from "../../components/contentContainer/ContentContainer";
import { projects } from "./ProjectList";

import { AiOutlineProject } from 'react-icons/ai';

function Projects() {
  const heading = (
    <>
        <AiOutlineProject className="icon" />
        <h1 className="title">Projects</h1>
    </>
);

    return (
        <Container heading={heading}>
            <p>These are some of the projects I have worked on recently...</p>
            <div className="project-list">
                {projects.map((info, index) => (
                    <Card key={index} info={info} />
                ))}
            </div>
        </Container>
    );
}

export default Projects;

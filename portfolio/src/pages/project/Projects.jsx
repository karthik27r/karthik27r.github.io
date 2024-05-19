import React from "react";
import Card from "../../components/card/Card";
import Container from "../../components/contentContainer/ContentContainer";
import { projects } from "./ProjectList";

import { AiOutlineProject } from 'react-icons/ai';

function Projects( initPath ) {
  const heading = (
    <>
        <AiOutlineProject className="icon" />
        <h1 className="title">Projects</h1>
    </>
);

    return (
        <Container heading={heading} variantType={initPath = '/' ? 'upToDown' : 'downToUp'}>
            <p>I have worked on a variety of projects over the years; some of them as a hobby and some as a proof of concept. Here are some of the projects that I have worked on.</p>
            <div className="project-list">
                {projects.map((info, index) => (
                    <Card key={index} info={info} />
                ))}
            </div>
        </Container>
    );
}

export default Projects;

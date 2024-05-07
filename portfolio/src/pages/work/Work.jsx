import React from "react";
import { experience } from "./WorkExperience";
import { PiSuitcase } from 'react-icons/pi';
import Card from "../../components/card/Card";
import Container from "../../components/contentContainer/ContentContainer";

function Work() {
    const heading = (
        <>
            <PiSuitcase className="icon"/>
            <h1 className="title">Work Experience</h1>
        </>
    );

    return (
        <Container heading={heading}>
            <p>These are some of the projects I have worked on recently...</p>
            <div className="project-list">
                {experience.map((info, index) => (
                    <Card key={index} info={info} />
                ))}
            </div>
        </Container>
    );
}

export default Work;

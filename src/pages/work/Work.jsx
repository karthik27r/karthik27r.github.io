import React from "react";
import { experience } from "./WorkExperience";
import { PiSuitcase } from 'react-icons/pi';
import Card from "../../components/card/Card";
import Container from "../../components/contentContainer/ContentContainer";

function Work(initPath) {
    const heading = (
        <>
            <PiSuitcase className="icon"/>
            <h1 className="title"> [Work In Progress] Work Experience</h1>
        </>
    );

    return (
        <Container heading={heading} variantType={initPath = '/' ? 'upToDown' : 'downToUp'}>
            <p>I have 1 Year Professional Experience</p>
            <div className="project-list">
                {experience.map((info, index) => (
                    <Card key={index} info={info} />
                ))}
            </div>
        </Container>
    );
}

export default Work;

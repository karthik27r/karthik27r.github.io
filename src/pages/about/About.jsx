import {useEffect, useState, useRef }from "react";
import Container from "../../components/contentContainer/ContentContainer.jsx";


import "./AboutStyle.css";

import myPhoto from "../../assets/photos/my-photo.jpg";


import { getMousePosition } from '../../scripts/mousePosition';

function About() {

  const cardRef = useRef();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mousePos = getMousePosition(cardRef, e, 'pixel');
      if (mousePos) {
        setMousePosition({ x: mousePos.x, y: mousePos.y });
      }
    };

    if (cardRef.current) {
      cardRef.current.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (cardRef.current) {
        cardRef.current.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [cardRef.current]);


  return (
    <Container variantType="upToDown">
      <div className="about-page">
        <div className="profile-section">
          <img src={myPhoto} alt="Profile" className="profile-picture" />
          <div className="info-section" >
          <h1 className="name">Karthik R</h1>
          <h2 className="title">Software Engineering @ Novigo</h2>
          </div>
        </div>
        <div className="bio-section">
          <p>"Work In Progress ⚡"</p>
        </div>
        <div className="links-section">
          <a href="https://github.com/karthik27r" className="social-link">
            <i className="fab fa-github"></i> GitHub
          </a>
          <a href="https://www.linkedin.com/in/karthik27r/" className="social-link">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </div>
      </div>
    </Container>
  );
}

export default About;

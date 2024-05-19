import React from "react";
import Container from "../../components/contentContainer/ContentContainer.jsx";
import './HomeStyle.css';

function Home({ finalFont, initPath }) {
  const variantType = initPath === '/' ? 'homeUp' : 'homeDown';
  return (
    <Container variantType={variantType}>
      <div className="home">
        <a className="intro-left">Hi 👋 I'm </a>
        <h1 className="main-title" style={{ fontFamily: finalFont }}>
          Karthik R
        </h1>
        <a className="intro-right">a Software Engineer</a>
      </div>
    </Container>
  );
}

export default Home;

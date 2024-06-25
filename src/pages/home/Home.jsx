import React from "react";
import Container from "../../components/contentContainer/ContentContainer.jsx";
import { FlipTextEffect } from "../../components/textEffect/FlipTextEffect.jsx";
import './HomeStyle.css';

function WaveEmoji() {
  return (
    <picture>
      <source srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.webp" type="image/webp" />
      <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.gif" alt="👋" width="32" height="32" />
    </picture>
  );
}

const words  = ["a Software Engineer", "a Web Developer", "a Designer" ,"a Tech Enthusiast"];

function Home({ finalFont, initPath }) {
  const variantType = initPath === '/' ? 'homeUp' : 'homeDown';
  return (
    <Container variantType={variantType}>
      <div className="home">
        <a className="intro-left">Hi  <WaveEmoji style="margin-right:" />  I'm </a>
        <h1 className="main-title" style={{ fontFamily: finalFont }}>
          Karthik R
        </h1>
        <div className="intro-right">
          <FlipTextEffect words={words}/>
        </div>
      </div>
    </Container>
  );
}

export default Home;

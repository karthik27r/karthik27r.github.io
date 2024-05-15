import React, { useEffect } from "react";
import Container from "../../components/contentContainer/ContentContainer.jsx";
import './HomeStyle.css';

function Home(){
    useEffect(() => {
        randomizeFont();
    }, []);

    function randomizeFont() {
        const fonts = ['CoffeeHealing', 'AnandaBlack', 'AnkhSanctuary', 'CreamySugar', 'MonainnRegular', 'Queensides', 'Supercharge'];
        const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
        document.querySelector('.main-title').style.fontFamily = randomFont;
    }

    return(
        <>
          <Container>
            <h1 className="main-title">
              Karthik R             
            </h1>
          </Container>
        </>
    );
}

export default Home;

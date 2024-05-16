import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';

import Navbar from './components/navbar/navbarContainer/NavbarContainer';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Projects from './pages/project/Projects';
import Work from './pages/work/Work';
import SplashScreen from './pages/splashScreen/SplashScreen';
import { splashScreenAnimation } from './scripts/splashScreenAnimation';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [finalFont, setFinalFont] = useState("CoffeeHealing");

  useEffect(() => {
    splashScreenAnimation().then((shouldShow) => {
      setShowSplash(shouldShow);
      if (!shouldShow) {
        // SplashScreen animation finished, set final font
        const randomFont = getRandomFont();
        setFinalFont(randomFont);
      }
    });
  }, []);

  function getRandomFont() {
    const fonts = [
      "CoffeeHealing",
      "AnandaBlack",
      "AnkhSanctuary",
      "CreamySugar",
      "MonainnRegular",
      "Queensides",
      "Supercharge",
    ];
    return fonts[Math.floor(Math.random() * fonts.length)];
  }

  return (
    <Router>
      {showSplash ? (
        <SplashScreen text="Karthik R" showSplash={showSplash} setFinalFont={setFinalFont} />
      ) : (
        <Layout finalFont={finalFont} />
      )}
    </Router>
  );
}

function Layout({ finalFont }) {
  const location = useLocation();

  return (
    <>
      <Navbar currentPath={location.pathname} />
      <Routes>
        <Route path="/" element={<Home finalFont={finalFont} />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </>
  );
}

export default App;


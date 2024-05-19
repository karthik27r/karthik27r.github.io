import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import { AnimatePresence } from "framer-motion";

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
    });
  }, []);

  return (
    <Router>
      {showSplash ? (
        <SplashScreen text="Karthik R" showSplash={showSplash} onFontChange={(font) => setFinalFont(font)} />
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
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home finalFont={finalFont} initPath = {location.pathname} />} />
          <Route path="/about" element={<About initPath = {location.pathname} />} />
          <Route path="/projects" element={<Projects initPath = {location.pathname} />} />
          <Route path="/work" element={<Work />} initPath = {location.pathname}/>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;

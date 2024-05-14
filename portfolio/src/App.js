import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

  useEffect(() => {
    splashScreenAnimation().then((shouldShow) => {
      setShowSplash(shouldShow);
    });
  }, []);

  return (
    <Router>
      {showSplash ? (
        <SplashScreen text="In Progress..." showSplash = 'true' />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/work" element={<Work />} />
          </Routes>
        </>
      )}
    </Router>
  );
}

export default App;
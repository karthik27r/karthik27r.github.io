import logo from './assets/logo/logo-purple.png';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/navbar/navbarContainer/NavbarContainer';
import Container from './components/contentContainer/ContentContainer';

import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Navbar/>
      <Container/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;

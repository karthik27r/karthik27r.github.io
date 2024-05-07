import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/navbar/navbarContainer/NavbarContainer';

import Home from './pages/home/Home';
import About from './pages/about/About';
import Projects from './pages/project/Projects';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element = {<Projects/>}/>
      </Routes>
    </Router>
  );
}

export default App;

import React from "react";
import Container from "../../components/contentContainer/ContentContainer.jsx";
import './HomeStyle.css';
import { motion } from "framer-motion";

function Home({ finalFont }) {
  return (
    <Container>
      <motion.h1
        className="main-title"
        style={{ fontFamily: finalFont }}
        initial={{ x: "-50%", y: "-50%" }} 
        animate={{ x: "-50%", y: "-70%" }} 
        transition={{ duration: 0.5 }}
      >
        Karthik R
      </motion.h1>
    </Container>
  );
}

export default Home;

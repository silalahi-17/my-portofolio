import React from "react";
import { motion } from "framer-motion";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect"; // ✅ Import yang benar
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      style={{
        backgroundColor: "white",
        color: "dark",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        flexDirection: "column",
      }}
    >
      <Container>
        <h1 className="display-3 fw-bold text-dark">Hi, I'm Agus Pangondian Silalahi</h1>

        {/* Efek Teks Bergerak */}
        <h3 className="text-dark mt-3">
          <Typewriter
            options={{
              strings: ["Web Developer", "Software Engineer", "Tech Enthusiast"],
              autoStart: true,
              loop: true,
            }}
          />
        </h3>

        {/* Tombol CTA */}
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link to="/about">
            <Button variant="outline-success" size="lg" className="mt-3">
              Learn More
            </Button>
          </Link>
        </motion.div>

        {/* Bagian Social Media */}
        <div className="mt-4 gap-3 d-flex justify-content-center">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-dark">
            <FaGithub size={30} />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-dark">
            <FaLinkedin size={30} />
          </a>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="text-dark">
            <FaInstagram size={30} />
          </a>
        </div>
      </Container>
    </motion.div>
  );
};

export default Home;

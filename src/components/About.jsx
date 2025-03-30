import React from "react";
import { motion } from "framer-motion";
import { Container, Button, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import profilePic from "../assets/Profile.png";

const About = () => {
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
        fontFamily: "sans-serif"
      }}
    >
      <Container>
        <Row className="align-items-center">
          {/* Bagian Kiri: Foto Profil */}
          <Col md={5} className="text-center mb-4">
            <Image src={profilePic} alt="Profile" className="img-fluid Profile" style={{width: "800px", height: "450px", borderRadius: "12px", boxShadow: "2px 5px 15px rgba(0, 0, 0, 0.15)"}} />
          </Col>

          {/* Bagian Kanan: Deskripsi */}
          <Col md={7} className="text-dark">
            <h1 className="fw-bold text-success">About Me</h1>
            <h3 className="mt-3">
              <Typewriter
                options={{
                  strings: ["Web Developer", "Software Engineer", "Tech Enthusiast"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h3>
            <p className="mt-3">
              I am Agus Pangondian Silalahi, a passionate developer with experience in web and software development.
              I love creating high-quality applications that solve real-world problems.
            </p>

            {/* Tombol Contact */}
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link to="/contact">
                <Button variant="outline-success" size="lg" className="mt-3">
                  Contact Me
                </Button>
              </Link>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default About;

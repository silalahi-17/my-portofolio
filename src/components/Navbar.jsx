import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHome, FaUser, FaEnvelope, FaTools, FaProjectDiagram } from "react-icons/fa";

const CustomNavbar = () => {
  return (
    <motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
      <Navbar bg="dark" variant="dark" expand="lg" className="shadow-lg py-3">
        <Container>
          <Navbar.Brand as={Link} to="/" className="brand fw-bold text-primary">
            Agus Pangondian Silalahi
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <motion.div initial={{ y: -20 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
            <Navbar.Collapse id="navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/" className="text-light mx-2">
                  <FaHome className="me-1" /> Home
                </Nav.Link>
                <Nav.Link as={Link} to="/about" className="text-light mx-2">
                  <FaUser className="me-1" /> About
                </Nav.Link>
                <Nav.Link as={Link} to="/contact" className="text-light mx-2">
                  <FaEnvelope className="me-1" /> Contact
                </Nav.Link>
                <Nav.Link as={Link} to="/skills" className="text-light mx-2">
                  <FaTools className="me-1" /> Skills
                </Nav.Link>
                <Nav.Link as={Link} to="/projects" className="text-light mx-2">
                  <FaProjectDiagram className="me-1" /> Projects
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </motion.div>
        </Container>
      </Navbar>
    </motion.nav>
  );
};

export default CustomNavbar;

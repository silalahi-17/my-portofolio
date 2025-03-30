import React, { useState } from "react";
import { motion } from "framer-motion";
import "./styling/contact.css"; // Impor CSS

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Pesan dari ${formData.name} telah dikirim!`);
  };

  return (
    <motion.section
      id="contact"
      className="contact-container"
      initial={{ opacity: 0, y: 50 }} // Efek muncul dari bawah
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.h2 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        Contact Us
      </motion.h2>
      
      <p>Silakan hubungi kami melalui formulir di bawah ini:</p>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <label htmlFor="name">Nama:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

        <label htmlFor="message">Pesan:</label>
        <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required />

        <motion.button 
          type="submit"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Kirim
        </motion.button>
      </motion.form>
    </motion.section>
  );
};

export default Contact;

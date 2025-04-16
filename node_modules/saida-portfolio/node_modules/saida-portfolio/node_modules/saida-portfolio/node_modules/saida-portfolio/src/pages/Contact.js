import React from "react";
import "./Contact.css";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <div className="container-contact">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Tilt glareEnable={true} glareMaxOpacity={0.2} scale={1.04} tiltMaxAngleX={12} tiltMaxAngleY={12}>
          <div className="card-cnt-glass-horizontal">
            <motion.div
              className="card-header-cnt-glass"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h4>📬 Get In Touch</h4>
              <p>I'd love to hear from you!</p>
            </motion.div>

            <div className="card-body-cnt-glass-horizontal">
              <motion.section
                className="contact-info"
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <h5><FaEnvelope /> Email</h5>
                <p>
                  <a href="mailto:saida27stifi@gmail.com" className="contact-link">
                    saida27stifi@gmail.com
                  </a>
                </p>
              </motion.section>

              <motion.section
                className="contact-info"
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <h5><FaLinkedin /> LinkedIn</h5>
                <p>
                  <a
                    href="https://www.linkedin.com/in/saida-stifi-30222128b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    Saida Stifi
                  </a>
                </p>
              </motion.section>
            </div>
          </div>
        </Tilt>
      </motion.div>
    </div>
  );
}

export default Contact;

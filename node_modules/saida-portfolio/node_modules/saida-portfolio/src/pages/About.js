import React from "react";
import { motion } from "framer-motion";
import "./About.css";

function About() {
  return (
    <div className="container-about mt-5 mb-5">
      <motion.div
        className="card-about shadow-lg border-0"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="card-header-about text-white py-3 px-4">
          <motion.h2
            className="mb-0"
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
          >
            👩‍💻 About Me
          </motion.h2>
        </div>

        <motion.div
          className="card-body-about p-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
        >
          {/* Block 1: Introduction */}
          <motion.div
            className="about-section-block mb-4 p-4"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
          >
            <motion.p className="lead">
              Hello! I'm <strong>Saida Stifi</strong>, a passionate <strong>software developer</strong> with a solid background in programming
              and a growing expertise in <strong>data science</strong>. I'm driven by a deep desire to build intelligent, impactful, and user-focused solutions.
            </motion.p>
          </motion.div>

          {/* Block 2: My Journey */}
          <motion.div
            className="about-section-block mb-4 p-4"
            initial={{ opacity: 0, x: -150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 1, ease: "easeOut" }}
          >
            <motion.h4
              initial={{ opacity: 0, x: -150 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
            >
              🚀 My Journey
            </motion.h4>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 1.4, ease: "easeOut" }}
            >
              My journey began with a curiosity for how things work in tech, which led me to dive into software development.
              As I explored deeper, I realized the power of <strong>data</strong> in solving real-world problems. Now, I’m combining my development skills
              with data science to deliver smarter, data-driven results.
            </motion.p>
          </motion.div>

          {/* Block 3: Skills & Technologies */}
          <motion.div
            className="about-section-block mb-4 p-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 1.6, ease: "easeOut" }}
          >
            <motion.h4
              initial={{ opacity: 0, x: -150 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 1.8, ease: "easeOut" }}
            >
              🛠️ Skills & Technologies
            </motion.h4>
            <motion.ul
              className="list-unstyled"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 2, ease: "easeOut" }}
            >
              <li><strong>Programming:</strong> JavaScript, Java, C, PHP, SQL</li>
              <li><strong>Web Development:</strong> React.js, Node.js, Express.js</li>
              <li><strong>Tools & Frameworks:</strong> Bootstrap, Git, Laravel</li>
            </motion.ul>
          </motion.div>

          {/* Block 4: My Vision */}
          <motion.div
            className="about-section-block mb-4 p-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 2.2, ease: "easeOut" }}
          >
            <motion.h4
              initial={{ opacity: 0, x: -150 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 2.4, ease: "easeOut" }}
            >
              🎯 My Vision
            </motion.h4>
            <motion.p
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 2.6, ease: "easeOut" }}
            >
              I envision a future where <strong>AI and data</strong> are at the heart of every smart solution. My mission is to create software
              that not only solves problems but also helps businesses grow intelligently. Whether it's developing intuitive interfaces
              or building AI-powered systems, I'm committed to making a meaningful impact.
            </motion.p>
          </motion.div>

          {/* Block 5: Inspirational Quote */}
          <motion.div
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 2.8, ease: "easeOut" }}
          >
            <motion.h4 className="text-muted fst-italic">
              “Code is more than syntax — it's a tool for change.”
            </motion.h4>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default About;

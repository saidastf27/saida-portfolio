import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Home.css";

function Home() {
  const cards = [
    {
      to: "/about",
      title: "👩‍💻 About Me",
      description: "Get to know who I am, my journey, and my goals as a developer.",
      className: "bg-about",
    },
    {
      to: "/projects",
      title: "📁 Projects",
      description: "Explore a curated list of my recent web development projects.",
      className: "bg-projects",
    },
    {
      to: "/contact",
      title: "📬 Contact",
      description: "Reach out to me via email or LinkedIn. I’d love to connect!",
      className: "bg-contact",
    },
  ];

  return (
    <div className="home-container d-flex flex-column align-items-center justify-content-center px-3">
      <motion.div
        className="text-center mb-5"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="titre mb-3"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          👋 Welcome to Saida STIFI's Portfolio
        </motion.h1>
        <motion.p
          className="lead"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Full-Stack Developer | Passionate about clean code, elegant interfaces, and building smart web apps using React, Laravel & MySQL.
        </motion.p>
      </motion.div>

      <div className="row justify-content-center gx-4 gy-4">
        {cards.map((card, index) => (
          <div className="col-md-6 col-lg-5" key={index}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.3 + 0.3,
                duration: 1,
                ease: "easeOut",
              }}
              whileHover={{ scale: 1.05, rotate: 3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to={card.to} className={`home-card ${card.className} text-center`}>
                <div className="card-content">
                  <motion.h3
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                  >
                    {card.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.7 }}
                  >
                    {card.description}
                  </motion.p>
                </div>
              </Link>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

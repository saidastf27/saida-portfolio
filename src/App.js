// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Chatbot from "./components/Chatbot";
import chatbotImage from './images/chatbot2.png';

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { motion } from 'framer-motion';

function AppContent() {
  const location = useLocation();
  const showChatbotButton = location.pathname !== '/chatbot';

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/chatbot" element={<Chatbot />} />
        </Routes>
      </div>

      {showChatbotButton && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="chatbot-button"
        >
          <Link to="/chatbot" className="position-fixed bottom-3 right-3">
            <motion.img
              src={chatbotImage}
              className="btn-ai rounded-circle shadow-lg"
              alt="Click to chat with our chatbot"
              style={{ width: "60px", height: "60px", cursor: "pointer" }}
              whileHover={{
                scale: 1.2, // Agrandissement au survol
                rotate: 10, // Rotation légère
                transition: { type: "spring", stiffness: 300 }
              }}
              whileTap={{
                scale: 0.9, // Réduction lors du clic
                transition: { type: "spring", stiffness: 500 }
              }}
            />
          </Link>
        </motion.div>
      )}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

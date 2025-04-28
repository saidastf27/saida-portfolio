import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Navbar.css";
import { motion } from "framer-motion";

function Navbar() {
  const location = useLocation();
  const [isNavOpen, setIsNavOpen] = useState(false); // État pour ouvrir/fermer le menu

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];

  // Fonction pour fermer le menu après un clic
  const handleLinkClick = () => {
    if (window.innerWidth < 768) {
      setIsNavOpen(false); // Fermer le menu sur mobile après un clic
    }
  };

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="navbar navbar-expand-lg navbar-light sticky-top"
    >
      <div className="container">
        <motion.div
          className="navbar-brand fw-bold"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link className="navbar-brand" to="/">
            Saida STIFI
          </Link>
        </motion.div>

        {/* Menu Hamburger */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsNavOpen(!isNavOpen)} // Toggle menu
          aria-controls="navbarNav"
          aria-expanded={isNavOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu Items */}
        <div
          className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`} // Toggle collapse
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            {navLinks.map(({ path, label }, index) => {
              const isActive = location.pathname === path;
              return (
                <motion.li
                  className="nav-item"
                  key={path}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    className={`nav-link ${isActive ? "active-link" : ""}`}
                    to={path}
                    onClick={handleLinkClick} // Fermer le menu après le clic
                  >
                    {label}
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;

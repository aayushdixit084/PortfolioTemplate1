import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Dark mode toggle
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  // Navbar hide/show on scroll
  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShowNavbar(false); // scrolling down -> hide
    } else {
      setShowNavbar(true); // scrolling up -> show
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <>
      {/* Navbar */}
      <nav className={`navbar ${showNavbar ? "active" : "hidden"}`}>
        <a href="#home" className="logo">My Portfolio</a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Dark mode button fixed separately */}
      <button className="darkmode-btn" onClick={toggleDarkMode}>
        {darkMode ? "☀️" : "🌙"}
      </button>
    </>
  );
}

export default Navbar;

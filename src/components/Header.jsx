import React, { useState } from 'react';

const Header = ({ scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = () => {
    if (window.innerWidth <= 768) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`} id="header">
      <div className="logo">
        Sanjai<span>Devan</span>
      </div>
      <div className="right-group">
        <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`} id="navLinks">
          <a href="#about" onClick={handleNavClick}>About</a>
          <a href="#education" onClick={handleNavClick}>Education</a>
          <a href="#experience" onClick={handleNavClick}>Experience</a>
          <a href="#projects" onClick={handleNavClick}>Projects</a>
          <a href="#skills" onClick={handleNavClick}>Skills</a>
          <a href="#certifications" onClick={handleNavClick}>Certifications</a>
          <a href="#contact" onClick={handleNavClick}>Contact</a>
        </nav>
        <button 
          className="hamburger" 
          id="hamburgerBtn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>
    </header>
  );
};

export default Header;

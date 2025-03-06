import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
// Importing Each Section 
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectSection from "./components/ProjectSection";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";
import ContactSection from "./components/ContactSection";
// CSS File
import "./App.css";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="name">&lt; Sharvari Shinde /&gt;</div>
        {/* Hamburger for smaller screens */}
        <div className="hamburger" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
        <div className={`links ${isMenuOpen ? "active" : ""}`}>
          <a href="#heroSection" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#aboutSection" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#skillsection" onClick={() => setIsMenuOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
          <a href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</a>
          <a href="#education" onClick={() => setIsMenuOpen(false)}>Education</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </div>
      </nav>

    {/* Hero Section  */}
        <section className="hero" id="heroSection">
           <div className="hero-content">
             <h1>Hi,<span className="waving-hand">👋</span></h1>
             <h1>I'm Sharvari</h1>
             <h2>Frontend Developer</h2>
             <p>
               Passionate about creating intuitive and dynamic user experiences. Let’s build something amazing together!
             </p>
             <div class="hero-buttons">
               <button class="btn hire-me"onClick={() => window.location.href = "#contact"}>Hire Me</button>
               <a href="/ShindeSharvari_7020505673.pdf" download="Sharvari_Sunil_Shinde_Resume.pdf">
              <button className="btn resume">Download Resume <i className="bi bi-file-earmark-text"></i></button>
             </a>
             </div>
             <a href="https://github.com/shindesharvari" target="_blank" rel="noopener noreferrer">
            <button id="star" className="btn latest-works">Give Star on GitHub <i className="bi bi-star-fill"></i> </button>
          </a>
           </div>
           <div className="hero-image">
           <div className="rotating-circle"></div>
           <img src="/Images/Photo.png" alt="Sharvari" className="profile-pic" />
          </div>
         
        </section>

    
<AboutSection />
<SkillsSection />
<ProjectSection/>
<ExperienceSection/>
<EducationSection/>
<ContactSection/>

<footer className="footer">
      <p className="footer-bottom">© 2025 Sharvari Shinde. All rights reserved.</p>
    </footer>
  </div>
  );
};

export default App;




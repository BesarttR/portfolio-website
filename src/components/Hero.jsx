import React from 'react';
import './Hero.css';
import profileImage from '../assets/Besart6.png';

export default function Hero() {
  return (
    <div className="portfolio-container">
      <div className="portfolio-card">
        {/* Blue background */}
        <div className="blue-bg"></div>
        
        {/* Navigation */}
        <nav className="nav-container">
          <div 
            className="logo"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <img 
              src="/src/assets/logo.png" 
              alt="Logo"
            />
          </div>
          <div className="nav-links">
            <a href="#about" className="nav-link">About me</a>
            <a href="#projects" className="nav-link">My Projects</a>
          </div>
          <button
            className="nav-contact-btn"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              contactSection.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Contact me
          </button>
        </nav>

        {/* Hero Section */}
        <div className="hero-section">
          {/* LEFT */}
          <div className="hero-left">
            <p className="hero-subtitle">HELLO, I'M BESART RAMADANI</p>
            <h1 className="hero-title">Web Developer</h1>
            <p className="hero-description">
              I'm a Freelance UI/UX Designer and Developer based in Skopje, North Macedonia.
              I strive to build immersive and beautiful websites through clean code and
              user-focused design.
            </p>
            <button
              className="download-cv-btn"
              onClick={() => {
                window.open('/Besart_CV.pdf', '_blank');
              }}
            >
              Preview CV
            </button>
          </div>
          
          {/* RIGHT */}
          <div className="hero-right">
            <div className="image-container">
              <img
                src={profileImage}
                alt="Besart Ramadani"
                className="profile-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
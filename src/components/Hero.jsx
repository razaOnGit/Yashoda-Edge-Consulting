import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content fade-in">
        <div className="company-info">
          <h2 className="company-name">Yashoda Edge Consulting</h2>
          <p className="company-tagline">Recruitment & Education Consultant</p>
        </div>
        <h1>Delivering Innovative Workforce Solutions</h1>
        <p className="hero-subtitle">
          Specialized in permanent hiring, contract staffing, and bulk recruitment
          across multiple industries with pan-India reach
        </p>
        <div className="hero-cta">
          <a href="#contact-form-section" className="btn btn-primary">Get Started</a>
          <a href="#services" className="btn btn-secondary">Learn More</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
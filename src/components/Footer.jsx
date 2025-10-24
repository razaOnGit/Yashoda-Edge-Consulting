import React from 'react';

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src="/logo.svg" alt="Yashoda Edge Consulting" />
              <p>Empowering businesses with innovative solutions and strategic consulting.</p>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="#consulting">Business Consulting</a></li>
              <li><a href="#digital">Digital Transformation</a></li>
              <li><a href="#strategy">Strategic Planning</a></li>
              <li><a href="#analytics">Data Analytics</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Industries</h4>
            <ul>
              <li><a href="#healthcare">Healthcare</a></li>
              <li><a href="#finance">Finance</a></li>
              <li><a href="#retail">Retail</a></li>
              <li><a href="#manufacturing">Manufacturing</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <p>📧 yashodaconsultant699@gmail.com</p>
              <p>📞 +919625120724</p>
              <p>📞 +919006943294</p>
              <p>📍  Delhi</p>
            </div>
            <div className="social-links">
              <a href="#" aria-label="LinkedIn">💼</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="Facebook">📘</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Yashoda Edge Consulting. All rights reserved.</p>
          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
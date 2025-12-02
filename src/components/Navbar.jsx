import React, { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <img src="/Logo.jpeg" alt="Yashoda Edge Consulting" />
            </div>

            <div className={`nav-items ${isMenuOpen ? 'active' : ''}`}>
                <a href="#home">Home</a>
                <a href="#services">Services</a>
                <a href="#industries">Industries</a>
                <a href="#footer">About</a>
                <a href="#contact-form-section">Contact</a>
                <a href="#login" className="login-btn">Login</a>
            </div>

            <button className="mobile-toggle" onClick={toggleMenu}>
                <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </button>
        </nav>
    );
};

export default Navbar;
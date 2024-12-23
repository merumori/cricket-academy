import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './css/Navbar.css'; // Import custom CSS for Navbar
import logo from '../img/logo.png'; // Import the logo file directly
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark  p-3">
      <div className="container-fluid">
        {/* Logo */}
        <div className="navbar-logo d-flex align-items-center gap-2">
          <img src={logo} alt="Classic Cricket Academy Logo" className="logo" />
          <span>Arjun Cricket Academy</span>
        </div>

        {/* Hamburger menu (mobile view) */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleMenuToggle}
          aria-expanded={isMenuOpen ? 'true' : 'false'}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links */}
        <div
          className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-link">Services</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/gallery" className="nav-link">Gallery</Link>
            </li>
            <li className="nav-item">
              <Link to="/videos" className="nav-link">Videos</Link>
            </li>
            <li className="nav-item">
              <Link to="/testimonials" className="nav-link">Testimonials</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

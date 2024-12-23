import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap
import './css/TopBar.css'; // Optional for custom styles
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter, FaPinterest, FaYoutube, FaMapMarkerAlt, FaUser } from 'react-icons/fa';

const TopBar = () => {
  return (
    <div className="top-bar py-2">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Left Section */}
        <div className="top-bar-left d-flex align-items-center">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon me-3"><FaFacebook /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon me-3"><FaLinkedin /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon me-3"><FaInstagram /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon me-3"><FaTwitter /></a>
          <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="social-icon me-3"><FaPinterest /></a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon me-3"><FaYoutube /></a>
        </div>

        {/* Right Section */}
        <div className="top-bar-right d-flex align-items-center">
          <div className="contact-info d-none d-md-flex me-3">
            <a href="tel:+918888888888" className="contact-item me-3">+91-8888888888</a>
            <a href="mailto:websupport@justdial.com" className="contact-item">websupport@justdial.com</a>
          </div>
          <span className="location me-3"><FaMapMarkerAlt /> Malad West</span>
          <span><FaUser /> <a href="/login" className="me-2">Log In</a>|<a href="/signup" className="ms-2">Sign Up</a></span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

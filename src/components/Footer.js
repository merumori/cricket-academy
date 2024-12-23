import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Footer.css"; // Add custom styles if needed
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter, FaPinterest, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer  text-light py-4">
      <div className="container">
        <div className="row">
          {/* Useful Links Section */}
          <div className="col-md-4">
            <h5 className="fw-bold">USEFUL LINKS</h5>
            <ul className="list-unstyled">
              <li><a href="#privacy" className="text-light text-decoration-none">Privacy Policy</a></li>
              <li><a href="#services" className="text-light text-decoration-none">Services</a></li>
              <li><a href="#gallery" className="text-light text-decoration-none">Gallery</a></li>
              <li><a href="#testimonials" className="text-light text-decoration-none">Testimonials</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-md-4">
            <h5 className="fw-bold">CONTACT</h5>
            <address>
              Palm Court Bldg M, 501/B, 5th Floor, <br />
              New Link Road, Beside Goregaon Sports Complex, <br />
              Malad West, Mumbai, 400064, Maharashtra<br />
              <a href="tel:+918888888888" className="text-light text-decoration-none">+91- 8888888888</a><br />
              <a href="mailto:websupport@justdial.com" className="text-light text-decoration-none">websupport@justdial.com</a>
            </address>
          </div>

          {/* Connect Section */}
          <div className="col-md-4">
            <h5 className="fw-bold">CONNECT</h5>
             <div className="top-bar-left d-flex align-items-center">
                      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon me-3"><FaFacebook /></a>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon me-3"><FaLinkedin /></a>
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon me-3"><FaInstagram /></a>
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon me-3"><FaTwitter /></a>
                      <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="social-icon me-3"><FaPinterest /></a>
                      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon me-3"><FaYoutube /></a>
                    </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="text-center bg mt-3">
          <p className="mb-0">
            © Copyrights 2023-2024. Classic Cricket Academy. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

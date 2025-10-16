import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>ADM Fire & Security Specialists</h2>
          <p>Protecting homes & businesses with precision and reliability.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/service-fire">Fire Alarms</a></li>
            <li><a href="/service-cctv">CCTV</a></li>
            <li><a href="/service-intruder">Intruder Alarms</a></li>
            <li><a href="/service-lighting">Emergency Lighting</a></li>
            <li><a href="/service-signage">Signage</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-socials">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 ADM Fire & Security Specialists. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

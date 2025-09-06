import React from "react";
import "./Footer.css";
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import {Link} from "react-router-dom";
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id='footer'>
      <div className="footer-inner">
        <div className="footer-brand">
          <h2 className="brand-logo">ResuMateAI</h2>
          <p className="brand-desc">
            Smarter resumes, stronger answers, faster hiring — all with AI.
          </p>
        </div>

        <div className="footer-columns">
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><Link to="/#features">Why ResuMateAI</Link></li>
              <li><a href="/about">About Us</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><FaEnvelope /> support@resumate.ai</li>
              <li><FaPhoneAlt /> +91 9058145299</li>
              <li><FaMapMarkerAlt /> Remote, India</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="https://x.com/home"><FaTwitter /></a>
              <a href="https://www.linkedin.com/in/ujjwal-gupta-52a466336/"><FaLinkedin /></a>
              <a href="https://github.com/ujjwal2205"><FaGithub /></a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {year} ResuMateAI. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© 2025 Manibhushan Kumar. All rights reserved.</p>

        <div className="footer-social">
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

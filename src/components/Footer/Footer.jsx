import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Aditi Joshi | Made with  {"<3"}</p>
      <div className="social-links">
        <a href="https://github.com/1603Aditi" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/aditi-joshi-200416aj?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
    
      </div>
    </footer>
  );
};

export default Footer;

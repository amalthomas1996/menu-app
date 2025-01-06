import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        © 2024 Deepnetsoft Solutions. All rights reserved.
      </div>
      <div className="footer-right">
        <a href="#" className="footer-link">
          Terms & Conditions
        </a>
        <a href="#" className="footer-link">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;

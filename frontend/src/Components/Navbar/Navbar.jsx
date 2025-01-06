import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("HOME");

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
        <div className="company-name">
          <span className="deep">DEEP</span>
          <span className="highlight">NET</span>
          <br />
          <span className="soft">SOFT</span>
        </div>
      </div>
      <div
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li
          className={activeLink === "HOME" ? "active" : ""}
          onClick={() => handleLinkClick("HOME")}
        >
          HOME
        </li>
        <li
          className={activeLink === "MENU" ? "active" : ""}
          onClick={() => handleLinkClick("MENU")}
        >
          MENU
        </li>
        <li
          className={activeLink === "MAKE A RESERVATION" ? "active" : ""}
          onClick={() => handleLinkClick("MAKE A RESERVATION")}
        >
          MAKE A RESERVATION
        </li>
        <li
          className={activeLink === "CONTACT US" ? "active" : ""}
          onClick={() => handleLinkClick("CONTACT US")}
        >
          CONTACT US
        </li>
        <li
          className={activeLink === "ADMIN" ? "active" : ""}
          onClick={() => handleLinkClick("ADMIN")}
        >
          <Link to="/admin">ADMIN</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

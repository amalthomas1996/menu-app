import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="logo">
        <span>DEEP</span> <span className="highlight">NET</span> SOFT
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li>HOME</li>
        <li className="active">MENU</li>
        <li>MAKE A RESERVATION</li>
        <li>CONTACT US</li>
      </ul>
    </nav>
  );
};

export default Navbar;

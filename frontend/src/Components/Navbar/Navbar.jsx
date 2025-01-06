import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
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
      <ul className="nav-links">
        <li>HOME</li>
        <li className="active">MENU</li>
        <li>MAKE A RESERVATION</li>
        <li>CONTACT US</li>
        <Link to="/admin">ADMIN</Link>
      </ul>
    </nav>
  );
};

export default Navbar;

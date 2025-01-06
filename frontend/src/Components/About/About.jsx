import React from "react";
import "./About.css";
import telephone from "../../assets/telephone.png";
import mail from "../../assets/mail.png";
import logo from "../../assets/logo.png";
import fb from "../../assets/fb.png";
import twit from "../../assets/twi.png";
import you from "../../assets/you.png";
import insta from "../../assets/insta.png";
import loc from "../../assets/loc.png";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-card">
        <h3 className="about-title">CONNECT WITH US</h3>
        <div className="about-info">
          <div className="about-item">
            <img src={telephone} alt="Phone" className="about-icon" />
            <span>+91 9567843340</span>
          </div>
          <div className="about-item">
            <img src={mail} alt="Email" className="about-icon" />
            <span>info@deepnetsoft.com</span>
          </div>
        </div>
      </div>

      <div className="about-center-card">
        <img src={logo} alt="Logo" className="about-logo" />
        <h2 className="about-company">
          <span className="deep">DEEP</span> NET
          <span className="soft"> SOFT</span>
        </h2>
        <div className="about-socials">
          <img src={fb} alt="Facebook" />
          <img src={twit} alt="Twitter" />
          <img src={you} alt="YouTube" />
          <img src={insta} alt="Instagram" />
        </div>
      </div>

      <div className="about-card">
        <h3 className="about-title">FIND US</h3>
        <div className="about-info">
          <div className="about-item">
            <img src={loc} alt="Location" className="about-icon" />
            <span>
              First floor, Geo Infopark,<br></br> Infopark EXPY, Kakkanad
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

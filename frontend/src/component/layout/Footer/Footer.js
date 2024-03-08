import React from "react";
import "./Footer.css";
import instagram from '../../../images/instagram2.png'
import linkedin from '../../../images/linkedin2.png'
import youtube from '../../../images/youtube2.png'
import Logo from "../../../images/Logo.jpeg"


const Footer = () => {
  return (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-section logo">
        <img src={Logo} alt="Logo" className="footer-logo" />
        <div>&copy; 2024 The Inspo Room. All rights reserved.</div>
      </div>
      <div className="footer-section social-links">
        <a href="https://www.linkedin.com/company/u-i-interiors-pvt-ltd/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="LinkedIn" className="social-icon" /></a>
        <a href="https://www.instagram.com/uiplasia?igsh=czF3aGh0cjFhNjUz" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="YouTube" className="social-icon" /></a>
        <a href="https://youtube.com/@uiplasiaofficial?feature=shared" target="_blank" rel="noopener noreferrer"><img src={youtube} alt="Instagram" className="social-icon" /></a>
      </div>
    </div>
  </footer>
  );
};

export default Footer;

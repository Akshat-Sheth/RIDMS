import React from "react";
import "./Footer.css";
import logo from "../../../images/Logo.jpeg";


const Footer = () => {
  return (
    <footer id="footer">

      <div className="midFooter">
        <img src={logo} alt=""/>
        <p>&copy;Copyrights 2024</p>
        <p>address</p>
      </div>

    </footer>
  );
};

export default Footer;

import React from "react";
// import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/Logo.jpeg";
import { useHistory } from "react-router-dom";

const Header = () => {

  const history = useHistory();

  const navigateToLogin = () => {
    history.push('/login')
  }
  const navigateToHome = () => {
    history.push('/')
  }

  return (
    <>
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <img onClick={navigateToHome}  src={logo} alt="Logo" />
      </div>
      {/* Navbar options */}
      <ul className="navbar-options">
        <li><a href="about">About Us</a></li>
        <li><a href="products">Products</a></li>
        <li><a href="contact">Contact Us</a></li>
      </ul>
      {/* Login and Register buttons */}
      <div className="navbar-buttons">
        <button onClick={navigateToLogin} >Login</button>
        <button onClick={navigateToLogin} >Register</button>
      </div>
    </nav>
    </>
  );
};

export default Header;

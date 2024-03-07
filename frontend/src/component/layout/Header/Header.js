import React, { useEffect } from "react";
// import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/Logo.jpeg";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {

  const history = useHistory();
  const login = useSelector((state) => state.user.isAuthenticated)

  useEffect(()=>{
    console.log("value of login",login)
  })  

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
        <li><a href="projects">Projects</a></li>
        <li><a href="contact">Contact Us</a></li>
      </ul>
      {/* Login and Register buttons */}
      {!login && 
      <div className="navbar-buttons">
        <button onClick={navigateToLogin} >Login</button>
        <button onClick={navigateToLogin} >Register</button>
      </div>
}
    </nav>
    </>
  );
};

export default Header;

import React from 'react'
import '../styles/Header.css'
import logo from '../images/Logo.jpeg'

function Header() {
  return (
    <nav className="navbar">
    <div className="navbar-logo">
      <img src={logo} alt="Logo" />
    </div>
    <ul className="navbar-options">
      <li><a href="#about">About Us</a></li>
      <li><a href="#products">Products</a></li>
      <li><a href="#contact">Contact Us</a></li>
    </ul>
    <div className="navbar-buttons">
      <button className="login-btn">Login</button>
      <button className="register-btn">Register</button>
    </div>
  </nav>
  )
}

export default Header
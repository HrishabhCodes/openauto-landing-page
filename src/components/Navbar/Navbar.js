import React from "react";
import Logo from "../../assets/OpenAuto_Logo.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="logo" src={Logo} alt="OpenAuto-Logo" />
      <button className="btn contact-btn">Contact</button>
    </div>
  );
};

export default Navbar;

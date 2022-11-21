import React from "react";
import Logo from "../../assets/OpenAuto_Logo.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Logo} alt="OpenAuto-Logo" />
      <p>Copyright @ 2022 OpenAuto. All Rights Reserved</p>
    </div>
  );
};

export default Footer;

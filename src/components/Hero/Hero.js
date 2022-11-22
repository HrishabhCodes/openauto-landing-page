import React from "react";
import HeroImage from "../../assets/Hero_image.png";
import Car from "../../assets/Car.png";
import Arrow from "../../assets/ArrowRight_icon.svg";
import Apple from "../../assets/Apple_icon.svg";
import PlayStore from "../../assets/GooglePlay_icon.svg";
import Facebook from "../../assets/Facebook_icon.svg";
import Twitter from "../../assets/twitter_icon.svg";
import LinkedIn from "../../assets/Linkedin_icon.svg";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-text">
        <h1>
          Delivered to <span>Your Door.</span>
        </h1>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old.
        </p>
      </div>
      <div className="hero-image">
        <img className="hero-banner" src={HeroImage} alt="hero-banner" />
        <img src={Car} className="car-image" alt="car" />
      </div>

      <div className="download-app">
        <div className="store app-store">
          <img src={Apple} alt="apple" />
          <p>Available on the App Store</p>
          <img src={Arrow} alt="arrow" />
        </div>
        <div className="store play-store">
          <img src={PlayStore} alt="play-store" />
          <p>Available on the Play Store</p>
          <img src={Arrow} alt="arrow" />
        </div>
      </div>

      <div className="social-links">
        <img src={Facebook} alt="facebook" />
        <img src={Twitter} alt="twitter" />
        <img src={LinkedIn} alt="linkedin" />
      </div>
    </div>
  );
};

export default Hero;

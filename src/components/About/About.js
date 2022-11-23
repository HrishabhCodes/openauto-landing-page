import React, { useRef, useState } from "react";
import CheckMark from "../../assets/CheckMark.svg";
import ScrollDown from "../../assets/ArrowBottom_icon.svg";
import "./About.css";

const About = () => {
  const [hideAbout, sethideAbout] = useState(true);
  const formEnd = useRef();

  const handleAbout = () => {
    formEnd.current.scrollIntoView();
    sethideAbout(false);
  };

  return (
    <>
      <hr ref={formEnd} />

      {hideAbout && (
        <div onClick={handleAbout} className="scroll-down">
          <p>About OpenAuto</p>
          <img className="scroll-img" src={ScrollDown} alt="scroll-down" />
        </div>
      )}

      {!hideAbout ? (
        <div className="about-section">
          <div
            style={{ display: hideAbout ? "none" : "block" }}
            className="box"
          ></div>

          <div className="about-container">
            <h1>
              About <span>OpenAuto</span>
            </h1>
            <div className="about-text">
              <p className="text1">
                Our mission is to make auto repair and maintenance accessible to
                every vehicle owner at a click of a button.
              </p>
              <div className="keypoints">
                <p className="point">
                  <img src={CheckMark} alt="checkmark" />
                  No more gambling on where you should take your car.
                </p>
                <p className="point">
                  <img src={CheckMark} alt="checkmark" />
                  No more endless piles of paper records.
                </p>
                <p className="point">
                  <img src={CheckMark} alt="checkmark" />
                  No more endless phone calls for updates on your vehicle.
                </p>
              </div>
              <p className="text2">
                We bring everything you require to be on top of your vehicle
                needs to one place, your phone.
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default About;

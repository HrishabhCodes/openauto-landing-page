import React, { useRef } from "react";
import "./Form.css";
import ScrollDown from "../../assets/ArrowBottom_icon.svg";

const Form = () => {
  const formEnd = useRef();

  // const scrollToAbout = () => {
  //   formEnd.current.scrollIntoView();
  // };

  return (
    <div className="form-section">
      <div className="form-container">
        <div className="form-text">
          <h1>
            We're All <span>Ears!</span>
          </h1>
          <p>
            If you have trouble managing your order, or want to talk to one of
            our expert technicians, we are here for you!
          </p>
        </div>
        <form action="#" className="form">
          <div className="form-group">
            <label>Name</label>
            <input name="name" type="text" className="form-control name" />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input name="phone" type="number" className="form-control phone" />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              className="form-control message"
            ></textarea>
          </div>
          <button className="btn submit-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
      <div
        onClick={() => formEnd.current.scrollIntoView()}
        className="scroll-down"
      >
        <p>About OpenAuto</p>
        <img className="scroll-img" src={ScrollDown} alt="scroll-down" />
      </div>
      <hr ref={formEnd} />
    </div>
  );
};

export default Form;

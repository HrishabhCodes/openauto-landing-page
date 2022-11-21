import React from "react";
import "./Form.css";
import ScrollDown from "../../assets/ArrowBottom_icon.svg";

const Form = () => {
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
          <div class="form-group">
            <label>Name</label>
            <input name="name" type="text" class="form-control name" />
          </div>
          <div class="form-group">
            <label>Phone</label>
            <input name="phone" type="number" class="form-control phone" />
          </div>
          <div class="form-group">
            <label>Message</label>
            <textarea name="message" class="form-control message"></textarea>
          </div>
          <button className="btn submit-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
      <div className="scroll-down">
        <p>About OpenAuto</p>
        <img className="scroll-img" src={ScrollDown} alt="scroll-down" />
      </div>
    </div>
  );
};

export default Form;

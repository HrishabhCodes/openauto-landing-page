import React from "react";
import "./Features.css";
import LiveTrackIcon from "../../assets/LiveTrack_icon.svg";
import PickupIcon from "../../assets/Pickup_icon.svg";
import PaymentIcon from "../../assets/Payment_icon.svg";
import DiscountIcon from "../../assets/Discount.svg";

const Features = () => {
  return (
    <div className="features-section">
      <div className="feature-container live-tracking">
        <div className="feature">
          <div className="feature-head">
            <img src={LiveTrackIcon} alt="live-tracking" />
            <h5>
              Track <span>Live</span>
            </h5>
          </div>
          <p>Track your car service real-time and get status updates</p>
        </div>
      </div>

      <div className="feature-container pick-ups">
        <div className="feature">
          <div className="feature-head">
            <img src={PickupIcon} alt="pick-ups" />
            <h5>
              Easy <span>Pick-ups</span>
            </h5>
          </div>
          <p>Book your preferred slot for pick- up of your vehicle</p>
        </div>
      </div>

      <div className="feature-container payment">
        <div className="feature">
          <div className="feature-head">
            <img src={PaymentIcon} alt="payment" />
            <h5>
              Payment <span>online</span>
            </h5>
          </div>
          <p>We offer flexible payment options for your convenience</p>
        </div>
      </div>

      <div className="feature-container discounts">
        <div className="feature">
          <div className="feature-head">
            <img src={DiscountIcon} alt="discounts" />
            <h5>
              <span>Discounts</span>
            </h5>
          </div>
          <p>Earn exciting rewards on your referrals, share now!</p>
        </div>
      </div>
    </div>
  );
};

export default Features;

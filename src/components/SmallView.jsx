import React from "react";
import smallGirlImg from "../images/hero-mobile.jpg";
import Logo from "./Logo";
import Heading from "./Heading";
import EmailInput from "./EmailInput";

function SmallView() {
  return (
    <div className="s-container">
      <div className="s-logo">
        <Logo />
      </div>
      <div className="s-image">
        <img src={smallGirlImg} alt="Model" />
      </div>
      <div className="s-content">
        <Heading text="WE'RE" class="top-heading" />
        <Heading text="COMING" class="bottom-heading" />
        <Heading text="SOON" class="bottom-heading" />
        <p>
          Hello fellow shoppers! We're currently building our new fashion store.
          Add your email below to stay up-to-date with announcements and our
          launch deals.
        </p>
        <EmailInput />
      </div>
    </div>
  );
}

export default SmallView;

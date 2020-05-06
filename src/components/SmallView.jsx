import React from "react";
import smallGirlImg from "../images/hero-mobile.jpg";
import Logo from "./Logo";

function SmallView() {
  return (
    <div className="s-container">
      <div className="s-logo">
        <Logo />
      </div>
      <div className="s-image">
        <img src={smallGirlImg} alt="Model" />
      </div>
      <div className="content"></div>
    </div>
  );
}

export default SmallView;

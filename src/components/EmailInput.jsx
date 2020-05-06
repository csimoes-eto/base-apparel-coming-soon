import React, { useState } from "react";
import { ReactComponent as Arrow } from "../images/icon-arrow.svg";

function EmailInput() {
  return (
    <div className="email-form">
      <input type="email" placeholder="Email Address"></input>
      <button>
        <Arrow />
      </button>
    </div>
  );
}

export default EmailInput;

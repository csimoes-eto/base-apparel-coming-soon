import React from "react";
import { ReactComponent as Arrow } from "../images/icon-arrow.svg";

function EmailInput() {
  return (
    <span>
      <input type="email" placeholder="Email Address"></input>
      <button>
        <Arrow />
      </button>
    </span>
  );
}

export default EmailInput;

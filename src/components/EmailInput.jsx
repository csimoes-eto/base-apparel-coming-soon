import React, { useState } from "react";
import { ReactComponent as Arrow } from "../images/icon-arrow.svg";
import { ReactComponent as Error } from "../images/icon-error.svg";
import { validate } from "email-validator";

function EmailInput() {
  const [email, setEmail] = useState("");
  const [valid, setValid] = useState();
  const [showWarning, setShowWarning] = useState(false);

  function handleChange(event) {
    const { value } = event.target;
    setEmail(value);
    validate(email) ? setValid(true, setShowWarning(false)) : setValid(false);
  }

  function handleSubmission() {
    valid
      ? alert(
          "Your email, " + email + " was registered!",
          setEmail("", document.getElementsByTagName("Input")[0].blur())
        )
      : setShowWarning(true);
  }

  return (
    <div>
      <div className="email-form">
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={handleChange}
          onKeyDown={(event) => event.key === "Enter" && handleSubmission()}
          className={showWarning ? "warn-input" : ""}
        />
        {showWarning && <Error className="error-symbol" />}
        <button onClick={handleSubmission}>
          <Arrow />
        </button>
      </div>
      {showWarning && <small>Please provide a valid email</small>}
    </div>
  );
}

export default EmailInput;

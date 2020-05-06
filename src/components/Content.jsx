import React from "react";
import Logo from "./Logo";
import Heading from "./Heading";
import EmailInput from "./EmailInput";

function Content() {
  return (
    <div>
      <Logo />
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
  );
}

export default Content;

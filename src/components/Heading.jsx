import React from "react";

function Heading(props) {
  return <h1 className={props.class}>{props.text}</h1>;
}

export default Heading;

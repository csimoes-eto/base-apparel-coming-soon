import React from "react";
import Content from "./Content";
import girlImg from "../images/hero-desktop.jpg";

function App() {
  return (
    <div className="container">
      <div className="content">
        <Content />
      </div>
      <div className="image">
        <img src={girlImg} alt="Model" />
      </div>
    </div>
  );
}

export default App;

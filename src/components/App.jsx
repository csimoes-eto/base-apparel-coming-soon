import React from "react";
import Content from "./Content";
import SmallView from "./SmallView";
import girlImg from "../images/hero-desktop.jpg";

function App() {
  let width = window.innerWidth;

  if (width <= 375) {
    return <SmallView />;
  } else {
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
}

export default App;

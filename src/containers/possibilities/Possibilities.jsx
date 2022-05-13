import React from "react";
import "./possibilities.css";
import possibilityImage from "../../assets/possibility.png";

const Possibilities = () => {
  return (
    <div className="gpt3__possibilities section__padding" id="possibilities">
      <div className="gpt3__possibilities-image">
        <img src={possibilityImage} alt="possiblilities"></img>
      </div>
      <div className="gpt3__possibilities-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient-text">The possibi</h1>
      </div>
    </div>
  );
};

export default Possibilities;

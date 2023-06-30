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
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          facilis ducimus saepe, mollitia velit necessitatibus possimus quos
          accusamus doloribus magnam vel maiores delectus, sunt autem! Officia
          iure nobis ab maiores.
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
};

export default Possibilities;

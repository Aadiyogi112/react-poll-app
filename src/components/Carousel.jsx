/* eslint-disable react/prop-types */
import "../styles/Carousel.css";
import React from "react";
const Carousel = ({ step, currentStep, steps, handleOptionClick }) => {
  return (
    <div className="carousel">
      <div className="left-panel">
        <div style={{ padding: "30px" }}>
          <h1>{step.title}</h1>
        </div>
        <div className="navigation-dots">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === currentStep ? "active" : ""}`}
            ></div>
          ))}
        </div>
      </div>
      <div className="right-panel">
        <div className="options">
          {step.options.map((emoji, index) => (
            <div
              key={index}
              className="option"
              onClick={() => handleOptionClick(emoji)}
            >
              {emoji}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;

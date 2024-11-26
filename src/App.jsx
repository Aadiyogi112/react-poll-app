/* eslint-disable react/prop-types */
import { useState } from "react";
import "./App.css";  
import Summary from "./components/Summary";
import Carousel from "./components/Carousel"; 
import React from "react";

const App = () => {
  const [currentStep, setCurrentStep] = useState(0); 
  const [responses, setResponses] = useState([]); 

  const steps = [
    { title: "How was your week overall?", options: ["😊", "😐", "😞"] },
    { title: "Did you manage to meet your goals this week?", options: ["🎯", "❌", "🤷"] },
    { title: "How would you rate your work-life balance?", options: ["🏖️", "⚖️", "💼"] },
    { title: "How satisfied are you with your current workload?", options: ["😊", "😐", "😣"] },
    { title: "How well did you handle stress this week?", options: ["😌", "😕", "😱"] },
    { title: "Do you feel motivated to work next week?", options: ["🔥", "😌", "💤"] },
    { title: "Would you like to share any feedback for improvement?", options: ["🗣️", "🤐"] },
  ];

  const isSurveyComplete = currentStep >= steps.length;

  const handleOptionClick = (option) => {
    setResponses((prevResponses) => [...prevResponses, option]); 
    setCurrentStep((prevStep) => prevStep + 1); 
  };

  return (
    <div className="app">
      {isSurveyComplete ? (
        <Summary responses={responses} />
      ) : (
        <Carousel
          step={steps[currentStep]} 
          currentStep={currentStep} 
          steps={steps} 
          handleOptionClick={handleOptionClick} 
        />
      )}
    </div>
  );
};

export default App;

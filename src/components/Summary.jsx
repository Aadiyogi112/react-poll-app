/* eslint-disable react/prop-types */
import React from "react";

const Summary = ({ responses }) => {
    return (
      <div className="summary">
        <h2>Survey Summary</h2>
        <ul>
          {responses.map((response, index) => (
            <li key={index}>
              <strong>Question {index + 1}:</strong> {response}
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default Summary;

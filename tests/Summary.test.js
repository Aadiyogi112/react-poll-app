import { render, screen } from "@testing-library/react";
import Summary from "../src/components/Summary";
import React from 'react';


describe("Summary Component", () => {
  const mockResponses = ["😊", "💪", "🎯", "⚖️"];

  test("renders the summary of responses", () => {
    render(<Summary responses={mockResponses} />);

    mockResponses.forEach((response, index) => {
      expect(screen.getByText(`Question ${index + 1}:`)).toBeInTheDocument();
      expect(screen.getByText(response)).toBeInTheDocument();
    });
  });
});

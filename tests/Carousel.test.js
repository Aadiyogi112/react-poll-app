import { render, screen, fireEvent } from '@testing-library/react';
import Carousel from '../src/components/Carousel';
import React from 'react';

const mockSteps = [
  { title: 'How was your week overall?', options: ['😊', '😐', '😞'] },
  { title: 'How productive were you?', options: ['💪', '📊', '😴'] },
];

describe('Carousel Component', () => {
  const mockHandleOptionClick = jest.fn();

  test('renders the current question', () => {
    render(
      <Carousel
        step={mockSteps[0]}
        currentStep={0}
        steps={mockSteps}
        handleOptionClick={mockHandleOptionClick}
      />
    );

    expect(screen.getByText('How was your week overall?')).toBeInTheDocument();
  });

  test('calls handleOptionClick when an option is clicked', () => {
    render(
      <Carousel
        step={mockSteps[0]}
        currentStep={0}
        steps={mockSteps}
        handleOptionClick={mockHandleOptionClick}
      />
    );

    fireEvent.click(screen.getByText('😊'));
    expect(mockHandleOptionClick).toHaveBeenCalledWith('😊');
  });
});

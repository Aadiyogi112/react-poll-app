import { render, screen, fireEvent } from '@testing-library/react';
import App from '../src/App';
import React from 'react';

describe('App Component', () => {
  test('renders the first question', () => {
    render(<App />);
    expect(screen.getByText('How was your week overall?')).toBeInTheDocument();
  });

  test('navigates to the next question on option click', () => {
    render(<App />);

    fireEvent.click(screen.getByText('😊')); 
    expect(screen.getByText('Did you manage to meet your goals this week?')).toBeInTheDocument();
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './Latest';

test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/Unit test work flow/i);
    expect(linkElement).toBeInTheDocument();
  });
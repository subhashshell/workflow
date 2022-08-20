import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './New';

test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/Unit test work flow2/i);
    expect(linkElement).toBeInTheDocument();
  });
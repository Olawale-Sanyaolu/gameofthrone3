// Example test for Home component
// src/components/Home.test.js
import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';

test('renders welcome message', () => {
  const { getByText } = render(<Home />);
  const linkElement = getByText(/Welcome to the Game of Thrones application/i);
  expect(linkElement).toBeInTheDocument();
});
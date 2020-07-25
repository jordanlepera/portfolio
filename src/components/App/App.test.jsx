import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders nav link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Projec?ts/gi);
  expect(linkElement).toBeInTheDocument();
});

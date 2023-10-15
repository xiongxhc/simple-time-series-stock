import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const title = screen.getByText('Time Series Chart');
  expect(title).toBeInTheDocument();
});

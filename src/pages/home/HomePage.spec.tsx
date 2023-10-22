import React from 'react';
import {render} from '@testing-library/react';
import HomePage from './HomePage';
describe('HomePage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Render home page', () => {
    const homepage = render(<HomePage />);
    const title = homepage.getByText('Time Series Chart');
    expect(title).toBeInTheDocument();
  });
});
import React from 'react';
import HomePage from './HomePage';
import {Renderer} from '../../utils/testing/Render';
describe('HomePage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Render home page', () => {
    const homepage = new Renderer(<HomePage />).withQueryClientProvider().render();
    const title = homepage.getByText('Time Series Chart');
    expect(title).toBeInTheDocument();
  });
});
import React from 'react';
import HomePage from './HomePage';
import {Renderer} from '../../utils/testing/Render';
describe('HomePage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Render home page', async () => {
    const {getByText} = new Renderer(<HomePage />).withQueryClientProvider().render();
    expect(getByText('Time Series Chart')).toBeTruthy();
  });
});

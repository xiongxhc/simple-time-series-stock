import React from 'react';
import HomePage from './HomePage';
import {Renderer} from '../../utils/testing/Render';
describe('HomePage', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Render home page', async () => {
    const {getByText} = new Renderer(<HomePage />).withQueryClientProvider().render();
    expect(getByText('Time Series Chart')).toBeTruthy();
  });
});

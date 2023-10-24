import React from 'react';
import {Renderer} from '../../utils/testing/Render';
import {TimeSeriesChart} from './TimeSeriesChart';
import {PriceType} from '../../api/finnhub-api/stocks/StockConst';
import StocksQuery from '../../query/stocks/StocksQuery';
import {stockQueryMock} from './TimeSeriesChartMockData';
import {TestID} from '../../utils/testing/Constant';
describe('TimeSeriesChart', () => {
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

  const stocksQuery = new StocksQuery();
  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(stocksQuery, 'getStockPrice').mockReturnValue(stockQueryMock);
  });

  it('Render chart', async () => {
    const {getByTestId} = new Renderer(
      (
        <TimeSeriesChart
          symbol={'AAPL'}
          timeframe={'D'}
          from={new Date('2018-01-01T00:00:00.000Z').getTime() / 1000}
          to={new Date('2022-01-01T00:00:00.000Z').getTime() / 1000}
          priceType={PriceType.CLOSE}
        />
      ),
    )
      .withQueryClientProvider()
      .render();
    expect(getByTestId(TestID.TIME_SERIES_CHART)).toBeTruthy();
  });
});

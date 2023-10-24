import React from 'react';
import './HomePage.css';
import {Typography} from '@mui/material';
import {TimeSeriesChart} from '../../components/time-series-chart/TimeSeriesChart';
import StocksQuery from '../../query/stocks/StocksQuery';
import {PriceType} from '../../api/finnhub-api/stocks/StockConst';
import {StockSelectionTable} from '../../components/stock-selection-table/StockSelectionTable';

function HomePage() {
  const stocksQuery = new StocksQuery();
  const stockList = stocksQuery.getStockList();
  return (
    <div className="HomePage">
      <Typography
        sx={{backgroundColor: 'lightgray', position: 'absolute', margin: 2, padding: 2, borderRadius: 5}}
        variant="h3"
      >
        Time Series Chart
      </Typography>
      <div className="HomePage-header">
        <StockSelectionTable stockList={stockList ?? []} />
        <TimeSeriesChart
          symbol={'AAPL'}
          timeframe={'D'}
          from={new Date('2018-01-01T00:00:00.000Z').getTime() / 1000}
          to={new Date('2022-01-01T00:00:00.000Z').getTime() / 1000}
          priceType={PriceType.CLOSE}
        />
      </div>
    </div>
  );
}

export default HomePage;

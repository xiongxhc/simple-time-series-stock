import React from 'react';
import './HomePage.css';
import {Stack, Typography} from '@mui/material';
import {TimeSeriesChart} from '../../components/time-series-chart/TimeSeriesChart';
import StocksQuery from '../../query/stocks/StocksQuery';

function HomePage() {
  const stocksQuery = new StocksQuery();
  const symbols = stocksQuery.getStockSymbol();
  return (
    <div className="HomePage">
      <header className="HomePage-header">
        <Typography variant="h3">Time Series Chart</Typography>
        <Stack>{JSON.stringify(symbols)}</Stack>
        <TimeSeriesChart symbol={'AAPL'} timeframe={'D'} from={1691971459} to={1697971459} />
      </header>
    </div>
  );
}

export default HomePage;

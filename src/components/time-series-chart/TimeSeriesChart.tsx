import {Stack} from '@mui/material';
import React from 'react';
import {StockPriceRequestDto} from '../../api/finnhub-api/stocks/StockPriceDto';
import StocksQuery from '../../query/stocks/StocksQuery';

export const TimeSeriesChart = (props: StockPriceRequestDto) => {
  const {symbol, timeframe, from, to} = props;
  const stockApi = new StocksQuery();

  const data = stockApi.getStockPrice({symbol, timeframe, from, to});

  return <Stack>{JSON.stringify(data)}</Stack>;
};

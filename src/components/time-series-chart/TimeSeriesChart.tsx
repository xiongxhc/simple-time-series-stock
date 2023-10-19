import {Stack} from '@mui/material';
import React, {useEffect, useState} from 'react';
import {fetchStockPrice} from '../../api/finnhub-api/stocks/StockApi';
import {StockPriceResponseDto} from '../../api/finnhub-api/stocks/StockPriceDto';

export const TimeSeriesChart = () => {
  const [chartData, setChartData] = useState<StockPriceResponseDto>();

  useEffect(() => {
    fetchStockPrice({
      symbol: 'AAPL',
      timeframe: 'D',
      from: 1590988249,
      to: 1591852249,
    }).then((data) => setChartData(data))
  }, []);

  return <Stack>{JSON.stringify(chartData)}</Stack>;
};

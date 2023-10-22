import {Stack} from '@mui/material';
import React, {useEffect, useState} from 'react';
import {fetchStockPrice} from '../../api/finnhub-api/stocks/StockApi';
import {StockPriceRequestDto, StockPriceResponseDto} from '../../api/finnhub-api/stocks/StockPriceDto';

export const TimeSeriesChart = (props: StockPriceRequestDto) => {
  const {symbol, timeframe, from, to} = props;
  const [chartData, setChartData] = useState<StockPriceResponseDto>();

  useEffect(() => {
    fetchStockPrice({
      symbol,
      timeframe,
      from,
      to,
    }).then((data) => setChartData(data));
  }, []);

  return <Stack>{JSON.stringify(chartData)}</Stack>;
};

import {Stack} from '@mui/material';
import React from 'react';
import {fetchStockPrice} from '../../api/finnhub-api/stocks/StockApi';
import {StockPriceRequestDto} from '../../api/finnhub-api/stocks/StockPriceDto';
import {useQuery} from '@tanstack/react-query';

export const TimeSeriesChart = (props: StockPriceRequestDto) => {
  const {symbol, timeframe, from, to} = props;
  // const [chartData, setChartData] = useState<StockPriceResponseDto>();

  const {data} = useQuery({
    queryKey: ['symbol', symbol],
    queryFn: () =>
      fetchStockPrice({
        symbol,
        timeframe,
        from,
        to,
      }),
  });

  return <Stack>{JSON.stringify(data)}</Stack>;
};

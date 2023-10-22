import {Stack} from '@mui/material';
import React from 'react';
// import {createChart} from 'lightweight-charts';
import {StockPriceRequestDto} from '../../api/finnhub-api/stocks/StockPriceDto';
import StocksQuery from '../../query/stocks/StocksQuery';

export const TimeSeriesChart = (props: StockPriceRequestDto) => {
  // const chartContainerRef = useRef();
  // const containerRef = useRef<HTMLDivElement>();
  const {symbol, timeframe, from, to, priceType} = props;
  const stockApi = new StocksQuery();

  const priceData = stockApi.getStockPrice({symbol, timeframe, from, to, priceType});

  // useEffect(() => {
  //   const chart = createChart(chartContainerRef.current!, {
  //     height: containerRef.current ? containerRef.current.clientHeight : 500,
  //     width: containerRef.current ? containerRef.current.clientWidth : 400,
  //     layout: {textColor: 'black', background: {color: 'white'}},
  //   });
  //   const lineSeries = chart.addLineSeries({color: '#2962FF'});
  //   if (priceData) {
  //     lineSeries.setData(priceData);
  //     chart.timeScale().fitContent();
  //   }
  //   return () => {
  //     chart.remove();
  //   };
  // }, [priceData]);

  return (
    <Stack>
      {/*<div ref={chartContainerRef} hidden={priceData == undefined} />*/}
      {JSON.stringify(priceData)}
    </Stack>
  );
};

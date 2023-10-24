import {Stack} from '@mui/material';
import React, {useEffect, useRef} from 'react';
import {createChart} from 'lightweight-charts';
import {StockPriceRequestDto} from '../../api/finnhub-api/stocks/StockPriceDto';
import StocksQuery from '../../query/stocks/StocksQuery';

export const TimeSeriesChart = (props: StockPriceRequestDto) => {
  const chartContainerRef = useRef(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const {symbol, timeframe, from, to, priceType} = props;
  const stockApi = new StocksQuery();

  const priceData = stockApi.getStockPrice({symbol, timeframe, from, to, priceType});

  useEffect(() => {
    const handleResize = () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      chart.applyOptions({width: chartContainerRef.current.clientWidth});
    };
    const chart = createChart(chartContainerRef.current!, {
      height: containerRef.current ? containerRef.current.clientHeight : 600,
      width: containerRef.current ? containerRef.current.clientWidth : 900,
      layout: {textColor: 'black', background: {color: 'white'}},
    });
    const lineSeries = chart.addLineSeries({color: '#2962FF'});
    if (priceData) {
      lineSeries.setData(priceData);
      chart.timeScale().fitContent();
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      chart.remove();
    };
  }, [priceData]);


  return (
    <Stack
      sx={{
        height: '50vh',
        width: '90%',
      }}
      ref={containerRef}
    >
      <div ref={chartContainerRef} hidden={priceData == undefined} />
    </Stack>
  );
};

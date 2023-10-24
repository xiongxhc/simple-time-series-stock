import {Stack} from '@mui/material';
import React, {useEffect, useRef} from 'react';
import {createChart} from 'lightweight-charts';
import {StockPriceRequestDto} from '../../api/finnhub-api/stocks/StockPriceDto';
import StocksQuery from '../../query/stocks/StocksQuery';
import {TestID} from '../../utils/testing/Constant';

const DEFAULT_CHART_HEIGHT = 600;
const DEFAULT_CHART_WIDTH = 900;

export const TimeSeriesChart = (props: StockPriceRequestDto) => {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const {symbol, timeframe, from, to, priceType} = props;
  const stocksQuery = new StocksQuery();

  const priceData = stocksQuery.getStockPrice({symbol, timeframe, from, to, priceType});

  useEffect(() => {
    const handleResize = () => {
      chart.applyOptions({
        width: chartContainerRef.current ? chartContainerRef.current.clientWidth : DEFAULT_CHART_WIDTH,
      });
    };
    const chart = createChart(chartContainerRef.current!, {
      height: containerRef.current ? containerRef.current.clientHeight : DEFAULT_CHART_HEIGHT,
      width: containerRef.current ? containerRef.current.clientWidth : DEFAULT_CHART_WIDTH,
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
      <div data-testid={TestID.TIME_SERIES_CHART} ref={chartContainerRef} hidden={priceData == undefined} />
    </Stack>
  );
};

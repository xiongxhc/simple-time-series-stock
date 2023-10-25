import React, {useState} from 'react';
import dayjs, {Dayjs} from 'dayjs';
import {Stack, Typography} from '@mui/material';
import {TimeSeriesChart} from '../../components/time-series-chart/TimeSeriesChart';
import StocksQuery from '../../query/stocks/StocksQuery';
import {PriceType} from '../../api/finnhub-api/stocks/StockConst';
import {StockSelectionTable} from '../../components/stock-selection-table/StockSelectionTable';

function HomePage() {
  const stocksQuery = new StocksQuery();
  const stockList = stocksQuery.getStockList();
  const [rowSelectionModel, setRowSelectionModel] = React.useState<string[]>([]);
  const [startTime, setStartTime] = useState<Dayjs | null>(dayjs('2022-04-17'));
  const [endTime, setEndTime] = useState<Dayjs | null>(dayjs('2023-04-17'));

  return (
    <Stack>
      <Typography
        sx={{backgroundColor: 'lightgray', position: 'absolute', margin: 2, padding: 2, borderRadius: 5}}
        variant="h3"
      >
        Time Series Chart
      </Typography>
      <>
        <Stack
          sx={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            color: 'white',
          }}
        >
          <StockSelectionTable
            stockList={stockList ?? []}
            setRowSelectionModel={setRowSelectionModel}
            startTime={startTime}
            setStartTime={setStartTime}
            endTime={endTime}
            setEndTime={setEndTime}
          />
          <TimeSeriesChart
            symbol={rowSelectionModel[0]}
            timeframe={'D'}
            from={new Date('2023-01-01T00:00:00.000Z').getTime() / 1000}
            to={new Date().getTime()}
            priceType={PriceType.CLOSE}
          />
          <TimeSeriesChart
            symbol={rowSelectionModel[1]}
            timeframe={'D'}
            from={new Date('2023-01-01T00:00:00.000Z').getTime() / 1000}
            to={new Date().getTime()}
            priceType={PriceType.CLOSE}
          />
          <TimeSeriesChart
            symbol={rowSelectionModel[2]}
            timeframe={'D'}
            from={new Date('2023-01-01T00:00:00.000Z').getTime() / 1000}
            to={new Date().getTime()}
            priceType={PriceType.CLOSE}
          />
        </Stack>
      </>
    </Stack>
  );
}

export default HomePage;

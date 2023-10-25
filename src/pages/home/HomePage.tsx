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
  const [rowSelectionModel, setRowSelectionModel] = useState<string[]>([]);
  const [priceOption, setPriceOption] = useState<PriceType>(PriceType.CLOSE);
  const [startTime, setStartTime] = useState<Dayjs | null>(dayjs('2023-01-01'));
  const [endTime, setEndTime] = useState<Dayjs | null>(dayjs());

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
          }}
        >
          <StockSelectionTable
            dropdownLabel={'Price Option'}
            dropdownOptions={Object.values(PriceType)}
            dropdownSelection={priceOption}
            handleDropdownChange={setPriceOption}
            stockList={stockList ?? []}
            setRowSelectionModel={setRowSelectionModel}
            maxSelectionAllowed={3}
            startTime={startTime}
            setStartTime={setStartTime}
            endTime={endTime}
            setEndTime={setEndTime}
          />
          <Typography sx={{
            paddingBottom: 3,
            color: 'gray',
            fontWeight: 'bold'
          }}>To view chart, please select stocks from the stocks list (max 3 charts)</Typography>
          <Stack
            sx={{
              width: '95%',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
            }}
          >
            <TimeSeriesChart
              stockSymbol={rowSelectionModel[0]}
              symbol={rowSelectionModel[0]}
              timeframe={'D'} // For this demo purpose, `daily` prices should be good
              from={dayjs(startTime).valueOf()} // We can easily have more control/customisation on each graph as well
              to={dayjs(endTime).valueOf()}
              priceType={priceOption}
            />
            <TimeSeriesChart
              stockSymbol={rowSelectionModel[1]}
              symbol={rowSelectionModel[1]}
              timeframe={'D'}
              from={dayjs(startTime).valueOf()}
              to={dayjs(endTime).valueOf()}
              priceType={priceOption}
            />
            <TimeSeriesChart
              stockSymbol={rowSelectionModel[2]}
              symbol={rowSelectionModel[2]}
              timeframe={'D'}
              from={dayjs(startTime).valueOf()}
              to={dayjs(endTime).valueOf()}
              priceType={priceOption}
            />
          </Stack>
        </Stack>
      </>
    </Stack>
  );
}

export default HomePage;

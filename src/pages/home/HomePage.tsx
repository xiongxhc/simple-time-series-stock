import React from 'react';
import './HomePage.css';
import {Typography} from '@mui/material';
import {TimeSeriesChart} from '../../components/time-series-chart/TimeSeriesChart';

function HomePage() {
  return (
      <div className="HomePage">
        <header className="HomePage-header">
          <Typography variant="h3">Time Series Chart</Typography>
          <TimeSeriesChart symbol={'AAPL'} timeframe={'D'} from={1691971459} to={1697971459} />
        </header>
      </div>
  );
}

export default HomePage;

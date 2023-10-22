import React from 'react';
import './App.css';
import {Typography} from '@mui/material';
import {TimeSeriesChart} from './components/time-series-chart/TimeSeriesChart';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h3">Time Series Chart</Typography>
        <TimeSeriesChart symbol={'AAPL'} timeframe={'D'} from={1691971459} to={1697971459} />
      </header>
    </div>
  );
}

export default App;

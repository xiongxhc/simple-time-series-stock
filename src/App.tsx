import React from 'react';
import './App.css';
import {Typography} from '@mui/material';
import {TimeSeriesChart} from './components/time-series-chart/TimeSeriesChart';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h3">Time Series Chart</Typography>
        <TimeSeriesChart />
      </header>
    </div>
  );
}

export default App;

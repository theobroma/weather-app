import React, { useEffect } from 'react';
import { Box, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { SimpleAppBar } from '../@components/AppBar/AppBar';
import CurrentWeather from '../@components/CurrentWeather';
import { getUserCoordinatesTC } from '../@store/current-weather/slice';
import Forecast from '../@components/Forecast/Forecast';
import Search from '../@components/Search/Search';

export const AppContainer: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserCoordinatesTC());
  }, [dispatch]);

  return (
    <div className="App">
      <Box mb={2}>
        <SimpleAppBar />
      </Box>
      <Paper elevation={3}>
        <Search />
      </Paper>
      <Paper elevation={3}>
        <CurrentWeather />
      </Paper>
      <Paper elevation={3}>
        <Forecast />
      </Paper>
    </div>
  );
};

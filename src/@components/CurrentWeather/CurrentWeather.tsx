import { Box, Grid } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { forecastSelector } from '../../@store/forecast/selectors';
import GridProgress from '../UI/GridProgress/GridProgress';
import { CurrentWeatherData } from './CurrentWeatherData/CurrentWeatherData';
import { Location } from './Location/Location';

export const CurrentWeather: React.FC = () => {
  const { location, currentWeather, isFetching } =
    useSelector(forecastSelector);

  return (
    <Box p={3}>
      <GridProgress container spacing={1} loading={isFetching}>
        <Grid item xs={12}>
          <Location location={location} />
          <CurrentWeatherData currentWeather={currentWeather} />
        </Grid>
      </GridProgress>
    </Box>
  );
};

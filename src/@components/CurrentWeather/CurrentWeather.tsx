import React from 'react';

import { Box, Grid } from '@material-ui/core';

import { useAppSelector } from '../../@store/configureStore';
import { forecastSelector } from '../../@store/forecast/selectors';
import GridProgress from '../UI/GridProgress/GridProgress';

import { CurrentWeatherData } from './CurrentWeatherData/CurrentWeatherData';
import { Location } from './Location/Location';

export const CurrentWeather = () => {
  const { location, currentWeather, isFetching } =
    useAppSelector(forecastSelector);

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

import { Box } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { forecastSelector } from '../../@store/forecast/selectors';
import { CurrentWeatherData } from './CurrentWeatherData/CurrentWeatherData';
import { Location } from './Location/Location';

export const CurrentWeather: React.FC = () => {
  const { location, currentWeather } = useSelector(forecastSelector);

  return (
    <Box p={3}>
      <Location location={location} />
      <CurrentWeatherData currentWeather={currentWeather} />
    </Box>
  );
};

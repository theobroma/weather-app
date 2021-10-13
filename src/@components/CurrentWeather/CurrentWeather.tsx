import { Box } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currentWeatherSelector } from '../../@store/current-weather/selectors';
import { getCurrentWeatherTC } from '../../@store/current-weather/slice';
import { сoordinatesSelector } from '../../@store/сoordinates/selectors';
import { CurrentWeatherData } from './CurrentWeatherData/CurrentWeatherData';
import { Location } from './Location/Location';

export const CurrentWeather: React.FC = () => {
  const dispatch = useDispatch();
  const { lon, lat } = useSelector(сoordinatesSelector);
  const { location, currentWeather } = useSelector(currentWeatherSelector);

  useEffect(() => {
    if (lat !== null && lon !== null) {
      dispatch(getCurrentWeatherTC({ lat, lon }));
    }
  }, [lat, lon, dispatch]);

  return (
    <Box p={3}>
      <Location location={location} />
      <CurrentWeatherData currentWeather={currentWeather} />
    </Box>
  );
};

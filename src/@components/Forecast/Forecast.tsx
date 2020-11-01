import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currentWeatherSelector } from '../../@store/current-weather/selectors';
import { getForecastTC } from '../../@store/forecast/slice';

const Forecast = () => {
  const dispatch = useDispatch();
  const { lon, lat } = useSelector(currentWeatherSelector);
  const forecastDays = 3;

  useEffect(() => {
    if (lat !== 0 && lon !== 0) {
      dispatch(getForecastTC(forecastDays, lat, lon));
    }
  }, [lat, lon, forecastDays]);

  return (
    <div>
      <span>Forecast</span>
    </div>
  );
};

export default Forecast;

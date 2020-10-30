import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currentWeatherSelector } from '../../@store/current-weather/selectors';
import { getCurrentWeatherTC } from '../../@store/current-weather/slice';
import { CurrentWeatherData } from './CurrentWeatherData/CurrentWeatherData';
import { Location } from './Location/Location';

interface Props {
  any?: any;
}

export const CurrentWeather: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const { lon, lat, location, currentWeather } = useSelector(
    currentWeatherSelector,
  );

  useEffect(() => {
    if (lat !== 0 && lon !== 0) {
      dispatch(getCurrentWeatherTC(lat, lon));
    }
  }, [lat, lon]);

  return (
    <div>
      <span>CurrentWeatherCurrentWeather</span>
      <Location location={location} />
      <CurrentWeatherData currentWeather={currentWeather} />
    </div>
  );
};

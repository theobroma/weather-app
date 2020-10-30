import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currentWeatherSelector } from '../../@store/current-weather/selectors';
import { getCurrentWeatherTC } from '../../@store/current-weather/slice';
import { Location } from './Location/Location';

interface Props {
  any?: any;
}

export const CurrentWeather: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const { lon, lat, location } = useSelector(currentWeatherSelector);

  // const location = useSelector<AppRootStateType, LocationResponseType>(
  //   (state) => state.currentWeather.location,
  // );
  // const currentWeather = useSelector<
  //   AppRootStateType,
  //   CurrentWeatherResponseType
  // >((state) => state.currentWeather.currentWeather);

  useEffect(() => {
    if (lat !== 0 && lon !== 0) {
      dispatch(getCurrentWeatherTC(lat, lon));
    }
  }, [lat, lon]);

  // const updateDate = new Date(currentWeather.last_updated);
  // let currentWeekday = { weekday: 'long' };
  // let currentDate = { year: 'numeric', month: 'long', day: 'numeric' };

  return (
    <div>
      <span>CurrentWeatherCurrentWeather</span>
      <Location location={location} />
    </div>
  );
};

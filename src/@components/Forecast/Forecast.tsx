import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currentWeatherSelector } from '../../@store/current-weather/selectors';
import { forecastdaySelector } from '../../@store/forecast/selectors';
import { getForecastTC } from '../../@store/forecast/slice';
import { ForecastdayResponseType } from '../../@types';
import ForecastDay from './ForecastDay/ForecastDay';

const Forecast: React.FC = () => {
  const dispatch = useDispatch();
  const { lon, lat } = useSelector(currentWeatherSelector);
  const forecastInfo = useSelector(forecastdaySelector);
  const forecastDays = 3;

  useEffect(() => {
    if (lat !== 0 && lon !== 0) {
      dispatch(getForecastTC(forecastDays, lat, lon));
    }
  }, [lat, lon, forecastDays]);

  const currentWeekday = { weekday: 'long' };
  const currentDate = { year: 'numeric', month: 'long', day: 'numeric' };

  return (
    <div>
      <span>Forecast</span>
      <div>
        {forecastInfo.map((d: ForecastdayResponseType) => {
          const adaptedDate = new Date(d.date);
          return (
            <div key={d.date}>
              <ForecastDay
                weekDay={adaptedDate.toLocaleString('en-US', currentWeekday)}
                date={adaptedDate.toLocaleString('en-US', currentDate)}
                sunrise={d.astro.sunrise}
                sunset={d.astro.sunset}
                icon={d.day.condition.icon}
                condition_text={d.day.condition.text}
                min_temp={d.day.mintemp_c}
                max_temp={d.day.maxtemp_c}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Forecast;

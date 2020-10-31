import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBacon,
  faCalendarAlt,
  faTemperatureHigh,
  faWater,
  faWind,
} from '@fortawesome/free-solid-svg-icons';
import { Typography } from '@material-ui/core';

export const CurrentWeatherData: React.FC<Props> = ({
  currentWeather: {
    condition_img,
    temp_c,
    condition_text,
    last_updated,
    humidity,
    wind_kph,
    wind_dir,
    gust_kph,
  },
}) => {
  const updateDate = new Date(last_updated);
  const currentWeekday = { weekday: 'long' };
  const currentDate = { year: 'numeric', month: 'long', day: 'numeric' };
  const last_updated_weekday = updateDate.toLocaleString(
    'en-US',
    currentWeekday,
  );
  const last_updated_date = updateDate.toLocaleString('en-US', currentDate);

  return (
    <div>
      <div>
        <div>
          <img src={condition_img} width="150" alt="condition" />
          <div>
            <p>{temp_c}&#176;C</p>
            <p>{condition_text}</p>
          </div>
        </div>
      </div>
      <div>
        <p>
          <FontAwesomeIcon icon={faCalendarAlt} />
          <Typography component="span" variant="subtitle1">
            Today:
          </Typography>
          {last_updated_weekday} {last_updated_date}
        </p>
        <p>
          <FontAwesomeIcon icon={faTemperatureHigh} />
          <Typography component="span" variant="subtitle1">
            Feels Like:
          </Typography>
          {temp_c}&#176;C
        </p>
        <p>
          <FontAwesomeIcon icon={faWater} />
          <Typography component="span" variant="subtitle1">
            Humidity:
          </Typography>
          {humidity} %
        </p>
        <p>
          <FontAwesomeIcon icon={faWind} />
          <Typography component="span" variant="subtitle1">
            Wind:
          </Typography>
          {wind_kph} km/h ({wind_dir})
        </p>
        <p>
          <FontAwesomeIcon icon={faBacon} />
          <Typography component="span" variant="subtitle1">
            Gust:
          </Typography>
          {gust_kph}
        </p>
      </div>
    </div>
  );
};

type Props = {
  currentWeather: {
    last_updated: string;
    temp_c: number;
    //   feelslike_c: number;
    wind_kph: number;
    wind_dir: string;
    gust_kph: number;
    humidity: number;
    condition_text: string;
    condition_img: string;
  };
};

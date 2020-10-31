import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBacon,
  faCalendarAlt,
  faTemperatureHigh,
  faWater,
  faWind,
} from '@fortawesome/free-solid-svg-icons';
import styles from './CurrentWeatherData.module.scss';

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
    <div className={styles.currentWeather}>
      <div className={styles.colLeft}>
        <div className={styles.colLeftInner}>
          <img
            src={condition_img}
            width="150"
            className={styles.currentWeatherImg}
            alt="condition"
          />
          <div className={styles.desc}>
            <p className={styles.largeText}>{temp_c}&#176;C</p>
            <p className={styles.bigText}>{condition_text}</p>
          </div>
        </div>
      </div>
      <div className={styles.colRight}>
        <p className={styles.currentWeatherItem}>
          <FontAwesomeIcon icon={faCalendarAlt} className={styles.icon} />{' '}
          <span>Today: </span>
          {last_updated_weekday} {last_updated_date}
        </p>
        <p className={styles.currentWeatherItem}>
          <FontAwesomeIcon icon={faTemperatureHigh} className={styles.icon} />
          <span>Feels Like: </span>
          {temp_c}&#176;C
        </p>
        <p className={styles.currentWeatherItem}>
          <FontAwesomeIcon icon={faWater} className={styles.icon} />
          <span>Humidity:</span> {humidity} %
        </p>
        <p className={styles.currentWeatherItem}>
          <FontAwesomeIcon icon={faWind} className={styles.icon} />
          <span>Wind:</span> {wind_kph} km/h ({wind_dir})
        </p>
        <p className={styles.currentWeatherItem}>
          <FontAwesomeIcon icon={faBacon} className={styles.icon} />
          <span>Gust: </span>
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

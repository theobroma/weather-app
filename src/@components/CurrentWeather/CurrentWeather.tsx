import { Card, CardContent, makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography/Typography';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currentWeatherSelector } from '../../@store/current-weather/selectors';
import { getCurrentWeatherTC } from '../../@store/current-weather/slice';
import { CurrentWeatherData } from './CurrentWeatherData/CurrentWeatherData';
import { Location } from './Location/Location';

interface Props {
  any?: any;
}

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    marginBottom: 16,
  },
});

export const CurrentWeather: React.FC<Props> = (props) => {
  const classes = useStyles(props);
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
      <Typography component="h1" variant="h2">
        Todos
      </Typography>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h4">Город</Typography>
          <Typography variant="h2">дата</Typography>
          <Typography variant="h2">weatherDescription</Typography>
          {/* <div className={classes.flex}>
            <CurrentWeather data={result.list[0]} />
            <WeatherDetails data={result.list[0]} />
          </div> */}
          <div>{/* <WeeklyWeather data={result.list} /> */}</div>
        </CardContent>
      </Card>
      <Location location={location} />
      <CurrentWeatherData currentWeather={currentWeather} />
    </div>
  );
};

import { Box, Container, Grid, Paper } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CurrentWeather from '../../@components/CurrentWeather';
import Forecast from '../../@components/Forecast';
import Search from '../../@components/Search';
import { getForecastTC } from '../../@store/forecast/slice';
import { сoordinatesSelector } from '../../@store/сoordinates/selectors';
import { setUserCoordinatesTC } from '../../@store/сoordinates/slice';

const MainView: React.FC = () => {
  const dispatch = useDispatch();
  const { lon, lat } = useSelector(сoordinatesSelector);

  useEffect(() => {
    if (lat === null && lon === null) {
      dispatch(setUserCoordinatesTC());
    }
  }, [lat, lon, dispatch]);

  useEffect(() => {
    const days = 3; // Limited for free plan
    if (lat !== null && lon !== null) {
      dispatch(getForecastTC({ days }));
    }
  }, [lat, lon, dispatch]);

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3} style={{ padding: 3 }}>
        <Grid item xs={12}>
          <Box mb={1}>
            <Paper elevation={3}>
              <Search />
            </Paper>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box mb={1}>
            <Paper elevation={3}>
              <CurrentWeather />
            </Paper>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box mb={1}>
            <Paper elevation={3}>
              <Forecast />
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MainView;

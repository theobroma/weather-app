import { Box, Container, Grid, Paper } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import SimpleAppBar from '../../@components/AppBar';
import CurrentWeather from '../../@components/CurrentWeather';
import Footer from '../../@components/Footer';
import Forecast from '../../@components/Forecast';
import Search from '../../@components/Search';
import { getUserCoordinatesTC } from '../../@store/current-weather/slice';

const MainView: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserCoordinatesTC());
  }, [dispatch]);

  return (
    <div className="HolyGrail">
      <Box mb={2}>
        <SimpleAppBar />
      </Box>
      <div className="HolyGrail-content">
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
      </div>
      <Footer />
    </div>
  );
};

export default MainView;

import { Box, Grid, Typography } from '@material-ui/core';
import { nanoid } from '@reduxjs/toolkit';
import React from 'react';
import { useSelector } from 'react-redux';
import { forecastdaySelector } from '../../@store/forecast/selectors';
import ForecastDay from './ForecastDay/ForecastDay';

const Forecast: React.FC = () => {
  const forecastday = useSelector(forecastdaySelector);

  const currentWeekday = { weekday: 'long' } as const;
  const currentDate = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  } as const;

  return (
    <Box p={3}>
      <Box mb={1}>
        <Typography variant="h6" noWrap>
          Forecast
        </Typography>
      </Box>
      <Box>
        <Grid container spacing={1}>
          {forecastday.map((d) => {
            const adaptedDate = new Date(d.date);
            return (
              <Grid item xs={12} md={4} key={nanoid(8)}>
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
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default Forecast;

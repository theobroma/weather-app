import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';
import { currentWeatherApi } from '../../@api/currentWeather-api';
import { forecastAPI } from '../../@api/forecast-api';

const forecastInitialState = {
  forecastday: [],
};

export const forecastSlice = createSlice({
  name: 'forecast',
  initialState: forecastInitialState,
  reducers: {
    setForecast(state, action) {
      state.forecastday = action.payload;
    },
  },
});

export const { setForecast: setForecastAC } = forecastSlice.actions;

/* **************THUNKS************** */
export const getForecastTC = (days: number, lat: number, lon: number) => (
  dispatch: Dispatch<any>,
) => {
  forecastAPI
    .dailyWeather(days, lat, lon)
    .then((res: any) => {
      dispatch(setForecastAC(res.data.forecast.forecastday));
    })
    .catch((error: any) => {
      // dispatch(errorAC(error.response.data.error));
    });
};

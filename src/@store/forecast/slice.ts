import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { forecastAPI } from '../../@api/forecast-api';
import {
  LocationType,
  CurrentWeatherType,
  ForecastType,
  ForecastResponseType,
} from '../../@types';
import { сoordinatesInitialStateType } from '../сoordinates/slice';

const forecastInitialState = {
  location: {} as LocationType,
  currentWeather: {} as CurrentWeatherType,
  forecast: {
    forecastday: [],
  } as ForecastType,
};

export type forecastInitialStateType = typeof forecastInitialState;

// https://stackoverflow.com/questions/67279037/the-thunkapi-getstate-method-does-not-correctly-infer-the-state-type
export const getForecastTC = createAsyncThunk<
  ForecastResponseType,
  { days: number; lat: number; lon: number },
  { state: { сoordinates: сoordinatesInitialStateType } }
>('forecast/getForecast', async (param, thunkAPI) => {
  const state = thunkAPI.getState();
  try {
    const res = await forecastAPI.dailyWeather(
      param.days,
      Number(state.сoordinates.lat),
      Number(state.сoordinates.lon),
    );
    return res.data;
  } catch (err: any) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
});

export const slice = createSlice({
  name: 'forecast',
  initialState: forecastInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getForecastTC.fulfilled, (state, action) => {
      if (action.payload) {
        state.location = action.payload.location;
        state.currentWeather = action.payload.current;
        state.forecast = action.payload.forecast;
      }
    });
  },
});

export const forecastReducer = slice.reducer;

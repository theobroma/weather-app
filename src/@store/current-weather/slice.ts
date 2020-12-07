import {
  createAsyncThunk,
  createSlice,
  Dispatch,
  PayloadAction,
} from '@reduxjs/toolkit';
import { currentWeatherApi } from '../../@api/currentWeather-api';
import { CurrentWeatherResponseType, LocationResponseType } from '../../@types';

const currentWeatherInitialState = {
  lat: 0, // lat: 51.5341714,
  lon: 0, // lon: 33.3767724,
  location: {} as LocationResponseType,
  currentWeather: {} as CurrentWeatherResponseType,
};

export const getUserCoordinatesTC = createAsyncThunk(
  'currentWeather/getUserCoordinatesTC',
  (undf, thunkAPI) => {
    navigator.geolocation.getCurrentPosition((position) => {
      thunkAPI.dispatch(
        userCoordinatesAC({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        }),
      );
    });
  },
);

export const slice = createSlice({
  name: 'currentWeather',
  initialState: currentWeatherInitialState,
  reducers: {
    userCoordinatesAC(
      state,
      action: PayloadAction<{ lat: number; lon: number }>,
    ) {
      state.lat = action.payload.lat;
      state.lon = action.payload.lon;
    },
    setCurrentWeatherAC(
      state,
      action: PayloadAction<CurrentWeatherResponseType>,
    ) {
      state.currentWeather = action.payload;
    },
    setLocationAC(state, action: PayloadAction<LocationResponseType>) {
      state.location = action.payload;
    },
  },
});

export const currentWeatherReducer = slice.reducer;

export const {
  userCoordinatesAC,
  setCurrentWeatherAC,
  setLocationAC,
} = slice.actions;

/* **************THUNKS************** */

export const getCurrentWeatherTC = (lat: number, lon: number) => (
  dispatch: Dispatch<any>,
) => {
  currentWeatherApi
    .currentWeather(lat, lon)
    .then((res) => {
      dispatch(setLocationAC(res.data.location));
      dispatch(setCurrentWeatherAC(res.data.current));
    })
    .catch((error) => {
      // dispatch(errorAC(error.response.data.error));
    });
};

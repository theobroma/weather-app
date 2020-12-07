import {
  createAsyncThunk,
  createSlice,
  Dispatch,
  PayloadAction,
} from '@reduxjs/toolkit';
import { currentWeatherApi } from '../../@api/currentWeather-api';

const currentWeatherInitialState = {
  // lat: 51.5341714,
  // lon: 33.3767724,
  lat: 0,
  lon: 0,
  location: {} as any,
  currentWeather: {} as any,
  //   currentWeather: {
  //     condition: {} as ConditionResponseType,
  //   } as CurrentWeatherResponseType,
};

export const getUserCoordinatesTC = createAsyncThunk(
  'currentWeather/getUserCoordinatesTC',
  (undf, thunkAPI) => {
    navigator.geolocation.getCurrentPosition(function (position) {
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
    setCurrentWeatherAC(state, action: PayloadAction<any>) {
      state.currentWeather = action.payload;
    },
    setLocationAC(state, action: PayloadAction<any>) {
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

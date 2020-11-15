import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';
import { currentWeatherApi } from '../../@api/currentWeather-api';

const currentWeatherInitialState = {
  lat: 51.5341714,
  lon: 33.3767724,
  location: {} as any,
  currentWeather: {} as any,
  //   currentWeather: {
  //     condition: {} as ConditionResponseType,
  //   } as CurrentWeatherResponseType,
};

// Action creators
export const userCoordinatesAC = (lat: number, lon: number) =>
  ({ type: 'COORDINATES', lat, lon } as const);

// THUNK
export const getUserCoordinatesTC = () => (dispatch: Dispatch<any>) => {
  navigator.geolocation.getCurrentPosition(function (position) {
    dispatch(
      userCoordinatesAC(position.coords.latitude, position.coords.longitude),
    );
  });
};

export const currentWeatherSlice = createSlice({
  name: 'currentWeather',
  initialState: currentWeatherInitialState,
  reducers: {
    setCurrentWeather(state, action: PayloadAction<any>) {
      state.currentWeather = action.payload;
    },
    setLocation(state, action: PayloadAction<any>) {
      state.location = action.payload;
    },
  },
});

export const {
  setCurrentWeather: setCurrentWeatherAC,
  setLocation: setLocationAC,
} = currentWeatherSlice.actions;

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

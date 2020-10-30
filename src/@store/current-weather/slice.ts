import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';
import { currentWeatherApi } from '../../@api/currentWeather-api';
import { FilterType } from '../../@types';

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

export const userLocationAC = (location: any) =>
  ({ type: 'LOCATION', location } as const);

// export const currentWeatherAC = (currentWeather: any) =>
//   ({
//     type: 'CURRENT_WEATHER',
//     currentWeather,
//   } as const);

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
    setFilter: (state, { payload }: PayloadAction<any>) => payload,
    setCurrentWeather(state, action) {
      state.currentWeather = action.payload;
    },
  },
});

export const {
  setFilter: setFilterActionCreator,
  setCurrentWeather: setCurrentWeatherAC,
} = currentWeatherSlice.actions;

// API REQUEST ACTIONS HANDLED WITH REDUX-THUNK MIDDLEWARE BUILT INTO REDUX TOOLKIT -->

/* **************THUNKS************** */

// export const getFirstRender = () => {
//   return async (dispatch: any) => {
//     dispatch(setLoading(true));
//     // redux-thunk
//     try {
//       const apiResponse = await fetch('http://localhost:5000/api/items');
//       const firstRenderData = await apiResponse.json();
//       dispatch(firstRender(firstRenderData));
//     } catch (e) {
//       apiError(e.message);
//     } finally {
//       dispatch(setLoading(false));
//     }
//   };
// };

export const getCurrentWeatherTC = (lat: number, lon: number) => (
  dispatch: Dispatch<any>,
) => {
  currentWeatherApi
    .currentWeather(lat, lon)
    .then((res) => {
      dispatch(userLocationAC(res.data.location));
      dispatch(setCurrentWeatherAC(res.data.current));
    })
    .catch((error) => {
      // dispatch(errorAC(error.response.data.error));
    });
};

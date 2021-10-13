import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { currentWeatherApi } from '../../@api/currentWeather-api';
import { CurrentWeatherResponseType, LocationResponseType } from '../../@types';

const currentWeatherInitialState = {
  location: {} as LocationResponseType,
  currentWeather: {} as CurrentWeatherResponseType,
};

export const getCurrentWeatherTC = createAsyncThunk<
  // Return type of the payload creator
  any,
  // First argument to the payload creator
  { lat: number; lon: number },
  // Types for ThunkAPI
  any
>('currentWeather/getCurrentWeather', async (param, thunkAPI) => {
  const state = thunkAPI.getState();
  // console.log(state);
  try {
    const res = await currentWeatherApi.currentWeather(param.lat, param.lon);
    // thunkAPI.dispatch(setLocationAC(res.data.location));
    console.log(res.data);
    return res.data;
  } catch (err: any) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
});

export const slice = createSlice({
  name: 'currentWeather',
  initialState: currentWeatherInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCurrentWeatherTC.fulfilled, (state, action) => {
      if (action.payload) {
        state.location = action.payload.location;
        state.currentWeather = action.payload.current;
      }
    });
  },
});

export const currentWeatherReducer = slice.reducer;
// export const { userCoordinatesAC, setLocationAC } = slice.actions;

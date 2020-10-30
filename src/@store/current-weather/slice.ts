import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterType } from '../../@types';

const currentWeatherInitialState = {
  lat: 0,
  lon: 0,
  location: {} as any,
  //   currentWeather: {
  //     condition: {} as ConditionResponseType,
  //   } as CurrentWeatherResponseType,
};

export const currentWeatherSlice = createSlice({
  name: 'currentWeather',
  initialState: currentWeatherInitialState,
  reducers: {
    setFilter: (state, { payload }: PayloadAction<any>) => payload,
  },
});

export const {
  setFilter: setFilterActionCreator,
} = currentWeatherSlice.actions;

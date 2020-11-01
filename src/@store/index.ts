import { combineReducers } from 'redux';
import { forecastSlice } from './forecast/slice';
import { currentWeatherSlice } from './current-weather/slice';
import { filterSlice } from './filter/slice';

export const rootReducer = combineReducers({
  filter: filterSlice.reducer,
  currentWeather: currentWeatherSlice.reducer,
  forecast: forecastSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

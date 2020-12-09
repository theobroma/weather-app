import { combineReducers } from 'redux';
import { forecastReducer } from './forecast/slice';
import { currentWeatherReducer } from './current-weather/slice';
import { searchSlice } from './search/slice';

export const rootReducer = combineReducers({
  currentWeather: currentWeatherReducer,
  forecast: forecastReducer,
  search: searchSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

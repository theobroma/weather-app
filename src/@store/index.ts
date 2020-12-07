import { combineReducers } from 'redux';
import { forecastSlice } from './forecast/slice';
import { currentWeatherReducer } from './current-weather/slice';
import { searchSlice } from './search/slice';

export const rootReducer = combineReducers({
  currentWeather: currentWeatherReducer,
  forecast: forecastSlice.reducer,
  search: searchSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

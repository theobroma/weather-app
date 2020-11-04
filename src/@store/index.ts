import { combineReducers } from 'redux';
import { forecastSlice } from './forecast/slice';
import { currentWeatherSlice } from './current-weather/slice';
import { filterSlice } from './filter/slice';
import { searchSlice } from './search/slice';

export const rootReducer = combineReducers({
  filter: filterSlice.reducer,
  currentWeather: currentWeatherSlice.reducer,
  forecast: forecastSlice.reducer,
  search: searchSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

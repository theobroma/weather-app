import { combineReducers } from 'redux';
import { currentWeatherReducer } from './current-weather/slice';
import { forecastReducer } from './forecast/slice';
import { searchReducer } from './search/slice';
import { uiReducer } from './ui/slice';

export const rootReducer = combineReducers({
  currentWeather: currentWeatherReducer,
  forecast: forecastReducer,
  search: searchReducer,
  ui: uiReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

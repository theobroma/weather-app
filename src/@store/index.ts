import { combineReducers } from 'redux';
import { forecastReducer } from './forecast/slice';
import { searchReducer } from './search/slice';
import { uiReducer } from './ui/slice';
import { сoordinatesReducer } from './сoordinates/slice';

export const rootReducer = combineReducers({
  сoordinates: сoordinatesReducer,
  forecast: forecastReducer,
  search: searchReducer,
  ui: uiReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

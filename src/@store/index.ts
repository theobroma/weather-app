import { combineReducers } from 'redux';
import { filterSlice } from './filter/slice';

export const rootReducer = combineReducers({
  filter: filterSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { searchAPI } from '../../@api/search-api';
import { SearchPlaceResponseType } from '../../@types';

const searchInitialState = {
  data: [] as SearchPlaceResponseType[],
};

export const searchTC = createAsyncThunk<
  SearchPlaceResponseType[],
  string,
  any
>('search/searchTC', async (place, thunkAPI) => {
  try {
    const res = await searchAPI.place(place);
    return res.data;
  } catch (err: any) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
});

export const slice = createSlice({
  name: 'search',
  initialState: searchInitialState,
  reducers: {
    clearData(state) {
      state.data = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(searchTC.fulfilled, (state, action) => {
      if (action.payload) {
        state.data = action.payload;
      }
    });
  },
});

export const searchReducer = slice.reducer;
export const { clearData: clearDataAC } = slice.actions;

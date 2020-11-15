import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';
import { searchAPI } from '../../@api/search-api';

const searchInitialState = {
  data: [],
};

export const searchSlice = createSlice({
  name: 'search',
  initialState: searchInitialState,
  reducers: {
    setData(state, action: PayloadAction<any>) {
      state.data = action.payload;
    },
    clearData(state) {
      state.data = [];
    },
  },
});

export const {
  setData: setDataAC,
  clearData: clearDataAC,
} = searchSlice.actions;

/* **************THUNKS************** */
export const searchTC = (place: string) => (dispatch: Dispatch<any>) => {
  searchAPI
    .place(place)
    .then((res) => {
      dispatch(setDataAC(res.data));
    })
    .catch((error) => {
      // dispatch(errorAC(error.response.data.error));
    });
};

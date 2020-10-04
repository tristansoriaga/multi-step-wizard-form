import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
  name: 'root',
  initialState: {
    base: 'small',
    crust: 'classic_thin',
    sauce: 'no_sauce',
    cheese: 'no_cheese',
  },
  reducers: {
    chooseBase: (state, { payload }) => {
      state.base = payload;
    },
    chooseCrust: (state, { payload }) => {
      state.crust = payload;
    },
    chooseSauce: (state, { payload }) => {
      state.sauce = payload;
    },
    chooseCheese: (state, { payload }) => {
      state.cheese = payload;
    },
    resetState: (state) => {
      state.base = 'small';
      state.crust = 'classic_thin';
      state.sauce = 'no_sauce';
      state.cheese = 'no_cheese';
    },
  },
});

export const reducer = rootSlice.reducer;
export const { chooseBase, chooseCrust, chooseSauce, chooseCheese, resetState } = rootSlice.actions;

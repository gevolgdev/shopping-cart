import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: number[] = [];

const lessPriceCartSlice = createSlice({
  name: 'lessPrice',
  initialState,
  reducers: {
    lessPriceCartReducer: (state, {payload}: PayloadAction<number>): number[] => [...state, payload],
  }
});


export default lessPriceCartSlice.reducer
export const { lessPriceCartReducer } = lessPriceCartSlice.actions;
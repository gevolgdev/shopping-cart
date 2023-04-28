import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: number[] = []

const totalPriceCartSlice = createSlice({
  name: 'totalPrice',
  initialState,
  reducers: {
    totalPriceCartReducer: (state, {payload}: PayloadAction<number>): number[] => [...state, payload],
  }
})

export default totalPriceCartSlice.reducer;
export const { totalPriceCartReducer } = totalPriceCartSlice.actions;
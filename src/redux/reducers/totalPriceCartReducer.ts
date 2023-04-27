import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: number[] = []

const totalPriceCartSlice = createSlice({
  name: 'totalPrice',
  initialState,
  reducers: {
    totalPriceCartReducer: (state, action: PayloadAction<number>) => [...state, action.payload]
  }
})

export default totalPriceCartSlice.reducer;
export const { totalPriceCartReducer } = totalPriceCartSlice.actions;
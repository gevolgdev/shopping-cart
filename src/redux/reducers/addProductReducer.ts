import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { DataProps } from '../../types/types';
import { RootState } from "../reducer";

const initialState: DataProps[]= [{
  id: 0,
  title: '',
  price: 0,
  category: '',
  description: '',
  image:'',
  rating: {
    count: 0,
    rate: 0,
  }
}];

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProductsCartReducer: (state, action: PayloadAction<DataProps>): DataProps[] => {
      return [
        ...state,
        {
          id: action.payload.id,
          title: action.payload.title,
          price: action.payload.price,
          category: action.payload.category,
          description: action.payload.description,
          image:action.payload.image,
          rating: {
            count: action.payload.rating.count,
            rate: action.payload.rating.rate,  
          }
        }
      ]
    }
  }
});

export default productSlice.reducer;
export const { addProductsCartReducer } = productSlice.actions;

export const SelectProductCart = (state: RootState) => state;

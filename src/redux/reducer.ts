import { combineReducers } from 'redux';
import addProductSlice from './reducers/productSlice';
import morePricesSlice from './reducers/morePricesSlice';
import lessPriceCartSlice from './reducers/lessPriceSlice';

export const rootReducer = combineReducers({
  addProductCart: addProductSlice,
  prices: morePricesSlice,
  lessPriceCart: lessPriceCartSlice,
});

export type RootState = ReturnType<typeof rootReducer>


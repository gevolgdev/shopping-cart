import { combineReducers } from 'redux';
import addProductReducer from './reducers/addProductReducer';
import totalPriceCartReducer from './reducers/totalPriceCartReducer';

export const rootReducer = combineReducers({
  addProductCart: addProductReducer,
  totalPriceCart: totalPriceCartReducer,
});

export type RootState = ReturnType<typeof rootReducer>


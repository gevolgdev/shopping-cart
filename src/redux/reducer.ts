import { combineReducers } from 'redux';
import addProductReducer from './reducers/addProductReducer';

export const rootReducer = combineReducers({
  addProductCart: addProductReducer,
});

export type RootState = ReturnType<typeof rootReducer>


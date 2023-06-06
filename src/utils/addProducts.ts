import { DataProps } from "../types/types";
import { toast } from 'react-toastify';
import {totalPriceCartReducer} from '../lib/redux/reducers/morePricesSlice';
import { useDispatch } from 'react-redux';
import { addProductsCartReducer } from '../lib/redux/reducers/productSlice';

const addProducts = () => {

  const dispatch = useDispatch();

  const addProduct = (infos: DataProps): void => {
    dispatch(addProductsCartReducer(infos));
    dispatch(totalPriceCartReducer(infos.price));
  };

  const notify = () => toast('Added to cart!');

  return { addProduct, notify};
};

export default addProducts;
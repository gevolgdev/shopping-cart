import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { totalPriceCartReducer } from '../lib/redux/reducers/morePricesSlice';
import { removeProductsCart } from '../lib/redux/reducers/productSlice';
import { lessPriceCartReducer } from '../lib/redux/reducers/lessPriceSlice';
import { AmountProps } from '../types/types';


const productsAmount = ({product, index}: AmountProps) => {

  const [amount, setAmount] = useState<number>(1);
  const priceProduct: number = product.price * amount;

  const dispatch = useDispatch();

  const amountMorePrice = () => {
    dispatch(totalPriceCartReducer(product.price));
    setAmount(prev => prev + 1);
  };

  const amountLessPrice = () => {
    dispatch(lessPriceCartReducer(product.price));
    setAmount(prev => prev - 1);
  };

  const removeProductCart = () => {
    dispatch(lessPriceCartReducer(priceProduct));
    dispatch(removeProductsCart(index + 1));
  };

  return { amount, priceProduct, amountMorePrice, amountLessPrice, removeProductCart };
};

export default productsAmount;
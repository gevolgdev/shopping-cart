import { useSelector } from 'react-redux';
import { RootState } from '../lib/redux/reducer';

const totalPrice = () => {

  const prices: number[] = useSelector((state: RootState) => state.prices);
  const lessPrice: number[] = useSelector((state: RootState) => state.lessPriceCart);

  let totalPrice: number = 0;
  for (let i = 0; i < prices.length; i++) {
    totalPrice += prices[i];
  };

  let lessCartPrice: number = 0;
  for (let i = 0; i < lessPrice.length; i++) {
    lessCartPrice += lessPrice[i];
  };

  const totalCartUpdate = totalPrice - lessCartPrice;
  const totalCartPrice = Math.max(totalCartUpdate, 0);

  return { totalCartPrice };
};

export default totalPrice;
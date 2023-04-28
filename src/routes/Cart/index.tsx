import { useState } from 'react';
import { Header, TotalPrice } from '../../components';
import * as style from './style';
import { DataProps } from '../../types/types';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducer';
import ProductCart from '../../components/ProductCart';

const Cart = () => {

  const productsCart: DataProps[] = useSelector((state: RootState) => state.addProductCart.slice(1));
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

  const totalCartPrice = totalPrice - lessCartPrice;

  return (
    <style.CartContainer>
      <Header title='My cart' products />

      <div className='content'>
        {productsCart.map((item, index) => (
          <ProductCart key={item.id} product={item} index={index}/>
        ))}
      </div>
      <TotalPrice priceCart={totalCartPrice}/>
    </style.CartContainer>
  )
}
export default Cart;
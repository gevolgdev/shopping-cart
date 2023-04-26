import { useState } from 'react';
import { Header, TotalPrice } from '../../components';
import * as style from './style';
import { DataProps } from '../../types/types';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducer';
import ProductCart from '../../components/ProductCart';

const Cart = () => {

  const productsCart: DataProps[] = useSelector((state: RootState) => state.addProductCart.slice(1));
  const prices: number[] = productsCart.map((item) => item.price);

  let totalCartPrice: number = 0;
  for (let i = 0; i < prices.length; i++) {
    totalCartPrice += prices[i];
  };

  return (
    <style.CartContainer>
      <Header title='My cart' products />

      <div className='content'>
        {productsCart.map((item) => (
          <ProductCart key={item.id} {...item}/>
        ))}
      </div>
      <TotalPrice priceCart={totalCartPrice}/>
    </style.CartContainer>
  )
}
export default Cart;
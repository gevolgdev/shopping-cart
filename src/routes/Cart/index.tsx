import { Header, TotalPrice } from '../../components';
import * as style from './style';
import { DataProps } from '../../types/types';
import { useSelector } from 'react-redux';
import { RootState } from '../../lib/redux/reducer';
import ProductCart from '../../components/ProductCart';

const Cart = () => {

  const productsCart: DataProps[] = useSelector((state: RootState) => state.addProductCart.slice(1));

  return (
    <style.CartContainer>
      <Header title='My cart' products />

      <div className='content'>
        {productsCart.map((item, index) => (
          <ProductCart key={item.id} product={item} index={index}/>
        ))}
      </div>
      <TotalPrice/>
    </style.CartContainer>
  )
}
export default Cart;
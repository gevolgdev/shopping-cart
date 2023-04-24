import { Header } from '../../components';
import * as style from './style';

const Cart = () => {
  return (
    <style.CartContainer>
      <Header
        title='Your cart'
        products
      />
    </style.CartContainer>
  )
}

export default Cart
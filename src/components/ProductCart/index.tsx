import { useState } from 'react';
import { TbTrashFilled } from 'react-icons/tb';
import { DataProps } from '../../types/types';
import { ProductCartContainer } from './style';
import { useDispatch } from 'react-redux';
import { totalPriceCartReducer } from '../../redux/reducers/morePricesSlice';
import { removeProductsCart } from '../../redux/reducers/productSlice';
import { lessPriceCartReducer } from '../../redux/reducers/lessPriceSlice';

interface Props {
  index: number;
  product: DataProps;
}

const ProductCart: React.FC<Props> = ({product, index}) => {

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
    dispatch(removeProductsCart(index + 1));
  }

  return (
    <ProductCartContainer>
      <img src={product.image}/>
      <div className='infos'>
        <span>{index} - {product.category}</span>
        <h1>{product.title}</h1>
        <div className='qtd'>
          <div className='amountInput'>
            <button className='trash' onClick={removeProductCart}>
              <TbTrashFilled/>
            </button>
            <button disabled={amount <= 1 ? true : false} onClick={amountLessPrice}>-</button>
            <span>{amount}</span>
            <button onClick={amountMorePrice}>+</button>
          </div>
          <p>R$ {priceProduct.toFixed(2)}</p>
        </div>
      </div>
    </ProductCartContainer>
  )
}

export default ProductCart;
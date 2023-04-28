import { useState } from 'react';
import { TbTrashFilled } from 'react-icons/tb';
import { DataProps } from '../../types/types';
import { ProductCartContainer } from './style';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { totalPriceCartReducer } from '../../redux/reducers/totalPriceCartReducer';
import { removeProductsCart } from '../../redux/reducers/addProductReducer';

interface Props {
  index: number;
  product: DataProps;
}

const ProductCart: React.FC<Props> = ({product, index}) => {

  const [amount, setAmount] = useState<number>(1);
  const priceProduct: number = product.price * amount;

  const dispatch = useDispatch();

  const amountPrice = () => {
    dispatch(totalPriceCartReducer(product.price));
    setAmount(prev => prev + 1);
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
            <button disabled={amount <= 1 ? true : false} onClick={() => setAmount(prev => prev - 1)}>-</button>
            <span>{amount}</span>
            <button onClick={amountPrice}>+</button>
          </div>
          <p>R$ {priceProduct.toFixed(2)}</p>
        </div>
      </div>
    </ProductCartContainer>
  )
}

export default ProductCart;
import { useState } from 'react';
import { DataProps } from '../../types/types';
import { ProductCartContainer } from './style';
import { useDispatch } from 'react-redux';
import { totalPriceCartReducer } from '../../redux/reducers/totalPriceCartReducer';

const ProductCart: React.FC<DataProps> = (props) => {

  const [amount, setAmount] = useState<number>(1);
  const priceProduct: number = props.price * amount;

  const dispatch = useDispatch();

  const amountPrice = () => {
    dispatch(totalPriceCartReducer(props.price));
    setAmount(prev => prev + 1);
  };

  return (
    <ProductCartContainer>
      <img src={props.image}/>
      <div className='infos'>
        <span>{props.category}</span>
        <h1>{props.title}</h1>
        <div className='qtd'>
          <div className='amountInput'>
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
import { useState } from 'react';
import { DataProps } from '../../types/types';
import { ProductCartContainer } from './style';

const ProductCart: React.FC<DataProps> = (props) => {

  const [amount, setAmount] = useState<number>(1);

  const priceProduct: number = props.price * amount;

  return (
    <ProductCartContainer>
      <img src={props.image}/>
      <div className='infos'>
        <h1>{props.title}</h1>
        <div className='qtd'>
          <div className='amountInput'>
            <button onClick={() => setAmount(prev => prev - 1)}>-</button>
            <span>{amount}</span>
            <button onClick={() => setAmount(prev => prev + 1)}>+</button>
          </div>
          <p>R$ {priceProduct.toFixed(2)}</p>
        </div>
      </div>
    </ProductCartContainer>
  )
}

export default ProductCart;
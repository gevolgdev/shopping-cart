import { TbTrashFilled } from 'react-icons/tb';
import { AmountProps } from '../../types/types';
import { ProductCartContainer } from './style';
import productsAmount from '../../utils/productsAmount';

const ProductCart: React.FC<AmountProps> = ({product, index}) => {

  const { ...utils } = productsAmount({product, index});

  return (
    <ProductCartContainer>
      <img src={product.image}/>
      <div className='infos'>
        <span>{product.category}</span>
        <h1>{product.title}</h1>
        <div className='qtd'>
          <div className='amountInput'>
            <button className='trash' onClick={utils.removeProductCart}>
              <TbTrashFilled/>
            </button>
            <button disabled={utils.amount <= 1 ? true : false} onClick={utils.amountLessPrice}>-</button>
            <span>{utils.amount}</span>
            <button onClick={utils.amountMorePrice}>+</button>
          </div>
          <p>R$ {utils.priceProduct.toFixed(2)}</p>
        </div>
      </div>
    </ProductCartContainer>
  )
}

export default ProductCart;
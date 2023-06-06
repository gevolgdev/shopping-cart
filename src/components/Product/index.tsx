import React from 'react'
import { ProductContainer, Button } from './style';
import { DataProps } from '../../types/types';
import addProducts from '../../utils/addProducts';


const Product: React.FC<DataProps> = (props) => {

  const { addProduct, notify } = addProducts();

  return (
    <ProductContainer>
      <img src={props.image}/>
      <div className='infos'>
        <div className="details">
          <span>{props.category}</span>
          <span>⭐ {props.rating.rate}</span>
        </div>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <p className='price'>
          R${props.price}
          <span>R$ {Math.ceil(props.price + 50)}</span>
        </p>
      </div>
      <Button onClick={() => (addProduct(props), notify())}>Add to cart</Button>
    </ProductContainer>
  )
}

export default Product
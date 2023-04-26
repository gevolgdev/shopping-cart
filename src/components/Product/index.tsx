import React from 'react'
import { ProductContainer, Button } from './style';
import { useDispatch } from 'react-redux';
import { addProductsCartReducer } from '../../redux/reducers/addProductReducer';
import { DataProps } from '../../types/types';
import { toast } from 'react-toastify';

const Product: React.FC<DataProps> = (props) => {

  const dispatch = useDispatch();

  const addProduct = (infos: DataProps): void => {
    dispatch(addProductsCartReducer(infos));
  };

  const notify = () => toast('Added to cart!');

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
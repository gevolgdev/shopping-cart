import { useState, useEffect } from 'react';
import api from '../../api'
import * as style from './style';
import { DataProps } from '../../types/types';
import Header from '../../components/Header';

const Products = () => {

  const [listProducts, setListProducts] = useState<DataProps[]>([])

  useEffect(() => {
    api.get('/products')
      .then((res) => setListProducts(res.data))
      .catch((err) => console.log(err))
  }, [])

  const addProduct = (infos: DataProps): void => {
    console.log(infos)
  }


  return (
    <style.ProductsContainer>

      <div className='content'>
        <Header
          title='Products'
        />

        <div className='grade'>
          {listProducts.map((item) => (
            <style.Product key={item.id}>
              <img src={item.image}/>
              <div className='infos'>
                <div className="details">
                  <span>{item.category}</span>
                  <span>⭐ {item.rating.rate}</span>
                </div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <p className='price'>
                  R${item.price}
                  <span>R$ {Math.ceil(item.price + 50)}</span>
                </p>
              </div>
              <style.Button onClick={() => addProduct(item)}>Adicionar ao carrinho</style.Button>
            </style.Product>
          ))}
        </div>
      </div>
    </style.ProductsContainer>
  )
};

export default Products;
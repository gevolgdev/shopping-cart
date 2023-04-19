import { useState, useEffect } from 'react';
import api from '../../api'
import * as style from './style';
import { DataProps } from '../../types/types';

const Products = () => {

  const [listProducts, setListProducts] = useState<DataProps[]>([])

  useEffect(() => {
    api.get('/products?limit=5')
      .then((res) => setListProducts(res.data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <style.ProductsContainer>

      <div className='content'>
        <style.Title>Products</style.Title>

        <div className='grade'>
          {listProducts.map((item) => (
            <style.Product key={item.id}>
              {item.title}
            </style.Product>
          ))}
        </div>
      </div>
    </style.ProductsContainer>
  )
};

export default Products;
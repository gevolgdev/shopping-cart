import { useState, useEffect } from 'react';
import api from '../../api'
import * as style from './style';
import { DataProps } from '../../types/types';
import Header from '../../components/Header';
import Product from '../../components/Product';


const Products = () => {

  const [products, setProducts] = useState<DataProps[]>([]);
  const [filter, setFilter] = useState<string>('');

  useEffect(() => {
    api.get('/products')
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err))
  }, []);

  const categoryProducts: DataProps[] = products.filter(list => list.category === filter);
  const listProducts: DataProps[] = filter ? categoryProducts : products;

  return (
    <style.ProductsContainer>

      <div className='content'>
        <Header
          title='Products'
          cart
        />

        <style.Categories>
          <button onClick={() => setFilter('')}>All products</button>
          <button onClick={() => setFilter(`men's clothing`)}>Men's clothing</button>
          <button onClick={() => setFilter('jewelery')}>Jewelery</button>
          <button onClick={() => setFilter('electronics')}>Electronics</button>
        </style.Categories>

        <div className='grade'>
          {listProducts.map((item) => (
            <Product
              key={item.id}
              title={item.title}
              category={item.category}
              rating={item.rating}
              description={item.description}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </style.ProductsContainer>
  )
};

export default Products;
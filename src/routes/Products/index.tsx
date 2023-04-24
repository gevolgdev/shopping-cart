import { useState, useEffect } from 'react';
import api from '../../api'
import * as style from './style';
import { DataProps } from '../../types/types';
import Header from '../../components/Header';

const Products = () => {

  const [products, setProducts] = useState<DataProps[]>([]);
  const [filter, setFilter] = useState<string>('');

  useEffect(() => {
    api.get('/products')
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err))
  }, []);

  const addProduct = (infos: DataProps): void => {
    console.log(infos);
  };

  const categoryProducts: DataProps[] = products.filter(list => list.category === filter);
  const listProducts: DataProps[] = filter ? categoryProducts : products;

  return (
    <style.ProductsContainer>

      <div className='content'>
        <Header
          title='Products'
        />

        <style.Categories>
          <button onClick={() => setFilter('')}>All products</button>
          <button onClick={() => setFilter(`men's clothing`)}>Men's clothing</button>
          <button onClick={() => setFilter('jewelery')}>Jewelery</button>
          <button onClick={() => setFilter('electronics')}>Electronics</button>
        </style.Categories>

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
              <style.Button onClick={() => addProduct(item)}>Add to cart</style.Button>
            </style.Product>
          ))}
        </div>
      </div>
    </style.ProductsContainer>
  )
};

export default Products;
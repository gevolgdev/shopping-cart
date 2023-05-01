import { useState, useEffect, ChangeEvent } from 'react';
import api from '../../api'
import * as style from './style';
import { DataProps } from '../../types/types';
import Header from '../../components/Header';
import Product from '../../components/Product';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Products = () => {

  const [products, setProducts] = useState<DataProps[]>([]);
  const [filter, setFilter] = useState<string>('');

  useEffect(() => {
    api.get('/products')
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err))
  }, []);

  const handleFilterProducts = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    let filter: string = '';

    switch(value) {
      case 'all':
        filter = ''
        break;
      case 'mens':
        filter = `men's clothing`;
        break;
      case 'jew':
        filter = 'jewelery';
        break;
      case 'electro':
        filter = 'electronics'
        break;
    }

    setFilter(filter);
  };

  const categoryProducts: DataProps[] = products.filter(list => list.category === filter);
  const listProducts: DataProps[] = filter ? categoryProducts : products;

  return (
    <style.ProductsContainer>

      <div className='content'>
        <Header
          title='Products'
          cart
        />
        <ToastContainer/>
        <style.Categories onChange={handleFilterProducts}>
          <option selected disabled value=''>Selecione uma categoria...</option>
          <option value='all'>All products</option>
          <option value='mens'>Men's clothing</option>
          <option value='jew'>Jewelery</option>
          <option value='electro'>Electronics</option>
        </style.Categories>
        
        <div className='grade'>
          {listProducts.map((item) => (
            <Product key={item.id} {...item}/>
          ))}
        </div>

      </div>
    </style.ProductsContainer>
  )
};

export default Products;
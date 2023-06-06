import { useState, useEffect } from 'react';
import api from '../service'
import { DataProps } from '../types/types';

const useProducts = () => {

  const [products, setProducts] = useState<DataProps[]>([]);

  useEffect(() => {
    api.get('/products')
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err))
  }, []);

  return products;
}

export default useProducts;
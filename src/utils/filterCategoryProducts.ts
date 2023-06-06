import { useState, ChangeEvent } from 'react'
import { DataProps } from '../types/types';
import useProducts from '../hook/useProducts';

const filterCategoryProducts = () => {

  const products = useProducts();
  const [filter, setFilter] = useState<string>('');

  const handleFilterProducts = (event: ChangeEvent<HTMLSelectElement>) => {
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


  return { handleFilterProducts, listProducts };
}

export default filterCategoryProducts
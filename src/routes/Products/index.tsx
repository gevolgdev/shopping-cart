import * as style from './style';
import { DataProps } from '../../types/types';
import Header from '../../components/Header';
import Product from '../../components/Product';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import filterCategoryProducts from '../../utils/filterCategoryProducts';

const Products = () => {

  const { handleFilterProducts, listProducts } = filterCategoryProducts();

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
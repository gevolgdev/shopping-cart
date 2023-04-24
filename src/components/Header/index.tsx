import { HeaderContainer } from "./style";
import { HiShoppingCart, HiHome } from 'react-icons/hi'
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  title: string;
  cart?: boolean;
  products?: boolean;
};

const Header: React.FC<HeaderProps> = (props) => {

  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <h1>{props.title}</h1>

      {props.cart && (
        <button onClick={() => navigate('/cart')}>
          <HiShoppingCart/>
        </button>
      )}

      {props.products && (
        <button onClick={() => navigate('/')}>
          <HiHome/>
        </button>
      )}

    </HeaderContainer>
  )
}

export default Header;
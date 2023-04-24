import { HeaderContainer } from "./style";
import { HiShoppingCart } from 'react-icons/hi'
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  title: string;
};

const Header: React.FC<HeaderProps> = (props) => {

  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <h1>{props.title}</h1>
      <button onClick={() => navigate('/cart')}>
        <HiShoppingCart/>
      </button>
    </HeaderContainer>
  )
}

export default Header;
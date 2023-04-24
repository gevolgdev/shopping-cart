import { HeaderContainer } from "./style";
import { HiShoppingCart } from 'react-icons/hi'

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <HeaderContainer>
      <h1>{props.title}</h1>
      <button>
        <HiShoppingCart/>
      </button>
    </HeaderContainer>
  )
}

export default Header;
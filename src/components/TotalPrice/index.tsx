import totalPrice from '../../utils/totalPrice';
import { TotalPriceContainer } from './style'

const TotalPrice = (): JSX.Element => {

  const { totalCartPrice } = totalPrice();

  return (
    <TotalPriceContainer>
      <div className="content">
        <h1>Total:</h1>
        <h1>R$ {totalCartPrice.toFixed(2)}</h1>
      </div>
    </TotalPriceContainer>
  )
}

export default TotalPrice;
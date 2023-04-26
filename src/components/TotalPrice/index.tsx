import React from 'react'
import { TotalPriceContainer } from './style'

interface PriceProps {
  priceCart: number;
}

const TotalPrice: React.FC<PriceProps> = (props) => {

  return (
    <TotalPriceContainer>
      <div className="content">
        <h1>Total:</h1>
        <h1>R$ {props.priceCart}</h1>
      </div>
    </TotalPriceContainer>
  )
}

export default TotalPrice;
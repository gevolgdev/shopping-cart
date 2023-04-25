import React from 'react'
import { DataProps } from '../../types/types'
import { ProductCartContainer } from './style'

const ProductCart: React.FC<DataProps> = (props) => {
  return (
    <ProductCartContainer>
      <h1>{props.title}</h1>
    </ProductCartContainer>
  )
}

export default ProductCart
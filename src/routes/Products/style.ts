import styled from 'styled-components';

export const ProductsContainer = styled.section`
  width: 1128px;
  margin: 0 auto;
  padding-top: 100px;

  .content {
    display: flex;
    flex-direction: column;
  }

  .grade {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 30px;
  }
`

export const Title = styled.h1`
  font-size: 2.5rem;
  color: white;
  margin-bottom: 40px;
`

export const Product = styled.div`
  display: flex;
  width: 300px;
  height: 300px;
  background: #404040;
  padding: 15px;
`
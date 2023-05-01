import styled from 'styled-components';

export const ProductsContainer = styled.section`
  width: 1128px;
  margin: 0 auto;
  padding-bottom: 100px;

  @media (max-width: 600px) {
    width: 100%;
    padding: 0 16px 100px;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .grade {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 35px;
  }
`

export const Categories = styled.select`
  width: 200px;
  margin-bottom: 30px;
  font-size: .9rem;
  padding: 5px;
  outline: none;
  border: none;
  border-radius: 4px;
  background: #f6fff8;


  @media (max-width: 600px) {
    gap: 10px;
    flex-direction: column;
  }
`;
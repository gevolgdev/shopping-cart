import styled from 'styled-components';

export const ProductsContainer = styled.section`
  width: 1128px;
  margin: 0 auto;
  padding-bottom: 100px;

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

export const Categories = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  gap: 50px;
  margin-bottom: 30px;

  button {
    width: 150px;
    background: #C7C7C7;
    color: #5e5e5e;
    padding: 10px;
    border: none;
    border-radius: 5px;
    outline: none;
    font-family: 'Inter', sans-serif;
    cursor: pointer;
    &:hover {
      background: #DDDDDD;
    }
  }
`;
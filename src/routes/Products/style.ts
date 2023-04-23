import styled from 'styled-components';

export const ProductsContainer = styled.section`
  width: 1128px;
  margin: 0 auto;
  padding: 100px 0;

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
  margin-bottom: 40px;
`

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  background: white;
  padding: 25px;
  filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08));

  img {
    width: 100%;
    height: 250px;
    object-fit: contain;
    margin-bottom: 15px;
  }
  .infos {
    display: flex;
    flex-direction: column;
    gap: 15px;
    height: 100%;

    .details {
      display: flex;
      flex-direction: row;
      width: 100%;
      justify-content: space-between;
      span { 
        color: #8e8e8e;
        font-size: .9rem;
      }
    }
    h2 {
      font-size: 1.3rem;
      color: #101010;
    }
    .price {
      font-size: 1.3rem;
      font-weight: 500;
      margin-top: auto;
      span {
        font-size: 1.3rem;
        margin-left: 20px;
        text-decoration: line-through;
        color: #5e5e5e;
      }
    }
  }
`
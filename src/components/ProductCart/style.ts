import styled from "styled-components";


export const ProductCartContainer = styled.div`
  width: 600px;
  display: flex;
  flex-direction: row;
  background: white;
  padding: 30px;
  border-radius: 16px;
  gap: 40px;

  @media (max-width: 600px) {
    flex-direction: column;
  }

  img {
    width: 100px;

    @media (max-width: 600px) {
      margin: 0 auto;
    }
  }
  
  .infos {
    display: flex;
    flex-direction: column;

    span {
      font-size: .9rem;
      color: #8e8e8e;
      margin-bottom: 5px;
    }

    h1 {
      font-size: 1.7rem;
      margin-bottom: 20px;
    }
    .qtd {
      display: flex;
      flex-direction: row;
      margin-top: auto;

      p {
        margin-left: 20px;
      }

      .amountInput {
        display: flex;
        flex-direction: row;
        gap: 5px;

        button {
          width: 20px;
          height: 20px;
          border-radius: 50px;
          border: none;
        }
        span {
          color: #101010;
          margin: 0 5px;
        }
        .trash {
          background: transparent;
          border: none;
          font-size: 1rem;
          color: #ef4444;
          margin-right: 10px;
        }
      }
    }
  }
`;
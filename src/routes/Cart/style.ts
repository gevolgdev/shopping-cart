import styled from "styled-components";

export const CartContainer = styled.section`
  width: 1128px;
  margin: 0 auto;
  padding-bottom: 100px;

  @media (max-width: 600px) {
    width: 100%;
    padding: 0 16px 100px;
  }

  .content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
  }
`;
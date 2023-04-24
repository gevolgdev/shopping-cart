import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 50px 0;

  h1 {
    font-size: 2.5rem;
  }

  button {
    background: transparent;
    border: none;
    outline: none;
    font-size: 2rem;
    cursor: pointer;
  }
`;
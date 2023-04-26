import styled from "styled-components";


export const TotalPriceContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  background: #9e9e9e;

  .content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 1128px;
    margin: 0 auto;

    h1 {
      color: #101010;
    }
  }
`;
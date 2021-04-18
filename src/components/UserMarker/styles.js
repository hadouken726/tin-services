import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 0.5rem;
  }

  div {
    p {
      margin: 0;
      font-size: 1rem;
    }

    p.city {
      margin: 0;
      font-size: 0.8rem;
    }
  }
`;

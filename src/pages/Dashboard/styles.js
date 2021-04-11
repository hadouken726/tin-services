import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.div`
  margin: 0 auto;
  position: relative;
  top: -40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  height: 1px;

  @media (max-width: 600px) {
    justify-content: flex-start;
    margin-left: -1rem;
  }

  @media (max-width: 500px) {
  }

  @media (max-width: 400px) {
  }
`;


export const Logo = styled.div`
  margin-right: 10px;

  @media (max-width: 390px) {
    margin-left: 10px;
  }
`;

export const LogoImage = styled.img`
  width: 200px;
  height: 55px;
  border: none;

  @media (max-width: 500px) {
    width: 150px;
    height: 45px;
  }

  @media (max-width: 370px) {
    width: 150px;
    height: 45px;
  }

  @media (max-width: 280px) {
    width: 120px;
    height: 45px;
  }
`;

export const LogoAvatar = styled.img`
  width: 55px;
  border: none;

  @media (min-width: 1920px) {
    
  }
`;

export const Avatar = styled.div`
  top: 10px;
  /* font-style: normal;
  font-weight: bold;
  font-size: 2rem; */

  color: var(--text);

  @media (min-width: 1920px) {
    /* font-size: 2.7rem; */
  }

  @media (max-width: 390px) {
    /* width: 65vw;
    font-size: 1.8rem; */
  }

  @media (max-width: 600px) {
    /* width: 51vw; */
  }
`;


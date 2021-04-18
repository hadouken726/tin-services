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
  display: flex;
  top: -10px;
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
  width: 100px;
  height: 35px;
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
  width: 30px;
  border: none;
  border-radius: 50%;

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

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  background-color: var(--blue-400);
  width: 12rem;
  height: 3rem;
  font-size: 1.2rem;
  border-radius: 2rem;
  color: var(--white);
  transition: filter 200ms ease-in;

  @media (max-width: 1190px) {
    width: 100%;
  }

  &:hover {
    filter: brightness(0.9);
  }
`;

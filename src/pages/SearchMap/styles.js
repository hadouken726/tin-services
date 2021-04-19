import styled from "styled-components";
import { FiHome, FiUser, FiSearch, FiMap } from "react-icons/fi";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.header`
  width: 100%;
  margin: 0 auto;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1080px) {
    flex-direction: column;
  }

  img {
    @media (max-width: 1080px) {
      width: 14rem;
      margin-bottom: 1rem;
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 15rem;

    button {
      border-radius: 50%;
      width: 4rem;
      height: 4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--glass-bg);
      background-color: var(--blue-400);
      border-top: 2px solid rgba(255, 255, 255, 0.5);
      border-left: 2px solid rgba(255, 255, 255, 0.5);
      box-shadow: 0 1px 3px 3px rgba(0, 0, 0, 0.2);
      transition: all 200ms ease-in;

      &:active {
        opacity: 0.6;
      }
    }
  }
`;

export const HomeIcon = styled(FiHome)`
  color: var(--blue-400);
  font-size: 2.5rem;
`;

export const UserIcon = styled(FiUser)`
  color: var(--blue-400);
  font-size: 2.5rem;
`;

export const MapIcon = styled(FiMap)`
  color: var(--blue-400);
  font-size: 2.5rem;
`;

export const Content = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;

  @media (max-width: 1080px) {
    flex-direction: column;
  }
`;

export const Map = styled.div`
  width: 60%;
  height: 100%;
  border-radius: 1rem;
  box-shadow: 0 2px 5px 5px rgba(0, 0, 0, 0.2);

  @media (max-width: 1080px) {
    width: 100%;
    height: 25rem;
    margin-bottom: 2rem;
  }
`;

export const UsersContent = styled.div`
  width: 35%;
  height: 100%;
  margin-left: auto;

  @media (max-width: 1080px) {
    width: 100%;
    margin: 0;
  }
`;

export const SearchBox = styled.div`
  width: 100%;
  height: 3rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    height: 100%;
    border-radius: 1rem;
    flex: 1;
    padding: 1rem;
    background: var(--glass-bg);
    opacity: 0.6;
    border-top: 2px solid rgba(255, 255, 255, 0.5);
    border-left: 2px solid rgba(255, 255, 255, 0.5);
    box-shadow: 0 1px 3px 3px rgba(0, 0, 0, 0.2);
    transition: all 200ms ease-in;
    font-size: 1rem;
    color: var(--white);
    font-weight: bold;

    &:hover {
      opacity: 1;
    }
  }

  button {
    width: 3rem;
    height: 100%;
    border-radius: 50%;
    margin-left: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--glass-bg);
    background-color: var(--blue-400);
    opacity: 0.6;
    border-top: 2px solid rgba(255, 255, 255, 0.5);
    border-left: 2px solid rgba(255, 255, 255, 0.5);
    box-shadow: 0 1px 3px 3px rgba(0, 0, 0, 0.2);
    transition: all 200ms ease-in;

    &:hover {
      opacity: 1;
    }

    @media (max-width: 1080px) {
      height: 42px;
      width: 42px;
    }
  }
`;

export const SearchIcon = styled(FiSearch)`
  font-size: 1rem;
  color: var(--white);
`;

export const UsersBox = styled.div`
  width: 100%;
  height: 90%;
  border-radius: 1rem;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 1080px) {
    width: 100%;
    height: 80%;
  }
`;

export const User = styled.div`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 1rem;
  background: var(--glass-bg);
  border-top: 2px solid rgba(255, 255, 255, 0.5);
  border-left: 2px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 1px 3px 3px rgba(0, 0, 0, 0.2);
  transition: all 200ms ease-in;

  display: flex;
  align-items: center;

  position: relative;

  @media (max-width: 1080px) {
    width: 100%;
    flex-direction: column;
  }

  div.user-avatar {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 1080px) {
      width: 100%;
      margin-bottom: 1rem;
    }

    img {
      width: 6rem;
      height: 6rem;
      border-radius: 50%;
      margin-bottom: 0.5rem;
      box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.5);
    }
  }

  div.user-description {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 2rem;

    @media (max-width: 1080px) {
      width: 100%;
      flex-direction: column;
    }

    h3,
    h4 {
      font-weight: bold;
    }

    h3 + span {
      margin-bottom: 1rem;
    }
  }

  button {
    position: absolute;
    width: 2rem;
    height: 2rem;
    top: 5%;
    right: 4%;
    background-color: lightblue;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    background: var(--glass-bg);
    border-top: 2px solid rgba(255, 255, 255, 0.5);
    border-left: 2px solid rgba(255, 255, 255, 0.5);
    box-shadow: 0 1px 3px 3px rgba(0, 0, 0, 0.2);
  }
`;

import styled from "styled-components";

export const DashBoardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 100%;
  margin: 10px auto;
  padding-bottom: 1rem;
  background: linear-gradient(
    103.6deg,
    rgba(255, 255, 255, 0.4) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );
  backdrop-filter: blur(42px);

  border-top: 2px solid rgba(255, 255, 255, 0.5);
  border-left: 2px solid rgba(255, 255, 255, 0.5);

  border-radius: 16px;

  h1 {
    color: var(--blue-400);
    font-size: 14px;
    font-weight: bold;

    @media (max-width: 990px) {
      font-size: 20px;
    }
  }

  @media (min-width: 700px) {
    justify-content: flex-start;
    width: 93%;
    height: 93%;
  }
`;

export const DivScrool = styled.div`
  position: relative;
  width: 97%;

  overflow-y: scroll;

  /* width */
  ::-webkit-scrollbar {
    width: 15px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const DashBoardContent = styled.div`
  width: 95%;
  flex-direction: row;
  padding: 10px;
  margin-bottom: 5px;

  background: rgba(38, 86, 181, 0.38);
  box-shadow: 4px 4px 24px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
`;

export const DivHeader = styled.div`
  position: relative;
  padding: 24px 25px 5px 25px;
  width: 100%;

  p {
    margin-left: 2px;
    vertical-align: center;
    font-size: 10px;
    color: var(--text);
  }

  div#searchGroup {
    position: relative;
    display: flex;
    margin-left: 70%;
    margin-top: -45px;
    width: 15rem;
  }

  input#search {
    padding: 12px 0 12px 12px;
    border-radius: 25px 0 0 25px;
    background: linear-gradient(
      103.6deg,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(255, 255, 255, 0.05) 100%
    );
    backdrop-filter: blur(42px);

    border-top: 2px solid rgba(255, 255, 255, 0.5);
    border-left: 2px solid rgba(255, 255, 255, 0.5);
    color: var(--text);
    /* flex: 1; */

    ::-webkit-input-placeholder {
      color: var(--blue-400);
    }

    /* @media (max-width: 983px) {
      width: 35rem;
    }
    @media (max-width: 970px) {
      width: 30rem;
    }

    @media (max-width: 955px) {
      width: 26rem;
    }

    @media (max-width: 878px) {
      width: 23rem;
    }

    @media (max-width: 838px) {
      width: 20rem;
    }

    @media (max-width: 778px) {
      width: 17rem;
    }

    @media (max-width: 635px) {
      width: 15rem;
    }

    @media (max-width: 597px) {
      width: 12rem;
    }

    @media (max-width: 555px) {
      width: 11rem;
      font-size: 0.7rem;
    }

    @media (max-width: 543px) {
      width: 10rem;
    }

    @media (max-width: 500px) {
      width: 9rem;
    }

    @media (max-width: 484px) {
      width: 8rem;
    } */
  }

  div#buttonSearch {
    background: linear-gradient(
      103.6deg,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(255, 255, 255, 0.05) 100%
    );
    backdrop-filter: blur(42px);

    border-top: 2px solid rgba(255, 255, 255, 0.5);
    border-left: 2px solid rgba(255, 255, 255, 0.5);
    border-radius: 0 25px 25px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15%;
    cursor: pointer;
  }
`;

export const LinkText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 25vw;
  height: 20px;
  font-size: 2.4rem;
  color: var(--text);
  margin-bottom: 20px;

  .ButtonNegisNegociationtrue {
    text-decoration: underline;
    cursor: pointer;
    color: white;
  }

  .ButtonNegisNegociationfalse {
    text-decoration: underline;
    cursor: pointer;
    color: blue;
  }
  .ButtonPostisNegociationfalse {
    text-decoration: underline;
    cursor: pointer;
    color: white;
  }

  .ButtonPostisNegociationtrue {
    text-decoration: underline;
    cursor: pointer;
    color: blue;
  }

  /* @media (max-width: 998px) {
    h1 {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 983px) {
    width: 50vw;
    h1 {
      font-size: 1.4rem;
    }
  }

  @media (max-width: 780px) {
    width: 45vw;
    h1 {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 604px) {
    width: 43vw;
    h1 {
      font-size: 1rem;
    }
  }

  @media (max-width: 604px) {
    display: block;
    text-align: center;
    h1 {
      font-size: 1.4rem;
    }
  }

  @media (max-width: 555px) {
    h1 {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 543px) {
    width: 40vw;
  }

  @media (max-width: 500px) {
    width: 37vw;
    h1 {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 450px) {
    width: 34vw;
  } */
`;

export const UserAvatarContainer = styled.div`
  width: 43px;
  margin-right: 20px;
`;

export const UserAvatar = styled.img`
  width: 43px;
  height: 43px;
  border-radius: 50%;
  border: none;
`;

import styled from "styled-components";
import { ImCheckboxChecked } from "react-icons/im";
import { FaWindowClose } from "react-icons/fa";

export const DivCardDashBoard = styled.div`
  display: flex;
  flex-direction: row;
  flex: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;

  h4 {
    font-size: 1rem;
  }
`;

export const UserAvatarContainer = styled.div`
  width: 35px;
  margin-right: 20px;
  h4 {
    text-align: center;
  }
`;

export const ProviderAvatar = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: none;
`;

export const DivName = styled.div`
  width: 15rem;
`;

export const DivDate = styled.div`
  width: 100px;
`;

export const DivStatus = styled.div``;

export const DivStars = styled.div``;

export const DivCompartilhar = styled.div``;

export const DivClose = styled.div``;

export const DivEdit = styled.div``;

export const Accept = styled(ImCheckboxChecked)`
  margin-left: 0.5rem;
  font-size: 2rem;
  color: #fff;
`;
export const Decline = styled(FaWindowClose)`
  margin-left: 0.5rem;
  font-size: 2rem;
  color: #fff;
`;

import {
  DivCardDashBoard,
  UserAvatarContainer,
  ProviderAvatar,
  DivName,
} from "./styled";

const CardDashBoard = ({ setUsers, users, setOrders, orders }) => {
  return (
    <DivCardDashBoard>
      <UserAvatarContainer>
        <ProviderAvatar src={'users.url-avatar'} draggable="false" />
      </UserAvatarContainer>

      <DivName width="150px">
        <h4>{users.name}</h4>
        <h4>{"users.cartegories.name"}</h4>
      </DivName>
    </DivCardDashBoard>
  );
};

export default CardDashBoard;

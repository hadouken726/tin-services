import {
  DivCardDashBoard,
  UserAvatarContainer,
  ProviderAvatar,
  DivName,
  DivDate,
  DivStatus,
} from "./styled";

const CardDashBoard = ({ setUsers, users, setOrders, orders }) => {
  return (
    <DivCardDashBoard>
      <UserAvatarContainer>
        <ProviderAvatar src={users.url_avatar} draggable="false" />
      </UserAvatarContainer>

      <DivName width="150px">
        <h4>{users.name}</h4>
        <h4>{"users.cartegories.name"}</h4>
      </DivName>

      <DivDate width="150px">
        <h4>{"users.orders.date"}</h4>
        <h4>{" "}</h4>
      </DivDate>

      <DivStatus width="150px">
        <h4>{"users.orders.status"}</h4>
        <h4>{" "}</h4>
      </DivStatus>
      

    </DivCardDashBoard>
  );
};

export default CardDashBoard;

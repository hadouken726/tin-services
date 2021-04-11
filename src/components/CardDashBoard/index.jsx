// import { useEffect } from "react";
import { DivCardDashBoard } from "./styled";

const CardDashBoard = ({ setUsers, users, setOrders, orders }) => {
  return (
    <DivCardDashBoard>
      <div width="150px">
        <h4>{`${users.name}   `}</h4>
        <h4>Anúncios</h4>
      </div>
    </DivCardDashBoard>
  );
};

export default CardDashBoard;

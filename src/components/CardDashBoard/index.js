import Stars from "../Stars";
import {
  DivCardDashBoard,
  UserAvatarContainer,
  ProviderAvatar,
  DivName,
  DivDate,
  DivStatus,
  DivStars,
  DivCompartilhar,
} from "./styled";

const CardDashBoard = ({ order=null }) => {
  // console.log("Array: ", orders);
return(

  
    <DivCardDashBoard >
      <UserAvatarContainer>
        <ProviderAvatar src={order.name} draggable="false" />
      </UserAvatarContainer>

      <DivName>
        <h4>{"order.user.name"}</h4>
        <h4>{"order.user.cartegoryId"}</h4>
      </DivName>

      <DivDate>
        <h4>{"users.orders.date"}</h4>
        <h4> </h4>
      </DivDate>

      <DivStatus>
        <h4>{"orders.orders[0].status"}</h4>
        <h4> </h4>
      </DivStatus>

      <DivStars>
        <Stars />
      </DivStars>

      <DivCompartilhar>
        <h4>Icon</h4>
      </DivCompartilhar>
      
    </DivCardDashBoard>

)

  // return(<h1>Oi</h1>)
};


export default CardDashBoard;

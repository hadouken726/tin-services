// import axios from "axios";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import api from "../../../../src/services/api";
import CardDashBoard from "../CardDashBoard";

import {
  DashBoardContainer,
  DashBoardContent,
  LinkText,
  DivHeader,
  DivScrool,
} from "./styled";
// import { useHistory } from "react-router";

const DashBoardNegsPosts = () => {
  const [input, setInput] = useState("");
  const [orders, setOrders] = useState([]);
  const [IsNegociation, setIsNegociation] = useState(true);
  // const [anuncio, setAnuncio] = useState({});  // ou Context API

  // const [open, setOpen] = useState(false);  // para o Modal do Cadastro de Anuncios e Avaliação

  // const history = useHistory();
  // const token = JSON.parse(localStorage.getItem("token"));

  let user = {
    id: 1,
    type: "provider",
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imd1c3Rhdm9AbWFpbC5jb20iLCJpYXQiOjE2MTgzMjQ1NTcsImV4cCI6MTYxODMyODE1Nywic3ViIjoiMiJ9.Qq2zMJVIexcYoC04gn8HDc-e77_LGVs64S6OY4CwxdQ",
  };

  useEffect(() => {
    (async () => {
      const { data } = await api.get(
        user.type === "provider" && IsNegociation
          ? `providers/${user.id}/orders?_expand=user`
          : user.type === "client" && IsNegociation
          ? `clients/${user.id}/orders?_expand=user`
          : user.type === "provider" && IsNegociation === false
          ? `providers/${user.id}/posts?_expand=user`
          : `providers/${user.id}/posts?_expand=user`,

        { headers: { Authorization: `Bearer ${user.token}` } }
      );
      console.log(data);
      setOrders(data);
    })();
  }, []);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const getNegociation = async () => {
    await setIsNegociation(true);
  };

  const getPosts = async () => {
    await setIsNegociation(false);
  };

  console.log(orders);

  return (
    <DashBoardContainer>
      <DivHeader>
        <LinkText>
          <h1
            className={`ButtonNegisNegociation${IsNegociation}`}
            onClick={getNegociation}
          >
            Minhas negociações
          </h1>
          <h1
            className={`ButtonPostisNegociation${IsNegociation}`}
            onClick={getPosts}
          >
            Anúncios
          </h1>
        </LinkText>
        <div>
          <div id="searchGroup">
            <input
              id="search"
              type="text"
              placeholder="Buscar Negociações"
              value={input}
              onChange={handleInput}
            />
            <div id="buttonSearch">
              <FaSearch size="20" color={"#ffffff"} />
            </div>
          </div>
        </div>
      </DivHeader>

      <DivScrool>
        {user.type === "provider" &&
          IsNegociation &&
          orders.map((order, index) => (
            <DashBoardContent key={index}>
              <CardDashBoard
                order={order}
                type={user.type}
                IsNegociation={IsNegociation}
              />
            </DashBoardContent>
          ))}

        {user.type === "client" &&
          IsNegociation &&
          orders
            .filter((order) =>
              order.user.name?.toLowerCase().includes(input.toLowerCase())
            )
            .sort((a, b) => a.user.name - b.user.name)
            .map((order, index) => (
              <DashBoardContent key={index}>
                <CardDashBoard
                  order={order}
                  type={user.type}
                  IsNegociation={IsNegociation}
                />
              </DashBoardContent>
            ))}

        {user.type === "provider" &&
          IsNegociation === false &&
          orders.map((order, index) => (
            <DashBoardContent key={index}>
              <CardDashBoard
                order={order}
                type={user.type}
                IsNegociation={IsNegociation}
              />
            </DashBoardContent>
          ))}

        {user.type === "client" &&
          IsNegociation === true &&
          orders.map((order, index) => (
            <DashBoardContent key={index}>
              <CardDashBoard
                order={order}
                type={user.type}
                IsNegociation={IsNegociation}
              />
            </DashBoardContent>
          ))}
      </DivScrool>
    </DashBoardContainer>
  );
};

export default DashBoardNegsPosts;

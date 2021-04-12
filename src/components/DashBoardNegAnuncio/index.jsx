// import axios from "axios";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import api from "../../../src/services/api";
import CardDashBoard from "../CardDashBoard";

import {
  DashBoardContainer,
  DashBoardContent,
  LinkText,
  DivHeader,
} from "./styled";
// import { useHistory } from "react-router";

const DashBoardNegAnuncio = () => {
  const [input, setInput] = useState("");
  const [orders, setOrders] = useState([]); // ou Context API
  // const [anuncio, setAnuncio] = useState({});  // ou Context API

  // const [open, setOpen] = useState(false);  // para o Modal do Cadastro de Anuncios e Avaliação

  // const history = useHistory();
  // const token = JSON.parse(localStorage.getItem("token"));  // Nosso token

  let user = {
    id: 1,
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVkdUBtYWlsLmNvbSIsImlhdCI6MTYxODI0NjM3MSwiZXhwIjoxNjE4MjQ5OTcxLCJzdWIiOiIxIn0.c2zM5tpUuerCe1GmT63TrtVsY57t1nqdDqcvAxeKFdE",
  };

  // https://tin-services-api.herokuapp.com/users?_embed=orders&_embed=avaliations&_embed=categories
  // https://tin-services-api.herokuapp.com/users/1?_embed=orders&_embed=avaliations&_embed=categories

  // const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await api.get(
        `providers/${user.id}/orders?_expand=user`,
        { headers: { Authorization: `Bearer ${user.token}` } }
      );
      console.log(data);
      setOrders(data);
    })();
  }, []);

  const handleInput = (e) => {
    setInput(e.target.value);
  };
  console.log(orders);

  return (
    <DashBoardContainer>
      <DivHeader>
        <LinkText>
          <h1>Minhas negociações</h1>
          <h1>Anúncios</h1>
        </LinkText>
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
      </DivHeader>

      {orders.map((order, index) => (
        <DashBoardContent>
          <CardDashBoard key={index} order={order} />
        </DashBoardContent>
      ))}
      
    </DashBoardContainer>
  );
};

export default DashBoardNegAnuncio;

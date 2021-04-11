// import axios from "axios";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import api from "../../../src/services/api";
import CardDashBoard from "../CardDashBoard"

import {
  DashBoardContainer,
  DashBoardContent,
  LinkText,
  DivHeader,
} from "./styled";
// import CardDashBoard from "../CardDashBoard";
// import { useHistory } from "react-router";

const DashBoardNegAnuncio = () => {
  const [input, setInput] = useState("");
  const [orders, setOrders] = useState({}); // ou Context API
  // const [anuncio, setAnuncio] = useState({});  // ou Context API

  // const [open, setOpen] = useState(false);  // para o Modal do Cadastro de Anuncios e Avaliação

  // const history = useHistory();
  // const token = JSON.parse(localStorage.getItem("token"));  // Nosso token

  let user = {
    id: 3,
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hcmNlbGluaG9AbWFpbC5jb20iLCJpYXQiOjE2MTgxNzI0NjIsImV4cCI6MTYxODE3NjA2Miwic3ViIjoiMyJ9.6sZDhFpBtk4_5Q3MtOA49j3Y5NmGTxbNja0-mTD2fGc",
  };

  // https://tin-services-api.herokuapp.com/users?_embed=orders&_embed=avaliations&_embed=categories
  // https://tin-services-api.herokuapp.com/users/1?_embed=orders&_embed=avaliations&_embed=categories

  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const {
        data,
      } = await api.get(
        `users/${user.id}?_embed=orders&_embed=avaliations&_embed=categories`,
        { headers: { Authorization: `Bearer ${user.token}` } }
      );
      console.log(data);
      // console.log(data.id);
      // console.log(data.orders);
      setUsers(data);
      setOrders(data.orders);
    })();
  }, []);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      {/* <Modal handleClose={handleClose} open={open}>
        <CardDashBoard anuncio={anuncio} close={handleClose} />
      </Modal> */}

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

        <DashBoardContent>
          <CardDashBoard setUsers={setUsers} users={users} setOrders={setOrders} orders={orders} />
        </DashBoardContent>
        
      </DashBoardContainer>
    </>
  );
};

export default DashBoardNegAnuncio;

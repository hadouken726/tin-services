// import axios from "axios";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import api from "../../../../src/services/api";
import CardDashBoard from "../CardDashBoard";
// import { useHistory } from "react-router";
import { useUser } from "../../../contexts/User";
import { categories } from "../../../utils/categories";
import { getId, getToken } from "../../../services/auth";

import {
  DashBoardContainer,
  DashBoardContent,
  LinkText,
  DivHeader,
  DivScrool,
} from "./styled";

const DashBoardNegsPosts = () => {
  const { user, setUser } = useUser({});
  const userId = getId();
  const [input, setInput] = useState("");
  const [orders, setOrders] = useState([]);
  const [IsNegociation, setIsNegociation] = useState(true);

  let urlPost = "";
  if (IsNegociation) {
    if (user.type === "provider") {
      urlPost = `orders/?providerId=${Number(userId)}`;
    } else {
      urlPost = `orders/?userId=${Number(userId)}`;
    }
  } else {
    if (user.type === "provider") {
      urlPost = `posts/?providerId=${Number(userId)}`;
    } else {
      urlPost = `posts/?userId=${Number(userId)}`;
    }
  }

  const getDados = async () => {
    if (user) {
      setOrders([]);
      (async () => {
        const { data } = await api.get(urlPost, {
          headers: { Authorization: `Bearer ${getToken()}` },
        });
        // console.log(`Type:${user.type} and ${IsNegociation}`, data);
        setOrders(data);
      })();
      urlPost = "";
    }
  };
  // const history = useHistory();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get(`users/${userId}`, {
          headers: { Authorization: "Bearer " + getToken() },
        });
        // console.log(data);
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      getDados();
    })();
  }, [IsNegociation, user]);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const getNegociation = async () => {
    await setIsNegociation(true);
  };

  const getPosts = async () => {
    await setIsNegociation(false);
  };

  return (
    <DashBoardContainer>
      <DivHeader>
        <LinkText>
          <div>
            <h1
              className={`ButtonNegisNegociation${IsNegociation}`}
              onClick={getNegociation}
            >
              Minhas negociações
            </h1>
          </div>
        </LinkText>
        <LinkText>
          <div>
            <h1
              className={`ButtonPostisNegociation${IsNegociation}`}
              onClick={getPosts}
            >
              Anúncios
            </h1>
          </div>
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
        {user.type === "provider" && // CARDS NEGOCIATION
          IsNegociation &&
          orders.map((order, index) => (
            <DashBoardContent key={index}>
              <CardDashBoard
                order={order}
                user={user}
                type={user.type}
                IsNegociation={IsNegociation}
                orders={orders}
                setOrders={setOrders}
              />
            </DashBoardContent>
          ))}

        {user.type === "client" && // NEGOCIATION
          IsNegociation &&
          orders.map((order, index) => (
              <DashBoardContent key={index}>
                <CardDashBoard
                  order={order}
                  orders={orders}
                  setOrders={setOrders}
                  user={user}
                  type={user.type}
                  IsNegociation={IsNegociation}
                />
              </DashBoardContent>
            ))}

        {user.type === "provider" && // CARDS NEGOCIATION
          IsNegociation === false &&
          orders.map((order, index) => (
            <DashBoardContent key={index}>
              <CardDashBoard
                order={order}
                user={user}
                type={user.type}
                IsNegociation={IsNegociation}
              />
            </DashBoardContent>
          ))}

        {user.type === "client" && // NEGOCIATION
          IsNegociation === false &&
          orders
            // .filter((order) =>
            //   order.user.name?.toLowerCase().includes(input.toLowerCase())
            // )
            // .sort((a, b) => a.user.name - b.user.name)
            .map((order, index) => (
              <DashBoardContent key={index}>
                <CardDashBoard
                  order={order}
                  user={user}
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

import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import {
  DashBoardContainer,
  Link_,
  DivHeader,
} from "./styled";
// import CardDashBoard from "../CardDashBoard";
// import { useHistory } from "react-router";

const DashBoardNegAnuncio = () => {
  // const [negociations, setNegociations] = useState([]); // ou Context API
  // const [anuncios, setAnuncios] = useState([]); // ou Context API
  
  const [input, setInput] = useState("");
  // const [negociation, setNegociation] = useState({});  // ou Context API
  // const [anuncio, setAnuncio] = useState({});  // ou Context API

  // const [open, setOpen] = useState(false);  // para o Modal do Cadastro de Anuncios e Avaliação

  // const history = useHistory();
  // const token = JSON.parse(localStorage.getItem("token"));  // Nosso token


  useEffect(() => {
    // if (!token) {
    //   history.push("login");
    // }
    // dispatch(getNegociationsThunk("https://tin-services-api.herokuapp.com/negociations")); // ou Context API

    // // eslint-disable-next-line react-hooks/exhaustive-deps
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
          <Link_>
            <h1>Minhas negociações</h1>
            <h1>Anúncios</h1>
          </Link_>
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

        {/* <DashBoardContent>
          // CardDashBoards
        </DashBoardContent> */}

      </DashBoardContainer>
    </>
  );
};

export default DashBoardNegAnuncio;

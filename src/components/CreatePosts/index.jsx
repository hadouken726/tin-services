import React, { useEffect, useState } from "react";
import { Container, DivBox, Button } from "./styled";

export default function ComboBox() {
  const [categoryId, setCategoryId] = useState(2);
  const [desc, setDesc] = useState("");
  const [post, setPost] = useState({});

  const status = "active";
  const dateNow = new Date();

  const handleCategoryIdChange = (e) => {
    setCategoryId(e.target.value);
    // console.log(categoryId);
  };

  const handleDescChange = (e) => {
    setDesc(e.target.value);
    // console.log(desc);
  };

  const onSubmit = (data) => {
    data.preventDefault();
    setPost({
      userId: 1,
      categoryId: categoryId,
      desc: desc,
      status: status,
      changedAt: dateNow,
    }); // valor cliente logado
  };

  useEffect(() => {
    if (JSON.stringify(post) !== "{}") {
      console.log(post);
    }
    if (JSON.stringify(post) !== "{}" && post.desc === "") {
      console.log("Favor digitar uma descrição !");
    }
    if (JSON.stringify(post) !== "{}" && post.desc !== "") {
      console.log("Anúncio enviado com sucesso !");
      setDesc("");
    }
  }, [post]);

  return (
    <Container>
      <DivBox>
        <form onSubmit={onSubmit}>
          <h1>Anúncio</h1>

          <label>
            Categoria:
            <select value={categoryId} onChange={handleCategoryIdChange}>
              <option value="1">jardinagem</option>
              <option value="2">diarista</option>
            </select>
          </label>

          <h2>Tipo de Serviço</h2>

          <textarea
            style={{ width: "450px", height: "200px" }}
            placeholder={"Digite um Anúncio..."}
            id={"desc"}
            name={"desc"}
            rows={6}
            value={desc}
            onChange={handleDescChange}
          ></textarea>
          <br />
          <Button>Enviar anúncio</Button>
        </form>
      </DivBox>
    </Container>
  );
}

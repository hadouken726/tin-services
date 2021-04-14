import React, { useEffect, useState } from "react";

export default function CreatePosts() {
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

  const onSubmit = async (data) => {
    data.preventDefault();
      setPost({
        userId: 1, //valor do id logado
        categoryId: categoryId,
        desc: desc,
        status: status,
        changedAt: dateNow,
      }); 
  };

  useEffect(() => {
    if(post) {
      console.log(post);
    }
  },[post])

  return (
    <form onSubmit={onSubmit}>
      <h3>Anúncio</h3>

      <label>
        Categoria:
        <select value={categoryId} onChange={handleCategoryIdChange}>
          <option value="1">jardinagem</option>
          <option value="2">diarista</option>
        </select>
      </label>

      <h3>Tipo de Serviço</h3>

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
      <input type="submit" value="Submit" />
    </form>
  );

}

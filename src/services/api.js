import axios from "axios";

const api = axios.create({
  baseURL: "https://tin-services-api.herokuapp.com",
});

export default api



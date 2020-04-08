import axios from "axios";

const api = axios.create({
  baseURL: "https://react-my-burger-ee3e9.firebaseio.com/"
});

export default api;

import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000", // change to your deployed backend URL later
});

export default instance;

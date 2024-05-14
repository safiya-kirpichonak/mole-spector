import axios from "axios";

const $host = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 120000,
});

export { $host };

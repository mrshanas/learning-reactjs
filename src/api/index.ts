import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8000/api/v1" });

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    //@ts-ignore
    req.headers.authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;

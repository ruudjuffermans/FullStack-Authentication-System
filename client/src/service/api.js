// axiosInstance.js
import axios from "axios";
import TokenStore from "./tokenStore";

const store = new TokenStore();

const axiosInstance = axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    "Content-Type": "application/json",
  },
});

const api = {
  register: (values) => axiosInstance.post('/api/register', values),
  activateAccount: (values) => axiosInstance.post('/api/activate-account', values),
  login: (values) => axiosInstance.post('/login', values),
  refreshToken: (values) => axiosInstance.post('/refresh-token', values),
  forgotPassword: (values) => axiosInstance.post('/forgot-password', values),
  resetPassword: (values) => axiosInstance.post('/reset-password', values),
};


export default api;

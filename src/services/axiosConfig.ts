import axios, { AxiosInstance } from "axios";
import md5 from 'md5';

const publicKey = process.env.REACT_APP_API_KEY || "";
const privateKey = process.env.REACT_APP_PRIVATE_KEY || "";
const baseUrl = process.env.REACT_APP_URL_BASE || "";

const ts = new Date().getTime();
const hash = md5(ts + privateKey + publicKey);

const axiosInstance: AxiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    apikey: publicKey,
    ts,
    hash,
  };
  return config;
});

export default axiosInstance;

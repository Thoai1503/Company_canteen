import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:8000/Thoai-pro-spring",
  withCredentials: true,
});

http.interceptors.request.use(
  (config) => {
    if (typeof window !== undefined) {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default http;

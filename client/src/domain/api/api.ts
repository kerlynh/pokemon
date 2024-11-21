import axios from "axios";

const api = (url: string) => {
  const axiosInstance = axios.create({
    baseURL: url,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return axiosInstance;
};

export default api;

import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

api.interceptors.request.use((config) => {
  config.headers["x-tenant-id"] = process.env.NEXT_PUBLIC_TENANT_ID;
  return config;
});

export default api;

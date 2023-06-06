import axios, {AxiosInstance} from 'axios';

const api: AxiosInstance = axios.create({
  baseURL: 'https://fakestoreapi.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
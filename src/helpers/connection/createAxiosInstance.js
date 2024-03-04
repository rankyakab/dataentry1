import axios, { AxiosInstance } from 'axios';
import Cookies from 'js-cookie';

const createAxiosInstance = (customHeaders = {}) => {
  const defaultHeaders = {
    'Content-Type': 'application/json',
  };

 
  const headers = {
    ...defaultHeaders,
    ...customHeaders,
  };
  const instance = axios.create({
    // baseURL: "https://kopashun.com/api",
    baseURL: 'https://data-app.com.ng/api',
    timeout: 15000, // Set the timeout to 15 seconds (15000 milliseconds)
    headers,
  })
  // Adding a request interceptor to include the token in the headers
  instance.interceptors.request.use(
    (config) => {
      const token = Cookies.get('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return instance;
};

export default createAxiosInstance;
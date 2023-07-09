import axios from 'axios';

// Create a custom instance of Axios
const axiosInstance = axios.create({
  baseURL: 'https://api.thecatapi.com/v1/',
  headers: {
    'x-api-key': 'live_4An3MnDfGmkKrZ1Rpyfxim78TNsfozqMAIjaYCHKlMTCChnOq5uzvdexkUm02Mio',
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// Response interceptor for API calls
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      return axiosInstance(originalRequest);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;

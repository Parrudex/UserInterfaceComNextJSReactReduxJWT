import axios from 'axios';
import { APP_BASE_URL } from 'src/config';

// ----------------------------------------------------------------------

const axiosInstance = axios.create({ baseURL: APP_BASE_URL || '' });

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export default axiosInstance;

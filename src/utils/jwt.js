import jwtDecode from 'jwt-decode';
// routes
import { PATH_AUTH } from '../routes/paths';
//
import axios from './axios';

// ----------------------------------------------------------------------

const isValidToken = (accessToken) => {
  if (!accessToken) {
    return false;
  }
  const decoded = jwtDecode(accessToken);

  const currentTime = Date.now() / 1000;

  return decoded.exp > currentTime;
};

const handleTokenExpired = (exp) => {
  
  let expiredTimer;

  const currentTime = Date.now();

  // Test token expires after 10s
  // const timeLeft = currentTime + 10000 - currentTime; // ~10s
  const timeLeft = exp * 1000 - currentTime;

  clearTimeout(expiredTimer);

  expiredTimer = setTimeout(() => {
    // eslint-disable-next-line no-alert
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userId');
    localStorage.removeItem('claims');
    localStorage.removeItem('userName');
    window.location.href = PATH_AUTH.login;
  }, timeLeft);
};

const setSession = ({accessToken, userId, claims, userName}) => {
  if (accessToken) {
    localStorage.setItem('accessToken', accessToken);
    if(userId != null)
      localStorage.setItem('userId', userId);
    if(claims)
      localStorage.setItem('claims', claims);
    if(userName)
      localStorage.setItem('userName', userName);  
    //axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    // This function below will handle when token is expired
    const { exp } = jwtDecode(accessToken); // ~3 days by minimals server
    handleTokenExpired(exp);
  } else {
    localStorage.removeItem('customerName')
    localStorage.removeItem('userName')
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userId');
    localStorage.removeItem('claims');
    delete axios.defaults.headers.common.Authorization;
  }
};

export { isValidToken, setSession };

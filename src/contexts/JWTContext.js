import { createContext, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
// utils
import axios from '../utils/axios';
import { isValidToken, setSession } from '../utils/jwt';
import { AUTH_URL } from 'src/config';
import { deleteUserXTempCustomerByUserId, getUser, getUserByEmail, getUserXTempCustomerByUserId } from 'src/api';
import { setCustomerName } from 'src/layouts/dashboard/header/AccountPopover';
var qs = require('qs');
// ----------------------------------------------------------------------

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

const handlers = {
  INITIALIZE: (state, action) => {
    const { isAuthenticated, user } = action.payload;
    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user,
    };
  },
  LOGIN: (state, action) => {
    const { user } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user,
    };
  },
  LOGOUT: (state) => ({
    ...state,
    isAuthenticated: false,
    user: null,
  }),
  REGISTER: (state, action) => {
    const { user } = action.payload;
    return {
      ...state,
      isAuthenticated: true,
      user,
    };
  },
};

const reducer = (state, action) => (handlers[action.type] ? handlers[action.type](state, action) : state);

const AuthContext = createContext({
  ...initialState,
  method: 'jwt',
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  register: () => Promise.resolve(),
});

// ----------------------------------------------------------------------

AuthProvider.propTypes = {
  children: PropTypes.node,
};

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const initialize = async () => {
      try {
        const accessToken = typeof window !== 'undefined' ? localStorage.getItem('accessToken') : '';
        const userId = typeof window !== 'undefined' ? localStorage.getItem('userId') : '';
        const claims = typeof window !== 'undefined' ? localStorage.getItem('claims') : '';
        const userName = typeof window !== 'undefined' ? localStorage.getItem('userName') : '';
        if (accessToken && isValidToken(accessToken) && userId) {
          setSession({accessToken, userId, claims, userName });
          // const response = await axios.get('/api/account/my-account');
          getUserByEmail(userName).then((response)=> {
            setCustomerName(null)
            dispatch({
              type: 'INITIALIZE',
              payload: {
                isAuthenticated: true,
                user: response.data
              },
            });
          }).catch((err)=>{
            console.log(err)
            dispatch({
              type: 'INITIALIZE',
              payload: {
                isAuthenticated: false,
                user: null,
              },
            });
          })
          // const { user } = response.data;
        } else {
          dispatch({
            type: 'INITIALIZE',
            payload: {
              isAuthenticated: false,
              user: null,
            },
          });
        }
      } catch (err) {
        console.error(err);
        dispatch({
          type: 'INITIALIZE',
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
    };

    initialize();
  }, []);


  const login = async (username, password) => {
    const config = {
      method: 'post',
      url: AUTH_URL,
      headers: { 
        'Authorization': 'Basic d2VicGVybWl0OndlYnBlcm1pdDEyMw==', 
        'Content-Type': 'application/x-www-form-urlencoded',
       
      },
      data : qs.stringify({username,password, 'grant_type': 'password'})
    };
    const response = await axios(config)
    // .then((response)=>{
        console.log(response)
        const { access_token, user, claims} = response.data;
        setSession({accessToken: access_token, userId: user.id, claims, userName: user.email});
        setCustomerName(user.customerName)
        dispatch({
          type: 'LOGIN',
          payload: {
            user,
          }
        // }).catch((err) => {
        //   console.log(err)
        //   throw err
        // });
    });
   
  };

  const register = async (email, password, firstName, lastName) => {
    const response = await axios.post('/api/account/register', {
      email,
      password,
      firstName,
      lastName,
    });
    const { accessToken, user } = response.data;

    localStorage.setItem('accessToken', accessToken);
    dispatch({
      type: 'REGISTER',
      payload: {
        user,
      },
    });
  };

  const logout = async () => {
    deleteUserXTempCustomerByUserId(localStorage.getItem('userId'))
    setSession({accessToken:null, userId:null, claims:null, userName:null});
    dispatch({ type: 'LOGOUT' });
  };
 
  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: 'jwt',
        login,
        logout,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };

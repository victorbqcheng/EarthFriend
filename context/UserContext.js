import React, { createContext, useReducer } from 'react';
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserState from '../model/UserState';
const { apiUrl } = Constants.expoConfig.extra;

export const UserContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER_TOKEN':
      return {
        ...state,
        user: {
          ...state.user,
          token: action.payload,
        },
        error: '',
      };
    case 'SET_USER_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    case 'REMOVE_USER_TOKEN':
      return {
        ...state,
        user: {
          ...state.user,
          token: '',
        },
      };
    default:
      return state;
  }
};

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, UserState);

  async function loginUser(username, password) {
    try {
      const data = await fetch(
        `${apiUrl}/api/login?username=${username}&password=${password}`,
        {
          method: 'POST',
        },
      );
      const result = await data.json();

      if (result) {
        dispatch({ type: 'SET_USER_TOKEN', payload: result.token });
        await AsyncStorage.setItem('token', result.token);
      }
    } catch (e) {
      dispatch({ type: 'SET_USER_ERROR', payload: e.message });
    }
  }

  async function logoutUser() {
    try {
      AsyncStorage.removeItem('token');
      dispatch({ type: 'REMOVE_USER_TOKEN' });
    } catch (error) {
    }
  }

  async function getToken() {
    try {
      const token = await AsyncStorage.getItem('token');
      if(token !== null) {
        dispatch({type:'SET_USER_TOKEN', payload:token});
      }
    } catch (error) {
      
    }
  }

  return (
    <UserContext.Provider value={{ ...state, loginUser, logoutUser, getToken }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;

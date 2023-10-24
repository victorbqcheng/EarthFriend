import React, { useContext } from 'react';
import { createContext, useReducer } from 'react';
import Constants from 'expo-constants';
import NewsState from '../model/NewsState';
import UserContext from './UserContext';

// const { apiUrl } = Constants.expoConfig.extra;
const apiUrl = "https://earthfriendapi20231014113817.azurewebsites.net/";

export const NewsContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_NEWSLIST_SUCCESS':
      return {
        ...state,
        newsList: action.payload,
        loading: false,
      };
    case 'GET_NEWSLIST_ERROR':
      return {
        ...state,
        newsList: [],
        loading: false,
        error: action.payload,
      };
    case 'GET_NEWS_SUCCESS':
      console.log('GET_NEWS_SUCCESS');
      return {
        ...state,
        news: action.payload,
        loading: false,
      };
    case 'GET_NEWS_ERROR':
      return {
        ...state,
        news: {},
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const NewsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, NewsState);
  
  const { user } = useContext(UserContext);

  async function fetchNewsList() {
    try {
      const data = await fetch(`${apiUrl}/api/news`);
      const result = await data.json();

      if (result) {
        dispatch({ type: 'GET_NEWSLIST_SUCCESS', payload: result });
      }
    } catch (e) {
      dispatch({ type: 'GET_NEWSLIST_ERROR', payload: e.message });
    }
  }

  async function fetchNews(newsId) {
    try {
      const data = await fetch(`${apiUrl}/api/news/${newsId}`);
      const result = await data.json();

      if (result) {
        dispatch({ type: 'GET_NEWS_SUCCESS', payload: result });
      }
    } catch (e) {
      dispatch({ type: 'GET_NEWS_ERROR', payload: e.message });
    }
  }

  return (
    <NewsContext.Provider value={{ ...state, fetchNewsList, fetchNews }}>
      {children}
    </NewsContext.Provider>
  );
};

export default NewsContext;

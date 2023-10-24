import React, { useContext } from 'react';
import { createContext, useReducer } from 'react';
import Constants from 'expo-constants';
import PostsState from '../model/PostsState';
import UserContext from './UserContext';

// const { apiUrl } = Constants.expoConfig.extra;
const apiUrl = "https://earthfriendapi20231014113817.azurewebsites.net/";

export const PostsContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_POSTS_SUCCESS':
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    case 'GET_POSTS_ERROR':
      return {
        ...state,
        posts: [],
        loading: false,
        error: action.payload,
      };
    case 'GET_POST_SUCCESS':
      console.log('GET_POST_SUCCESS');
      return {
        ...state,
        post: action.payload,
        loading: false,
      };
    case 'GET_POST_ERROR':
      return {
        ...state,
        post: {},
        loading: false,
        error: action.payload,
      };
    case 'ADD_POST_SUCCESS':
      return {
        ...state,
        posts: [...state.posts, action.payload],
        loading: false,
      };
    default:
      return state;
  }
};

export const PostsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, PostsState);
  const { user } = useContext(UserContext);

  async function fetchPosts() {
    try {
      const data = await fetch(`${apiUrl}/api/posts`);
      const result = await data.json();

      if (result) {
        dispatch({ type: 'GET_POSTS_SUCCESS', payload: result });
      }
    } catch (e) {
      dispatch({ type: 'GET_POSTS_ERROR', payload: e.message });
    }
  }

  async function fetchPost(postId) {
    try {
      const data = await fetch(`${apiUrl}/api/posts/${postId}`);
      const result = await data.json();

      if (result) {
        dispatch({ type: 'GET_POST_SUCCESS', payload: result });
      }
    } catch (e) {
      dispatch({ type: 'GET_POST_ERROR', payload: e.message });
    }
  }

  async function addPost(imageUrl, description) {
    try {
      console.log('enter addpost');
      console.log('user.token:' + user.token);
      const data = await fetch(`${apiUrl}/api/posts`, {
        method: 'POST',
        headers: {
          authorization: user && user.token ? `Bearer ${user.token}` : '',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          imageUrl: imageUrl,
          description,
        }),
      });
      const result = await data.json();
      console.log('addpost result:' + result);
      if (result) {
        dispatch({
          type: 'ADD_POST_SUCCESS',
          payload: {
            id: result.id,
            imageUrl,
            description,
          },
        });
      }
    } catch {}
  }

  return (
    <PostsContext.Provider value={{ ...state, fetchPosts, fetchPost, addPost }}>
      {children}
    </PostsContext.Provider>
  );
};

export default PostsContext;

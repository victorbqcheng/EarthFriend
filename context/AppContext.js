import React from 'react';
import { PostsContextProvider } from './PostsContext';
import { UserContextProvider } from './UserContext';
import { NewsContextProvider } from './NewsContext';

const AppContext = ({ children }) => {
  return (
    <UserContextProvider>
      <NewsContextProvider>
        <PostsContextProvider>{children}</PostsContextProvider>
      </NewsContextProvider>
    </UserContextProvider>
  );
};

export default AppContext;

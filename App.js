import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome } from '@expo/vector-icons';
import { Alert, StyleSheet, Text, View } from 'react-native';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
  useNavigation,
} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useContext, useEffect } from 'react';

import { navigationRef } from './routing';
import Login from './view/Login';
import AppContext from './viewmodel/AppContext';
import UserContext from './viewmodel/UserContext';
import Friends from './view/Friends';
import Posts from './view/Posts';
import PostForm from './view/PostForm';
import Profile from './view/Profile';
import PostDetail from './view/PostDetail';
import News from './view/News';
import NewsDetail from './view/NewsDetail';
import Chat from './view/Chat';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
  const navigation = useNavigation();
  useEffect(()=>{
    navigation.addListener('beforeRemove', (e)=>{
    });
  }, [navigation]);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
        tabBarIcon: ({ color, size }) => {
          const iconName =
            (route.name === 'Posts' && 'feed') ||
            (route.name === 'Profile' && 'user') ||
            (route.name === 'News' && 'newspaper-o') ||
            (route.name === 'Friends' && 'group');
          return <FontAwesome color={color} size={size} name={iconName} />;
        },
      })}
    >
      <Tab.Screen
        name="Friends"
        component={Friends}
        options={{ headerShown: false }}
      />

      <Tab.Screen
        name="Posts"
        component={Posts}
        options={{ headerShown: false }}
      />

      <Tab.Screen
        name="News"
        component={News}
        options={{ headerShown: false }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

function Navigator() {
  const { user, getToken } = useContext(UserContext);
  useEffect(() => {
    getToken();
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar style="auto" hidden={false} />
      <Stack.Navigator initialRouteName={user.token.length ? 'Home' : 'Login'}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="Home"
          component={Home}
          options={({ route }) => ({
            headerTitle: getFocusedRouteNameFromRoute(route),
            headerBackVisible: false,
          })}
        />
        <Stack.Screen name='Chat' component={Chat}/>
        <Stack.Screen name="PostDetail" component={PostDetail} />
        <Stack.Screen name='NewsDetail' component={NewsDetail} />
        <Stack.Screen name="PostForm" component={PostForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AppContext>
      <Navigator />
    </AppContext>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

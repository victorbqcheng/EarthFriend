import { StatusBar } from 'expo-status-bar';
import { FontAwesome } from '@expo/vector-icons'
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useContext, useEffect } from 'react';

import navigationRef from './routing'
import Login from './screens/Login';
import AppContext from './context/AppContext';
import UserContext from './context/UserContext';
import Friends from './screens/Friends'
import Posts from './screens/Posts'
import PostForm from './screens/PostForm'
import Profile from './screens/Profile'
import PostDetail from './screens/PostDetail';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
        tabBarIcon: ({ color, size }) => {
          const iconName = (route.name === 'Posts' && 'feed')
            || (route.name === 'Profile' && 'user')
            || (route.name === 'PostForm' && 'plus-square')
            || (route.name === 'Friends' && 'group')
          return <FontAwesome color={color} size={size} name={iconName} />;
        },
      })}>
      <Tab.Screen
        name='Friends'
        component={Friends}
        options={{ headerShown: false,  }}/>

      <Tab.Screen
        name='Posts'
        component={Posts}
        options={{ headerShown: false, }} />

      <Tab.Screen
        name='PostForm'
        component={PostForm}
        options={{ headerShown: false }} />

      <Tab.Screen
        name='Profile'
        component={Profile}
        options={{ headerShown: false }} />
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
      <StatusBar style='auto' hidden={false} />
      <Stack.Navigator initialRouteName={user.token.length ? 'Home' : 'Login'}>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Home' component={Home}
          options={({ route }) => ({ headerTitle: getFocusedRouteNameFromRoute(route), headerBackVisible:false, })} />
        <Stack.Screen name='PostDetail' component={PostDetail}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AppContext>
      <Navigator></Navigator>
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

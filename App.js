import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import { UserContextProvider } from './context/UserContext';

export default function App() {
  return (
    <UserContextProvider>
    <View style={styles.container}>
      <NavigationContainer>
        <Login></Login>
      </NavigationContainer>
      
    </View>
    </UserContextProvider>
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

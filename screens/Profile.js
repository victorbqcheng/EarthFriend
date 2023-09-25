import React, { useContext } from 'react';
import { StyleSheet, View, Image, Text, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import UserContext from '../context/UserContext';
import { navigationRef } from '../routing';

export default function Profile() {
  const { logoutUser } = useContext(UserContext);

  const onPressLogout = () => {
    logoutUser();
    navigationRef.current.reset({
      index: 0,
      routes: [{ name: 'Login' }]
    });
  };

  return (
    <View style={styles.container}>
      <View style={{ height: '50%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
        <Image source={{ uri: 'https://source.unsplash.com/random' }} style={{ width: 150, height: 150, borderRadius: 100 }}></Image>
        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>victor cheng</Text>
        <Text >abcdef@gmail.com</Text>
      </View>

      <View style={{ width: '100%', height: '50%', }}>
        <Pressable style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: 20 }}>
          <Ionicons name="settings-outline" size={24} />
          <Text style={{ paddingLeft: 10 }}>settings</Text>
        </Pressable>

        <Pressable style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: 20, marginTop: 20 }}>
          <Ionicons name="help-circle-outline" size={24} />
          <Text style={{ paddingLeft: 10 }}>Help</Text>
        </Pressable>

        <Pressable style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: 20, marginTop: 20 }}
                  onPress={onPressLogout}>
          <MaterialIcons name="logout" size={24} style={{ marginLeft: 3 }} />
          <Text style={{ paddingLeft: 10 }}>Logout</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});

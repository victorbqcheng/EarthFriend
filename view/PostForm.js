import React, { useContext, useState } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';

import Button from '../components/Button';
import FormInput from '../components/FormInput';
import PostsContext from '../viewmodel/PostsContext';

export default function PostForm() {
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');

  const { addPost } = useContext(PostsContext);
  const navigation = useNavigation();

  async function uploadImage() {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert(
        'Sorry',
        'We need camera roll permissions to make this work!',
      );
    } else {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.canceled) {
        // console.log('uri:' + result.assets);
        setImageUrl(result.assets[0].uri);
      }
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.form}>
        <TouchableOpacity style={styles.imageButton}>
          {imageUrl.length ? (
            <Image
              source={{ uri: imageUrl }}
              style={{ width: '100%', height: '100%' }}
            />
          ) : (
            <Text style={styles.imageButtonText} onPress={() => uploadImage()}>
              +
            </Text>
          )}
        </TouchableOpacity>
        <FormInput
          onChangeText={setDescription}
          value={description}
          placeholder="Description"
          textContentType="none"
        />
        <Button
          onPress={() => {
            if (imageUrl.length && description.length) {
              addPost(imageUrl, description);
              navigation.navigate('Posts');
            }
          }}
          label="Add post"
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    width: '90%',
  },
  imageButton: {
    width: '100%',
    height: '50%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#f0f0f0',
    marginBottom: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageButtonText: {
    fontSize: 40,
    color: '#ccc',
  },
});

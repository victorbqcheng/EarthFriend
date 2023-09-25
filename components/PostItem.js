import React from 'react';
import { StyleSheet, Text, Dimensions, Image, View, Button, TouchableNativeFeedback } from 'react-native';

const PostItem = ({ data }) => (
  <View style={styles.container}>
    <Image source={{ uri: data.imageUrl }} style={styles.thumbnail} />
    <View style={styles.details}>
      <Text style={styles.title}>{data.title}</Text>
      <Text numberOfLines={5} style={styles.description}>{data.description}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    // alignItems: 'center',
    flexDirection:'row',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: '2%',
  },
  thumbnail: {
    width: Dimensions.get('window').width * 0.298,
    height: Dimensions.get('window').width * 0.298,
    margin: Dimensions.get('window').width * 0.01,
    borderRadius:10
  },
  details: {
    width: '65%',
    height: Dimensions.get('window').width * 0.298,
    // backgroundColor:'gray',
    margin: '2%',
    paddingLeft:5,
    paddingRight:5
  },
  title:{
    height:'25%',
    fontSize:16,
    fontWeight:'bold',
    // backgroundColor:'red'
  },

  description:{
    height: '75%',
    overflow:"hidden",
    // backgroundColor:'green',
    
  }
});

export default PostItem;

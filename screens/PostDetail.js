import React, { useContext, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import PostsContext from '../context/PostsContext';

const PostDetail = () => {
  const route = useRoute();
  const { postId } = route.params;

  const { loading, error, post, fetchPost } = useContext(PostsContext);

  useEffect(() => {
    if (postId) {
      if (postId !== post.id) {
        fetchPost(postId);
      }
    }
  }, [postId]);

  function random() {
    let r = Math.random() * 10000;
    r = Math.floor(r);
    console.log('random:' + r);
    return r;
  }

  return (
    <View style={styles.container}>
      {/* {loading || error ? (
        <Text style={styles.message}>{error || 'Loading...'}</Text>
      ) : (
        post && <PostItem data={post} />
      )} */}
      <Text id="title" style={styles.title}>
        {post.title}
      </Text>
      <View
        id="author"
        style={{ margin: 10, display: 'flex', flexDirection: 'row' }}
      >
        <Image
          source={{ uri: `https://source.unsplash.com/random?${random()}` }}
          style={{ width: 70, height: 70, borderRadius: 100 }}
        />
        <View style={{ marginLeft: 10 }}>
          <Text id="author-name" style={{ fontWeight: 'bold' }}>
            name
          </Text>
          <Text id="date">date</Text>
        </View>
      </View>
      <TouchableOpacity>
        <Text style={styles.button}>join</Text>
      </TouchableOpacity>
      <View id="post-detail" style={{ display: 'flex', alignItems: 'center' }}>
        <Image source={{ uri: post.imageUrl }} style={styles.image} />
        <Text style={{ margin: 10 }}>{post.description}</Text>
      </View>
    </View>
  );
};

export default PostDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    padding: 10,
  },
  title: {
    width: '100%',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  image: {
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').width * 0.9,
  },
  message: {
    fontSize: 20,
    color: 'black',
  },
  button: {
    backgroundColor: '#aaaaff',
    width: 50,
    borderRadius: 3,
    textAlign: 'center',
    alignSelf: 'flex-end',
    margin: 5,
    color: '#333333',
  },
});

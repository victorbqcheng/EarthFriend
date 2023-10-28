import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const NewsItem = ({ data, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={{ display: 'flex', flex: 8 }}>
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Image style={{ width: 0, height: 0 }} />
            <Text style={{ fontWeight: 'bold', margin: 2, fontSize: 10 }}>
              {data.author}
            </Text>
          </View>
          <Text style={{ margin: 2 }}>{data.title}</Text>
        </View>
        <View style={{ display: 'flex', flex: 2 }}>
          <Image source={{ uri: data.imageUrl }} style={styles.img} />
        </View>

        {/* <Text>aaaa</Text> */}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    height: Dimensions.get('window').width * 0.218,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    alignItems: 'center',
    borderColor: '#ccc',
  },
  img: {
    width: Dimensions.get('window').width * 0.178,
    height: Dimensions.get('window').width * 0.178,
    margin: Dimensions.get('window').width * 0.01,
    borderRadius: 10,
  },
});

export default NewsItem;

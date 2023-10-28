import React, { useContext, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import NewsContext from '../viewmodel/NewsContext';
import NewsItem from '../components/NewsItem';
import { useNavigation } from '@react-navigation/native';

export default function News() {
  const navigation = useNavigation();
  const { loading, error, newsList, fetchNewsList } = useContext(NewsContext);
  useEffect(()=>{
    (!newsList || !newsList.length) && fetchNewsList();

  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {newsList.map(news => {
        return <NewsItem key={news.id} data={news} 
                onPress={()=>{navigation.navigate('NewsDetail', {data:news})}}
              />;
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
});

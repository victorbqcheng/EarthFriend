import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';

import NewsItem from '../components/NewsItem';

const newsList = [
  {
    id: 1,
    author: 'SciTecDaily',
    date: '09/02',
    title:
      "Report says Antarctica witnessed world's most intense heatwave in 2022",
    imageUrl: 'https://picsum.photos/id/199/400/400',
    content:
      'Join us in cleaning up the beach and protecting our oceans. We will provide gloves, bags, and other necessary equipment. All you need to bring is your enthusiasm and willingness to make a difference.',
  },
  {
    id: 2,
    author: 'Japan Today',
    date: '09/02',
    title: "Antarctic winter sea ice hits 'extreme' record low",
    imageUrl: 'https://picsum.photos/id/200/400/400',
    content:
      'Join us in cleaning up the beach and protecting our oceans. We will provide gloves, bags, and other necessary equipment. All you need to bring is your enthusiasm and willingness to make a difference.',
  },
  {
    id: 3,
    author: 'Human Right Watch',
    date: '09/02',
    title: 'European Court Hears Climate Crisis Case Brought by Children',
    imageUrl: 'https://picsum.photos/id/201/400/400',
    content:
      'Join us in cleaning up the beach and protecting our oceans. We will provide gloves, bags, and other necessary equipment. All you need to bring is your enthusiasm and willingness to make a difference.',
  },
  {
    id: 4,
    author: 'MacroBusiness',
    date: '09/02',
    title: 'Academics, climate warriors focus on wrong environmental threat',
    imageUrl: 'https://picsum.photos/id/202/400/400',
    content:
      'Join us in cleaning up the beach and protecting our oceans. We will provide gloves, bags, and other necessary equipment. All you need to bring is your enthusiasm and willingness to make a difference.',
  },
  {
    id: 5,
    author: 'SciTecDaily',
    date: '09/02',
    title:
      "Report says Antarctica witnessed world's most intense heatwave in 2022",
    imageUrl: 'https://picsum.photos/id/199/400/400',
    content:
      'Join us in cleaning up the beach and protecting our oceans. We will provide gloves, bags, and other necessary equipment. All you need to bring is your enthusiasm and willingness to make a difference.',
  },
  {
    id: 6,
    author: 'Japan Today',
    date: '09/02',
    title: "Antarctic winter sea ice hits 'extreme' record low",
    imageUrl: 'https://picsum.photos/id/200/400/400',
    content:
      'Join us in cleaning up the beach and protecting our oceans. We will provide gloves, bags, and other necessary equipment. All you need to bring is your enthusiasm and willingness to make a difference.',
  },
  {
    id: 7,
    author: 'Human Right Watch',
    date: '09/02',
    title: 'European Court Hears Climate Crisis Case Brought by Children',
    imageUrl: 'https://picsum.photos/id/201/400/400',
    content:
      'Join us in cleaning up the beach and protecting our oceans. We will provide gloves, bags, and other necessary equipment. All you need to bring is your enthusiasm and willingness to make a difference.',
  },
  {
    id: 8,
    author: 'MacroBusiness',
    date: '09/02',
    title: 'Academics, climate warriors focus on wrong environmental threat',
    imageUrl: 'https://picsum.photos/id/202/400/400',
    content:
      'Join us in cleaning up the beach and protecting our oceans. We will provide gloves, bags, and other necessary equipment. All you need to bring is your enthusiasm and willingness to make a difference.',
  },
  {
    id: 9,
    author: 'Japan Today',
    date: '09/02',
    title: "Antarctic winter sea ice hits 'extreme' record low",
    imageUrl: 'https://picsum.photos/id/200/400/400',
    content:
      'Join us in cleaning up the beach and protecting our oceans. We will provide gloves, bags, and other necessary equipment. All you need to bring is your enthusiasm and willingness to make a difference.',
  },
  {
    id: 10,
    author: 'Human Right Watch',
    date: '09/02',
    title: 'European Court Hears Climate Crisis Case Brought by Children',
    imageUrl: 'https://picsum.photos/id/201/400/400',
    content:
      'Join us in cleaning up the beach and protecting our oceans. We will provide gloves, bags, and other necessary equipment. All you need to bring is your enthusiasm and willingness to make a difference.',
  },
  {
    id: 11,
    author: 'MacroBusiness',
    date: '09/02',
    title: 'Academics, climate warriors focus on wrong environmental threat',
    imageUrl: 'https://picsum.photos/id/202/400/400',
    content:
      'Join us in cleaning up the beach and protecting our oceans. We will provide gloves, bags, and other necessary equipment. All you need to bring is your enthusiasm and willingness to make a difference.',
  },
];

export default function News() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {newsList.map(news => {
        return <NewsItem key={news.id} data={news} />;
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
});

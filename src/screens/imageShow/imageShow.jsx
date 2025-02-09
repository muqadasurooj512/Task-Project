
import React, { useState } from 'react';
import { View, StyleSheet, Image, ScrollView, Alert } from 'react-native';
import Video from 'react-native-video';
import Header from '../../components/header';
import HashtagSection from '../../components/hashtagsSec';
import { useRoute } from '@react-navigation/native';

const ImageShow = () => {
  const [selectedTags, setSelectedTags] = useState([]);
  const route = useRoute();
  const { mediaFiles = [] } = route.params || {};

  const toggleTag = (tag) => {
    setSelectedTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);
  };

  const tags = [
    'Comedy', 'Economic', 'Education', 'Entertainment', 'Inspirational',
    'Fashion', 'Food & Nutrition', 'Music', 'Politics', 'Pop Culture',
    'Real Estate', 'Religion', 'Satire', 'Science', 'Sports', 'Tech', 'Travel', 'Roll the Dice'
  ];

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollView} horizontal={true}>
        {mediaFiles.map((media, index) =>
          media.type === 'photo' ? (
            <Image key={index} source={{ uri: media.path }} style={styles.image} />
          ) : (
            <Video
              key={index}
              source={{ uri: media.path }}
              style={styles.video}
              controls
              onError={(e) => Alert.alert('Video Error', e.error.errorString)}
            />
          )
        )}
      </ScrollView>
      <HashtagSection tags={tags} selectedTags={selectedTags} toggleTag={toggleTag} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  image: {
    width: 100,
    height: 300,
    borderRadius: 10,
    margin: 5,
  },
  video: {
    width: 100,
    height: 300,
    borderRadius: 10,
    margin: 5,
  },
  scrollView: {
    flexDirection: 'row',
    paddingBottom: 20,
  },
});

export default ImageShow;

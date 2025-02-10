
import React, { useState } from 'react';
import { View, StyleSheet, Image, ScrollView, Alert } from 'react-native';
import Video from 'react-native-video';
import Header from '../../components/header';
import HashtagSection from '../../components/hashtagsSec';
import { useRoute } from '@react-navigation/native';
import ImageRowWithCaption from '../../components/captionWrite';
import { scale, verticalScale } from 'react-native-size-matters'; 

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
    <ScrollView contentContainerStyle={styles.container}>
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
      <ImageRowWithCaption />
      <HashtagSection tags={tags} selectedTags={selectedTags} toggleTag={toggleTag} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    
  },
  image: {
    width: scale(100),
    height: verticalScale(250),
    borderRadius: scale(10),
    margin: scale(5),
  },
  video: {
    width: scale(100),
    height: verticalScale(300),
    borderRadius: scale(10),
    margin: scale(5),
  },
  scrollView: {
    flexDirection: 'row',
    paddingBottom: verticalScale(20),
  },
});

export default ImageShow;

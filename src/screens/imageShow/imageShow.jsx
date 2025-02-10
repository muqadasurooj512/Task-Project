
import React, { useState } from 'react';
import { View, StyleSheet, Image, ScrollView, Alert } from 'react-native';
import Video from 'react-native-video';
import Header from '../../components/header';
import HashtagSection from '../../components/hashtagsSec';
import { useRoute } from '@react-navigation/native';
import ImageRowWithCaption from '../../components/captionWrite';
import { scale, verticalScale } from 'react-native-size-matters'; // Import the scaling functions

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
      <ImageRowWithCaption />
      <HashtagSection tags={tags} selectedTags={selectedTags} toggleTag={toggleTag} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: scale(20), // Scaled padding
  },
  image: {
    width: scale(100), // Scaled width
    height: verticalScale(250), // Scaled height for vertical scaling
    borderRadius: scale(10), // Scaled borderRadius
    margin: scale(5), // Scaled margin
  },
  video: {
    width: scale(100), // Scaled width
    height: verticalScale(300), // Scaled height for vertical scaling
    borderRadius: scale(10), // Scaled borderRadius
    margin: scale(5), // Scaled margin
  },
  scrollView: {
    flexDirection: 'row',
    paddingBottom: verticalScale(20), // Scaled padding for bottom
  },
});

export default ImageShow;

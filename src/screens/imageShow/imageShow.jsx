
import React, { useState } from 'react';
import { View, StyleSheet, Image, ScrollView, Alert } from 'react-native';
import Video from 'react-native-video';
import Header from '../../components/header';
import HashtagSection from '../../components/hashtagsSec';
import { useRoute } from '@react-navigation/native';
import { scale, verticalScale, moderateScale, moderateVerticalScale } from 'react-native-size-matters';

const ImageShow = ({ navigation }) => {
  const route = useRoute();
  const { mediaFiles = [] } = route.params || {};
  const [selectedTags, setSelectedTags] = useState([]);
  const [image, setImage] = useState(null); // Holds uploaded image

  const toggleTag = (tag) => {
    setSelectedTags((prev) => {
      if (prev.includes(tag)) {
        return prev.filter((t) => t !== tag);
      } else if (prev.length < 5) {
        return [...prev, tag];
      } else {
        Alert.alert('Limit Reached', 'You can select a maximum of 5 tags.');
        return prev;
      }
    });
  };

  // Logic to determine if post button should be enabled
  const isPostEnabled =
    mediaFiles.length > 0 && // At least one image or video
    selectedTags.length >= 1 && // At least one tag selected
    selectedTags.length <= 5; // Limit to 5 tags

  const tags = [
    'Comedy', 'Economic', 'Education', 'Entertainment', 'Inspirational',
    'Fashion', 'Food & Nutrition', 'Music', 'Politics', 'Pop Culture',
    'Real Estate', 'Religion', 'Satire', 'Science', 'Sports', 'Tech', 'Travel', 'Roll the Dice',
  ];

 
  const handleSubmit = () => {
    console.log("Form submitted!");
  };
  const onCrossIconPress = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'BottomNavigation' }],
    });
  };

  return (
    <View style={styles.container}>
      <Header
        showCrossIcon={true}
        onCrossIconPress={onCrossIconPress}
        isPostEnabled={isPostEnabled}
        onSubmit={handleSubmit}
      />
      
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

      <ScrollView contentContainerStyle={styles.scroll} horizontal={false}>
        <View style={{ borderBottomWidth: 2, borderBottomColor: '#222', marginBottom: verticalScale(15), marginHorizontal: moderateScale(8), }}></View>
        <HashtagSection tags={tags} selectedTags={selectedTags} toggleTag={toggleTag} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  image: {
    width: scale(116),
    height: verticalScale(144),
    marginTop: moderateVerticalScale(30),
    marginHorizontal: moderateScale(10)
  },
  video: {
    width: scale(116),
    height: verticalScale(144),
    marginTop: moderateVerticalScale(30),
    marginHorizontal: moderateScale(5)
  },
  scrollView: {
    flexDirection: 'row',
  },
  backButton: {
    position: 'absolute',
    left: 10,
    zIndex: 10,
  },
});

export default ImageShow;

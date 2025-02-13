
import React, { useState } from 'react';
import { View, StyleSheet, Image, ScrollView, Alert,TouchableOpacity } from 'react-native';
import Video from 'react-native-video';
import Header from '../../components/header';
import HashtagSection from '../../components/hashtagsSec';
import { useRoute } from '@react-navigation/native';
import ImageRowWithCaption from '../../components/captionWrite';
import { scale, verticalScale, moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Ionicons'; 
const ImageShow = ({navigation}) => {
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
  const onCrossIconPress = () => {
    navigation.navigate('BottomNavigation'); // Navigate to 'MediaPost' screen when the cross icon is pressed
  };
  return (
    <View style={styles.container}>
      {/* <Header /> */}
      <Header showCrossIcon={true}
       onCrossIconPress={onCrossIconPress} /> {/* Cross icon will be shown */}
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
      <ScrollView  contentContainerStyle={styles.scroll} horizontal={false}>
        <ImageRowWithCaption />
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

    paddingHorizontal: scale(10),

  },
  image: {
    width: scale(116),
    height: verticalScale(144),
    marginTop: moderateVerticalScale(30),
    marginHorizontal: moderateScale(5)
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
    // top: 20,
    left: 10,
    zIndex: 10,
  },
});

export default ImageShow;


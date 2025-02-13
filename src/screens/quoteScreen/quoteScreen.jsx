
import React, { useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { scale, verticalScale, moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import Header from '../../components/header';
import HashtagSection from '../../components/hashtagsSec';
import InputSection from '../../components/inputSection';

const QuoteScreen = ({navigation}) => {
  const [selectedTags, setSelectedTags] = useState([]);

  const toggleTag = (tag) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
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
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Header/>
      <ScrollView contentContainerStyle={styles.scrollView}>
      {/* <Header showCrossIcon={true}
       onCrossIconPress={onCrossIconPress} /> */}
        {/* <QuestionComponent /> */}
        <InputSection />
        {/* <Caption /> */}
        <HashtagSection tags={tags} selectedTags={selectedTags} toggleTag={toggleTag} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
   
  },
  scrollView: {
    flexGrow: 1,
    paddingBottom: moderateVerticalScale(20), 
    paddingHorizontal: scale(10), 
  },
  header: {
    fontSize: moderateScale(24), 
    color: '#fff',
  },
  inputSection: {
    marginTop: verticalScale(15), 
    fontSize: moderateScale(16), 
  },
  hashtagSection: {
    marginTop: verticalScale(10), 
    fontSize: moderateScale(14),
  },
});

export default QuoteScreen;

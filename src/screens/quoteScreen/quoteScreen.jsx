
import React, { useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, ScrollView, Platform, Alert } from 'react-native';
import { scale, verticalScale, moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import Header from '../../components/header';
import HashtagSection from '../../components/hashtagsSec';
import InputSection from '../../components/inputSection';

const QuoteScreen = ({ navigation }) => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [postText, setPostText] = useState(""); // Holds the post text

  const toggleTag = (tag) => {
    setSelectedTags(prev => {
      if (prev.includes(tag)) {
        return prev.filter(t => t !== tag);
      } else if (prev.length < 5) {
        return [...prev, tag];
      } else {
        Alert.alert("Limit Reached", "You can select a maximum of 5 tags.");
        return prev;
      }
    });
  };

  // Logic to determine if the post button should be enabled
  const isPostEnabled =
    postText.trim().length > 0 && // Ensure there's text entered
    selectedTags.length >= 1 && // Ensure at least one tag is selected
    selectedTags.length <= 5; // Limit tags to 5

  const tags = [
    'Comedy', 'Economic', 'Education', 'Entertainment', 'Inspirational',
    'Fashion', 'Food & Nutrition', 'Music', 'Politics', 'Pop Culture',
    'Real Estate', 'Religion', 'Satire', 'Science', 'Sports', 'Tech', 'Travel', 'Roll the Dice'
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
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Header 
        showCrossIcon={true}
        onCrossIconPress={onCrossIconPress}  
        isPostEnabled={isPostEnabled}
        onSubmit={handleSubmit}
      />

      <ScrollView contentContainerStyle={styles.scrollView}>
        {/* Pass postText and setPostText to InputSection */}
        <InputSection text={postText} setText={setPostText} /> 
        
        <HashtagSection 
          tags={tags} 
          selectedTags={selectedTags} 
          toggleTag={toggleTag} 
        />
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

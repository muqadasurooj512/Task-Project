
import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import Header from '../../components/header';
import QuestionComponent from '../../components/questions';
import HashtagSection from '../../components/hashtagsSec';
import Caption from "../../components/captionWrite";
import InputSection from '../../components/inputSection';
import { scale, verticalScale, moderateScale, moderateVerticalScale } from 'react-native-size-matters';

const PollScreen = ({ navigation }) => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [questions, setQuestions] = useState([{ question: "", options: ["", ""] }]);
  const [image, setImage] = useState(null);
  const [postText, setPostText] = useState("");

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

  // Ensure the post is enabled only when 5 questions and tags are selected
  const isPostEnabled =
    questions.length === 5 && // Ensure there are exactly 5 questions
    selectedTags.length >= 1 && // Ensure at least 1 tag is selected
    questions.every(q => q.question.trim().length > 0) && // Check if all questions have content
    selectedTags.length <= 5; // Limit tags to 5

  const tags = [
    'Comedy', 'Economic', 'Education', 'Entertainment', 'Inspirational',
    'Fashion', 'Food & Nutrition', 'Music', 'Politics', 'Pop Culture',
    'Real Estate', 'Religion', 'Satire', 'Science', 'Sports', 'Tech', 'Travel', 'Roll the Dice'
  ];

  const onCrossIconPress = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'BottomNavigation' }],
    });
  };

 
  const handleSubmit = () => {
    console.log("Form submitted!");
  };
  return (
    <View style={styles.container}>
      <Header
        showCrossIcon={true}
        onCrossIconPress={onCrossIconPress}
        isPostEnabled={isPostEnabled}
        onSubmit={handleSubmit}
      />

      <ScrollView style={styles.scrollView}>
        <QuestionComponent
          questions={questions}
          setQuestions={setQuestions}
          isAddNewQuestionDisabled={questions.length >= 5} // Disable if there are 5 questions
        />

        <View style={{ borderBottomWidth: 2, borderBottomColor: '#222', marginBottom: verticalScale(15), marginHorizontal: moderateScale(8) }}></View>
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
  scrollView: {
    flexGrow: 1,
    paddingBottom: moderateVerticalScale(20),
  },
});

export default PollScreen;

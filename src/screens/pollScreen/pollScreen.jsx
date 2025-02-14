
import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Header from '../../components/header';
import QuestionComponent from '../../components/questions';
import HashtagSection from '../../components/hashtagsSec';
import Caption from "../../components/captionWrite";
import InputSection from '../../components/inputSection';
import { scale, verticalScale, moderateScale, moderateVerticalScale } from 'react-native-size-matters';
const PollScreen = ({navigation}) => {
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
    navigation.reset({
      index: 0,  
      routes: [{ name: 'BottomNavigation' }],  
    });
  };
  return (
    <View style={styles.container}>
   <Header showCrossIcon={true}
       onCrossIconPress={onCrossIconPress} />
    
      <ScrollView style={styles.scrollView}>
        
        <QuestionComponent />
       
        <View style={{ borderBottomWidth: 2, borderBottomColor: '#222' , marginBottom:verticalScale(15), marginHorizontal:moderateScale(8)}}></View>

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

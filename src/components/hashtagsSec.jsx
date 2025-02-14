
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { scale, verticalScale, moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

const HashtagSection = ({ tags, selectedTags, toggleTag }) => {
  const [isBoxVisible, setBoxVisible] = useState(false);  

  const toggleBox = () => {
    setBoxVisible(!isBoxVisible);  
  };

  return (
    <View style={styles.maincontainer}>
      {/* Row container for Hidden Hashtags and Algorithm Score */}
      <View style={styles.hashtagContainer}>
        {/* Hidden Hashtags */}
        <TouchableOpacity onPress={toggleBox} style={styles.hiddenHashtagsContainer}>
          <Text style={styles.hiddenHashtagsText}>Hidden Hashtags</Text>
          <Icon name="information-circle" size={14} color="#FFF" style={styles.icon} />
        </TouchableOpacity>

        {/* Algorithm Score */}
        <TouchableOpacity onPress={toggleBox} style={styles.algorithmScoreContainer}>
          <Text style={styles.algorithmScoreText}>
            Algorithm Score
          </Text>
          <Icon name="information-circle" size={14} color="#FFF" style={styles.icon} />
          
        </TouchableOpacity>
        <Text style={styles.score}>8.2</Text>
      </View>

      {/* Box with additional message */}
      {isBoxVisible && (
        <View style={styles.infoBox}>
          <Text style={styles.boxText}>Select the categories associated with your post to help promote your content</Text>
        </View>
      )}

      {/* Tags Section */}
      <ScrollView contentContainerStyle={styles.tagsContainer} horizontal={false} showsVerticalScrollIndicator={false}>
        {tags.map((tag, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.tag, selectedTags.includes(tag) && styles.selectedTag]}
            onPress={() => toggleTag(tag)}
          >
            <Text style={styles.tagText} numberOfLines={1} ellipsizeMode="tail">
              {tag}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  hashtagContainer: {
    flexDirection: 'row', 
    justifyContent:'space-between', 
    marginHorizontal:moderateVerticalScale(15),
    marginBottom: verticalScale(20),
  
  },
  hiddenHashtagsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
   
  },
  hiddenHashtagsText: {
    color: '#FFF',
    fontSize: 14,
    fontFamily:"AvenirLTStd65-Medium",
  },
  algorithmScoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  
  },
  algorithmScoreText: {
    color: '#FFF',
    fontSize:14,
    fontFamily:"AvenirLTStd65-Medium",

  },
  score: {
    color: '#32CD32',
    fontFamily:"AvenirLTStd65-Medium",
    fontSize: 14,
    alignSelf:"center"
    
  },
  icon: {
    marginLeft: 3, 
  },

  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
     justifyContent: 'space-between',
     marginHorizontal:moderateScale(5)
  },
  tag: {
    backgroundColor: '#222',
    borderRadius: moderateScale(43),
    paddingVertical: verticalScale(8),
    marginBottom: verticalScale(12),
     marginHorizontal:moderateScale(3),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: moderateScale(2),
    borderColor: 'transparent',
    flexBasis: '30%',
    flexGrow: 1,
  },
  selectedTag: {
    borderColor: '#6F00FF',
    borderWidth: moderateScale(2),
  },
  tagText: {
    color: '#FFF',
    fontSize: 12,
    textAlign: 'justify',
    fontFamily: "Avenir-LT-Std-35-Light",
    flexWrap: 'wrap',
    flex: 1,
    overflow: 'hidden',      
    textOverflow: 'ellipsis', 
  },

  infoBox: {
    marginTop: verticalScale(-26),
    paddingVertical: moderateVerticalScale(10),
    marginHorizontal:moderateScale(50),
    backgroundColor: '#333',
    borderRadius: moderateScale(4),
  },
  boxText: {
    color: '#FFF',
    fontSize: 9,
    textAlign:"center",
    fontFamily:"Avenir-LT-Std-35-Light",
    lineHeight:15
  },
});

export default HashtagSection;

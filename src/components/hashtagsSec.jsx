import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

const HashtagSection = ({ tags, selectedTags, toggleTag }) => {
  const [isBoxVisible, setBoxVisible] = useState(false);  // State to control visibility of the box

  const toggleBox = () => {
    setBoxVisible(!isBoxVisible);  // Toggle the box visibility on click
  };

  return (
    <View>
      {/* Row container for Hidden Hashtags and Algorithm Score */}
      <View style={styles.hashtagContainer}>
        {/* Hidden Hashtags */}
        <TouchableOpacity onPress={toggleBox} style={styles.hiddenHashtagsContainer}>
          <Text style={styles.hiddenHashtagsText}>Hidden Hashtags</Text>
          <Icon name="information-circle" size={24} color="#FFF" style={styles.icon} />
        </TouchableOpacity>

        {/* Algorithm Score */}
        <View style={styles.algorithmScoreContainer}>
          <Text style={styles.algorithmScoreText}>
            Algorithm Score
          </Text>
          <Icon name="information-circle" size={24} color="#FFF" style={styles.icon} />
          <Text style={styles.score}>8.2</Text>
        </View>
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
  // Container for Hidden Hashtags and Algorithm Score
  hashtagContainer: {
    flexDirection: 'row', // Align items horizontally
    justifyContent: 'space-between', // Space between the containers
    alignItems: 'center', // Vertically center items
    marginBottom: verticalScale(20),
  },
  hiddenHashtagsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  hiddenHashtagsText: {
    color: '#FFF',
    fontSize: moderateScale(14),
  },
  algorithmScoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  algorithmScoreText: {
    color: '#FFF',
    fontSize: moderateScale(14),
  },
  score: {
    color: '#32CD32',
    fontWeight: 'bold',
    fontSize: moderateScale(14),
  },
  icon: {
    marginLeft: moderateScale(5), // Adds space between text and icon
    marginRight: moderateScale(15),
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  tag: {
    backgroundColor: '#222',
    borderRadius: moderateScale(20),
    paddingHorizontal: scale(10),
    paddingVertical: verticalScale(5),
    marginBottom: verticalScale(10),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: moderateScale(2),
    borderColor: 'transparent',
    flexBasis: '30%',
  },
  selectedTag: {
    borderColor: '#6F00FF',
    borderWidth: moderateScale(2),
  },
  tagText: {
    color: '#FFF',
    fontSize: moderateScale(14),
  },
  // Info box styles
  infoBox: {
    marginTop: verticalScale(-26),
     paddingVertical: moderateScale(10),
    backgroundColor: '#333',
    borderRadius: moderateScale(10),
  },
  boxText: {
    color: '#FFF',
    fontSize: moderateScale(14),
    textAlign:"center"
  },
});

export default HashtagSection;

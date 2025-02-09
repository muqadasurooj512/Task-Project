// import React from 'react';
// import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Dimensions } from 'react-native';

// const { width } = Dimensions.get('window');

// const HashtagSection = ({ tags, selectedTags, toggleTag }) => {
//   return (
//     <View>
//       <View style={styles.hashtagContainer}>
//         <Text style={styles.hiddenHashtagsText}>Hidden Hashtags</Text>
//         <Text style={styles.algorithmScoreText}>
//           Algorithm Score: <Text style={styles.score}>8.2</Text>
//         </Text>
//       </View>

//       {/* Tags Section */}
//       <ScrollView contentContainerStyle={styles.tagsContainer} horizontal={false} showsVerticalScrollIndicator={false}>
//         {tags.map((tag, index) => (
//           <TouchableOpacity
//             key={index}
//             style={[styles.tag, selectedTags.includes(tag) && styles.selectedTag]}
//             onPress={() => toggleTag(tag)}
//           >
//             <Text style={styles.tagText} numberOfLines={1} ellipsizeMode="tail">
//               {tag}
//             </Text>
//           </TouchableOpacity>
//         ))}
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   hashtagContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 40,
//   },
//   hiddenHashtagsText: {
//     color: '#FFF',
//     fontSize: 14,
//   },
//   algorithmScoreText: {
//     color: '#FFF',
//     fontSize: 14,
//   },
//   score: {
//     color: '#32CD32',
//     fontWeight: 'bold',
//   },
//   // 
//   tagsContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//   },
//   tag: {
//     backgroundColor: '#222',
//     borderRadius: 20,
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     marginBottom: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderWidth: 2,
//     borderColor: 'transparent',
//     flexBasis: '30%', // Adjust tag size dynamically
//   },
//   selectedTag: {
//     borderColor: '#6F00FF',
//     borderWidth: 2,
//   },
//   tagText: {
//     color: '#FFF',
//     fontSize: 14,
//   },
// });

// export default HashtagSection;
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const { width } = Dimensions.get('window');

const HashtagSection = ({ tags, selectedTags, toggleTag }) => {
  return (
    <View>
      <View style={styles.hashtagContainer}>
        <Text style={styles.hiddenHashtagsText}>Hidden Hashtags</Text>
        <Text style={styles.algorithmScoreText}>
          Algorithm Score: <Text style={styles.score}>8.2</Text>
        </Text>
      </View>

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
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: verticalScale(20),
  },
  hiddenHashtagsText: {
    color: '#FFF',
    fontSize: moderateScale(14),
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
    flexBasis: '30%', // Adjust tag size dynamically
  },
  selectedTag: {
    borderColor: '#6F00FF',
    borderWidth: moderateScale(2),
  },
  tagText: {
    color: '#FFF',
    fontSize: moderateScale(14),
  },
});

export default HashtagSection;

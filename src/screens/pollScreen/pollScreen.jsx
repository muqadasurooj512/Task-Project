// // import { StyleSheet, Text, View } from 'react-native'
// // import React from 'react'

// // const PollScreen = () => {
// //   return (
// //     <View>
// //       <Text>pollScreen</Text>
// //     </View>
// //   )
// // }

// // export default PollScreen

// // const styles = StyleSheet.create({})
// // import { StyleSheet, Text, View } from 'react-native'
// // import React from 'react'

// // const QuoteScreen = () => {
// //   return (
// //     <View>
// //       <Text>quoteScreen</Text>
// //     </View>
// //   )
// // }

// // export default QuoteScreen

// // const styles = StyleSheet.create({})
// import React, { useState } from 'react';
// import { View, StyleSheet } from 'react-native';
// import Header from '../../components/header';
// import QuestionComponent from '../../components/questions';
// import HashtagSection from '../../components/hashtagsSec';
// import Caption from "../../components/captionWrite"
// import InputSection from '../../components/inputSection';
// const PollScreen = () => {
//   const [selectedTags, setSelectedTags] = useState([]);

//   const toggleTag = (tag) => {
//     setSelectedTags(prev =>
//       prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
//     );
//   };

//   const tags = [
//     'Comedy', 'Economic', 'Education', 'Entertainment', 'Inspirational',
//     'Fashion', 'Food & Nutrition', 'Music', 'Politics', 'Pop Culture',
//     'Real Estate', 'Religion', 'Satire', 'Science', 'Sports', 'Tech', 'Travel', 'Roll the Dice'
//   ];

//   return (
//     <View style={styles.container}>
//       <Header />
//        <QuestionComponent />  
//       {/* <InputSection/> */}
//       {/* <Caption /> */}
//       <HashtagSection tags={tags} selectedTags={selectedTags} toggleTag={toggleTag} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
    
//   },
//   scrollView: {
//     flexGrow: 1,
//     paddingBottom: 20, // Prevents extra spacing
//   },
// });

// export default PollScreen;
import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Header from '../../components/header';
import QuestionComponent from '../../components/questions';
import HashtagSection from '../../components/hashtagsSec';
import Caption from "../../components/captionWrite";
import InputSection from '../../components/inputSection';

const PollScreen = () => {
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

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Header />
        <QuestionComponent />
        {/* <InputSection /> */}
        {/* <Caption /> */}
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
    paddingBottom: 20, // Prevent extra spacing at the bottom
  },
});

export default PollScreen;

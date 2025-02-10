
// import React, { useState } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   StatusBar,
//   TouchableOpacity,
//   Image,
//   SafeAreaView,
//   FlatList,
//   Dimensions
// } from 'react-native';
// import { scale, verticalScale, moderateScale, moderateVerticalScale } from 'react-native-size-matters';
// import LinearGradient from 'react-native-linear-gradient';
// import Logo from '../../../assets/svg/LogoSvg.svg';
// import Send from '../../../assets/svg/Send.svg';
// import Arrowup from '../../../assets/svg/arrowup.svg';
// import Down from '../../../assets/svg/arrowdown.svg';
// import Message from '../../../assets/svg/massage.svg';
// import Reshare from '../../../assets/svg/reshare.svg';
// import Save from '../../../assets/svg/saved.svg';
// import Send2 from '../../../assets/svg/send2.svg';
// import Song from '../../../assets/svg/song.svg';

// const { width } = Dimensions.get('window');

// const content = [
//   {
//     id: '1',
//     type: 'image',
//     userName: 'john_doe',
//     userId: '@johndoe123',
//     songName: 'Awesome Beats - DJ Mix',
//     image: require('../../../assets/svg/reel_image.png'),
//   },
//   {
//     id: '2',
//     type: 'text',
//     userName: 'jane_doe',
//     userId: '@janedoe456',
//     question: 'What’s your favorite way to relax after work?',
//     answers: [
//       'TV & Snacks',
//       'Card games with friends',
//       'Go on Social Media',
//       'Reading'
//     ],
//     songName: 'Chill Vibes - Relax Music',
//   },
// ];

// const MediaPage = () => {
//   const [selectedAnswer, setSelectedAnswer] = useState(null);
//   const [pollResults, setPollResults] = useState({});

//   const handleAnswerSelect = (answerIndex) => {
//     // Calculate random results for each answer
//     const randomResults = content[1].answers.reduce((acc, _, index) => {
//       acc[index] = Math.floor(Math.random() * 100);
//       return acc;
//     }, {});

//     setSelectedAnswer(answerIndex);
//     setPollResults(randomResults);
//   };
 
//   const renderItem = ({ item }) => {
//     // Get the highest percentage value to change color dynamically
//     const maxPercentage = Math.max(...Object.values(pollResults));
  
//     return (
//       <View style={styles.pageContainer}>
//         {item.type === 'image' ? (
//           <Image source={item.image} style={styles.reelBackground} />
//         ) : (
//           <View style={styles.textContainer}>
//             <LinearGradient
//               colors={['#000AFFB3', '#6F00FFB3', '#FF0000B3']}
//               start={{ x: 0, y: 0 }}
//               end={{ x: 1, y: 0 }}
//               style={styles.gradientBackground}
//             >
//               <Text style={styles.question}>{item.question}</Text>
//               <View style={styles.answersContainer}>
//                 {item.answers.map((answer, index) => {
//                   const isHighest = pollResults[index] === maxPercentage;
//                   const percentage = pollResults[index] || 0; 
//                   return (
//                     <View key={index} style={styles.answerRow}>
//                       <TouchableOpacity
//                         style={[
//                           styles.answerBox,
//                           selectedAnswer === index && { borderColor: 'blue' }, // Highlight selected answer
//                         ]}
//                         onPress={() => handleAnswerSelect(index)}
//                       >
//                         <Text style={[styles.answer, { color: isHighest ? 'blue' : 'white' }]}>
//                           {answer}
//                         </Text>
//                       </TouchableOpacity>
//                       <Text
//                         style={[
//                           styles.answerPercentage,
//                           { color: isHighest ? 'blue' : 'white' },
//                         ]}
//                       >
//                         {percentage}%
//                       </Text>
//                     </View>
//                   );
//                 })}
//               </View>
//             </LinearGradient>
//           </View>
//         )}
  
//         <View style={styles.overlayContent}>
//           <View style={styles.topBar}>
//             <Logo />
//             <View style={styles.tabContainer}>
//               <Text style={styles.tabText}>For You</Text>
//               <Text style={styles.tabText}>Following</Text>
//             </View>
//             <TouchableOpacity style={styles.sendIconContainer}>
//               <Send width={moderateScale(25)} height={moderateScale(25)} />
//             </TouchableOpacity>
//           </View>
  
//           <View style={styles.iconButtonsContainer}>
//             <Image source={require('../../../assets/svg/image.png')} style={styles.profileImage} />
//             <TouchableOpacity style={styles.iconButton}>
//               <Arrowup width={moderateScale(25)} height={moderateScale(25)} />
//               <Text style={styles.iconCount}>12.3k</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.iconButton}>
//               <Down width={moderateScale(25)} height={moderateScale(25)} />
//               <Text style={styles.iconCount}>142</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.iconButton}>
//               <Message width={moderateScale(25)} height={moderateScale(25)} />
//               <Text style={styles.iconCount}>48</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.iconButton}>
//               <Reshare width={moderateScale(25)} height={moderateScale(25)} />
//               <Text style={styles.iconCount}>48</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.iconButton}>
//               <Save width={moderateScale(25)} height={moderateScale(25)} />
//               <Text style={styles.iconCount}>48</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.iconButton}>
//               <Send2 width={moderateScale(25)} height={moderateScale(25)} />
//               <Text style={styles.iconCount}>48</Text>
//             </TouchableOpacity>
//           </View>
  
//           <View style={styles.bottomInfoContainer}>
//             <View style={styles.userInfoRow}>
//               <Text style={styles.userName}>{item.userName}</Text>
//               <Text style={styles.userId}>{item.userId}</Text>
//             </View>
//             <View style={styles.songInfoRow}>
//               <Text style={styles.songName} numberOfLines={1}>
//                 {item.songName}
//               </Text>
//               <Song width={moderateScale(25)} height={moderateScale(25)} />
//             </View>
//           </View>
//         </View>
//       </View>
//     );
//   };

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
//       <FlatList
//         data={content}
//         renderItem={renderItem}
//         scrollEnabled={true}
//         contentContainerStyle={styles.listContent}
//         showsVerticalScrollIndicator={false}
//         keyExtractor={(item) => item.id}
//       />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   pageContainer: {
//     width: '100%',
//     height: Dimensions.get('window').height,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   reelBackground: {
//     width: '100%',
//     height: '100%',
//     resizeMode: 'cover',
//   },
//   textContainer: {
//     width: '100%',
//     height: '100%',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   gradientBackground: {
//     width: '100%',
//     height: '100%',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: moderateScale(20),
//     borderRadius: moderateScale(10),
//   },
//   question: {
//     fontSize: scale(20),
//     color: 'white',
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginHorizontal: moderateScale(20),
//   },
//   answersContainer: {
//     marginTop: verticalScale(20),
//     width: '85%',
//   },
//   // answerRow: {
//   //   flexDirection: 'row',
//   //   alignItems: 'center',
//   //   justifyContent: 'space-between',
//   //   marginBottom: verticalScale(15),
//   // },
//   // answerBox: {
//   //   flex: 0.8,
//   //   backgroundColor: 'transparent',
//   //   padding: scale(15),
//   //   borderRadius: moderateScale(43),
//   //   borderWidth: 1,
//   //   borderColor: 'rgba(94, 58, 139, 0.3)',
//   // },
  
//   // answer: {
//   //   fontSize: scale(16),
//   //   textAlign: 'center',
//   // },
  
//   // answerPercentage: {
//   //   flex: 0.2,
//   //   fontSize: scale(14),
//   //   textAlign: 'right',
//   //   marginLeft: scale(10),
//   // },
//   answerRow: {
//   flexDirection: 'row',
//   alignItems: 'center',
//   justifyContent: 'space-between',
//   marginBottom: verticalScale(15),
// },
// answerBox: {
//   flexDirection: 'row',
//   justifyContent: 'space-between',
//   alignItems: 'center',
//   backgroundColor: 'transparent',
//   padding: scale(15),
//   borderRadius: moderateScale(43),
//   borderWidth: 1,
//   borderColor: 'rgba(94, 58, 139, 0.3)',
//   width: '80%', // Ensure it takes enough space for both answer and percentage
// },
// answer: {
//   fontSize: scale(16),
//   textAlign: 'left', // Align text to the left
//   flex: 1, // Allow text to take available space
// },
// answerPercentage: {
//   fontSize: scale(14),
//   textAlign: 'right',
//   color: 'white',
//   marginLeft: scale(10), // Space between answer and percentage
//   flex: 0.3, // Percentage takes up smaller space
// },

//   overlayContent: {
//     position: 'absolute',
//     top: 0,
//     width: '100%',
//     height: '100%',
//     justifyContent: 'space-between',
//     padding: moderateScale(10),
//     marginTop: moderateVerticalScale(35),
//   },
//   topBar: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   tabContainer: {
//     flexDirection: 'row',
//   },
//   tabText: {
//     fontSize: scale(14),
//     marginHorizontal: scale(8),
//     color: 'white',
//   },
//   sendIconContainer: {
//     padding: scale(8),
//   },
//   iconButtonsContainer: {
//     position: 'absolute',
//     right: scale(5),
//     bottom: verticalScale(110),
//     zIndex: 1,
//     alignItems: 'center',
//   },
//   iconButton: {
//     marginVertical: verticalScale(5),
//     alignItems: 'center',
//   },
//   profileImage: {
//     width: moderateScale(40),
//     height: moderateScale(40),
//     borderRadius: moderateScale(20),
//     marginBottom: verticalScale(10),
//   },
//   iconCount: {
//     fontSize: scale(12),
//     color: 'white',
//     marginTop: verticalScale(5),
//   },
//   bottomInfoContainer: {
//     position: 'absolute',
//     bottom: verticalScale(70),
//     left: scale(15),
//     right: scale(15),
//     justifyContent: 'space-between',
//   },
//   userInfoRow: {
//     flexDirection: 'row',
//   },
//   userName: {
//     color: 'white',
//     fontSize: scale(14),
//     fontWeight: 'bold',
//   },
//   userId: {
//     color: 'white',
//     fontSize: scale(12),
//     marginLeft: scale(10),
//   },
//   songInfoRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginTop: verticalScale(5),
//   },
//   songName: {
//     color: 'white',
//     fontSize: scale(12),
//   },
//   listContent: {
//     paddingBottom: moderateScale(40),
//   },
// });

// export default MediaPage;
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
  SafeAreaView,
  FlatList,
  Dimensions
} from 'react-native';
import { scale, verticalScale, moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import Logo from '../../../assets/svg/LogoSvg.svg';
import Send from '../../../assets/svg/Send.svg';
import Arrowup from '../../../assets/svg/arrowup.svg';
import Down from '../../../assets/svg/arrowdown.svg';
import Message from '../../../assets/svg/massage.svg';
import Reshare from '../../../assets/svg/reshare.svg';
import Save from '../../../assets/svg/saved.svg';
import Send2 from '../../../assets/svg/send2.svg';
import Song from '../../../assets/svg/song.svg';

const { width } = Dimensions.get('window');

const content = [
  {
    id: '1',
    type: 'image',
    userName: 'john_doe',
    userId: '@johndoe123',
    songName: 'Awesome Beats - DJ Mix',
    image: require('../../../assets/svg/reel_image.png'),
  },
  {
    id: '2',
    type: 'text',
    userName: 'jane_doe',
    userId: '@janedoe456',
    question: 'What’s your favorite way to relax after work?',
    answers: [
      'TV & Snacks',
      'Card games with friends',
      'Go on Social Media',
      'Reading'
    ],
    songName: 'Chill Vibes - Relax Music',
  },
];

const MediaPage = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [pollResults, setPollResults] = useState({});

  const handleAnswerSelect = (answerIndex) => {
    // Calculate random results for each answer
    const randomResults = content[1].answers.reduce((acc, _, index) => {
      acc[index] = Math.floor(Math.random() * 100);
      return acc;
    }, {});

    setSelectedAnswer(answerIndex);
    setPollResults(randomResults);
  };

  const renderItem = ({ item }) => {
    // Get the highest percentage value to change color dynamically
    const maxPercentage = Math.max(...Object.values(pollResults));

    return (
      <View style={styles.pageContainer}>
        {item.type === 'image' ? (
          <Image source={item.image} style={styles.reelBackground} />
        ) : (
          <View style={styles.textContainer}>
            <LinearGradient
              colors={['#000AFFB3', '#6F00FFB3', '#FF0000B3']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.gradientBackground}
            >
              <Text style={styles.question}>{item.question}</Text>
              <View style={styles.answersContainer}>
                {item.answers.map((answer, index) => {
                  const isHighest = pollResults[index] === maxPercentage;
                  const percentage = pollResults[index] || 0;
                  return (
                    <View key={index} style={styles.answerRow}>
                      <TouchableOpacity
                        style={[
                          styles.answerBox,
                          selectedAnswer === index && { borderColor: 'blue' }, // Highlight selected answer
                        ]}
                        onPress={() => handleAnswerSelect(index)}
                      >
                        <Text style={[styles.answer, { color: isHighest ? 'white' : 'white' }]}>
                          {answer}
                        </Text>
                        <Text
                          style={[
                            styles.answerPercentage,
                            { color: isHighest ? 'white' : 'white' },
                          ]}
                        >
                          {percentage}%
                        </Text>
                      </TouchableOpacity>
                    </View>
                  );
                })}
              </View>
            </LinearGradient>
          </View>
        )}

        <View style={styles.overlayContent}>
          <View style={styles.topBar}>
            <Logo />
            <View style={styles.tabContainer}>
              <Text style={styles.tabText}>For You</Text>
              <Text style={styles.tabText}>Following</Text>
            </View>
            <TouchableOpacity style={styles.sendIconContainer}>
              <Send width={moderateScale(25)} height={moderateScale(25)} />
            </TouchableOpacity>
          </View>

          <View style={styles.iconButtonsContainer}>
            <Image source={require('../../../assets/svg/image.png')} style={styles.profileImage} />
            <TouchableOpacity style={styles.iconButton}>
              <Arrowup width={moderateScale(25)} height={moderateScale(25)} />
              <Text style={styles.iconCount}>12.3k</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Down width={moderateScale(25)} height={moderateScale(25)} />
              <Text style={styles.iconCount}>142</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Message width={moderateScale(25)} height={moderateScale(25)} />
              <Text style={styles.iconCount}>48</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Reshare width={moderateScale(25)} height={moderateScale(25)} />
              <Text style={styles.iconCount}>48</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Save width={moderateScale(25)} height={moderateScale(25)} />
              <Text style={styles.iconCount}>48</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Send2 width={moderateScale(25)} height={moderateScale(25)} />
              <Text style={styles.iconCount}>48</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.bottomInfoContainer}>
            <View style={styles.userInfoRow}>
              <Text style={styles.userName}>{item.userName}</Text>
              <Text style={styles.userId}>{item.userId}</Text>
            </View>
            <View style={styles.songInfoRow}>
              <Text style={styles.songName} numberOfLines={1}>
                {item.songName}
              </Text>
              <Song width={moderateScale(25)} height={moderateScale(25)} />
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <FlatList
        data={content}
        renderItem={renderItem}
        scrollEnabled={true}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    width: '100%',
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  reelBackground: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  textContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradientBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: moderateScale(20),
    borderRadius: moderateScale(10),
  },
  question: {
    fontSize: scale(20),
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: moderateScale(20),
  },
  answersContainer: {
    marginTop: verticalScale(20),
    width: '100%',
  },
  answerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: verticalScale(15),
  },
  answerBox: {
    flexDirection: 'row',  // Ensures both answer and percentage are in a row
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingVertical: scale(15),
    paddingHorizontal:scale(5),
    marginHorizontal:moderateScale(10),
    borderRadius: moderateScale(43),
    borderWidth: 1,
    borderColor: 'rgba(94, 58, 139, 0.3)',
    width: '80%', 
  },
  answer: {
    fontSize: scale(14),
    textAlign: 'left', // Align text to the left
    flex: 1, // This will ensure the answer text occupies available space
  },
  answerPercentage: {
    fontSize: scale(14),
    textAlign: 'right',  // Align percentage to the right
    color: 'white',
    marginLeft: scale(10),  // Space between answer and percentage
    flex: 0.3, // Percentage takes up smaller space
  },
  overlayContent: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    padding: moderateScale(10),
    marginTop: moderateVerticalScale(35),
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tabContainer: {
    flexDirection: 'row',
  },
  tabText: {
    fontSize: scale(14),
    marginHorizontal: scale(8),
    color: 'white',
  },
  sendIconContainer: {
    padding: scale(8),
  },
  iconButtonsContainer: {
    position: 'absolute',
    right: scale(5),
    bottom: verticalScale(110),
    zIndex: 1,
    alignItems: 'center',
  },
  iconButton: {
    marginVertical: verticalScale(5),
    alignItems: 'center',
  },
  profileImage: {
    width: moderateScale(40),
    height: moderateScale(40),
    borderRadius: moderateScale(20),
    marginBottom: verticalScale(10),
  },
  iconCount: {
    fontSize: scale(12),
    color: 'white',
    marginTop: verticalScale(5),
  },
  bottomInfoContainer: {
    position: 'absolute',
    bottom: verticalScale(70),
    left: scale(15),
    right: scale(15),
    justifyContent: 'space-between',
  },
  userInfoRow: {
    flexDirection: 'row',
  },
  userName: {
    color: 'white',
    fontSize: scale(14),
    fontWeight: 'bold',
  },
  userId: {
    color: 'white',
    fontSize: scale(12),
    marginLeft: scale(10),
  },
  songInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: verticalScale(5),
  },
  songName: {
    color: 'white',
    fontSize: scale(12),
  },
  listContent: {
    paddingBottom: moderateScale(40),
  },
});

export default MediaPage;

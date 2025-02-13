
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
  const [pollResults, setPollResults] = useState({
    0: 0, // TV & Snacks
    1: 0, // Card games
    2: 0, // Social Media
    3: 0, // Reading
  });
  const [totalVotes, setTotalVotes] = useState(0);

  const handleAnswerSelect = (answerIndex) => {
    const updatedPollResults = { ...pollResults };
    updatedPollResults[answerIndex] += 1; // Increment the count for the selected answer
    setPollResults(updatedPollResults);
    setTotalVotes(totalVotes + 1); // Increment total votes
    setSelectedAnswer(answerIndex); // Highlight the selected answer
  };


  const renderItem = ({ item }) => {
    // Check if answers exist and if it's an array, default to empty array
    const answers = item.answers || []; // Ensure answers is always an array

    // Calculate the percentage for each answer
    const answerPercentages = answers.map((_, index) => {
      const percentage = totalVotes > 0 ? (pollResults[index] / totalVotes) * 100 : 0;
      return percentage;
    });

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
                {answers.map((answer, index) => {
                  const percentage = answerPercentages[index];
                  return (
                    <View key={index} style={styles.answerRow}>
                      <TouchableOpacity
                        style={[
                          styles.answerBox,
                          selectedAnswer === index && { borderColor: 'blue' }, // Highlight selected answer
                        ]}
                        onPress={() => handleAnswerSelect(index)}
                      >
                        <Text style={styles.answer}>{answer}</Text>
                        {totalVotes > 0 && (
                          <Text style={styles.answerPercentage}>
                            {Math.round(percentage)}%
                          </Text>
                        )}
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
            <Logo width={moderateScale(44)} height={moderateScale(44)} />
            <View style={styles.tabContainer}>
              <Text style={styles.tabText}>For You</Text>
              <Text style={styles.tabText1}>Following</Text>
            </View>
            <TouchableOpacity style={styles.sendIconContainer}>
              <Send width={moderateScale(20)} height={moderateScale(20)} />
            </TouchableOpacity>
          </View>

          <View style={styles.iconButtonsContainer}>
            <Image source={require('../../../assets/svg/image.png')} style={styles.profileImage} />
            <TouchableOpacity style={styles.iconButton}>
              <Arrowup width={moderateScale(24)} height={moderateScale(24)} />
              <Text style={styles.iconCount}>12.3k</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Down width={moderateScale(24)} height={moderateScale(24)} />
              <Text style={styles.iconCount}>142</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Message width={moderateScale(24)} height={moderateScale(24)} />
              <Text style={styles.iconCount}>48</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Reshare width={moderateScale(24)} height={moderateScale(24)} />
              <Text style={styles.iconCount}>48</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Save width={moderateScale(24)} height={moderateScale(24)} />
              <Text style={styles.iconCount}>48</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Send2 width={moderateScale(24)} height={moderateScale(24)} />
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
  // ... (existing styles)
  answerPercentage: {
    fontSize: 14,
    textAlign: 'right', // Align percentage to the right
    color: 'white',
    fontFamily: "Avenir-LT-Std-35-Light",
    marginRight: 10,
    // flex: 0.3,
  },
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
    // width: '100%',
    // height: '100%',
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
    fontSize: 24,
    color: 'white',
    fontFamily: "AvenirLTStd-45-Book",
    textAlign: 'center',
    lineHeight: 36,

  },
  answersContainer: {
    marginTop: verticalScale(20),
    // width: '100%',

  },
  answerRow: {
    flexDirection: 'row',
    marginBottom: verticalScale(15),
    alignItems: "center",
    justifyContent: "center",
  },
  answerBox: {
    flexDirection: 'row',  // Ensures both answer and percentage are in a row
    backgroundColor: 'transparent',
    paddingVertical: scale(15),
    borderRadius: moderateScale(43),
    marginHorizontal: moderateScale(20),
    borderWidth: 1,
    borderColor: 'rgba(43, 43, 44, 0.3)',
     width: '80%',
  },
  answer: {
    fontSize: 14,
    fontFamily: "Avenir-LT-Std-35-Light",
    textAlign: 'center',
    color: 'white',
    flex: 1,
  },
  // answerPercentage: {
  //   fontSize: 14,
  //   textAlign: 'right',  // Align percentage to the right
  //   color: 'white',
  //   fontFamily:"Avenir-LT-Std-35-Light",

  //   marginRight: 10, 
  //   flex: 0.3, 
  // },
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
    fontSize: 14,
    marginHorizontal: scale(8),
    color: 'white',
    fontFamily: "Avenir-LT-Std-85-Heavy"
  },
  tabText1: {
    fontSize: 14,
    marginHorizontal: scale(15),
    color: 'white',
    fontFamily: "Avenir-LT-Std-35-Light"
  },
  sendIconContainer: {
    padding: scale(8),
  },
  iconButtonsContainer: {
    position: 'absolute',
    right: scale(5),
    bottom: verticalScale(130),
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
    fontSize: 10,
    color: 'white',
    marginTop: verticalScale(5),
    fontFamily: "AvenirLTStd65-Medium"
  },
  bottomInfoContainer: {
    position: 'absolute',
    bottom: verticalScale(80),
    left: scale(15),
    right: scale(15),
    justifyContent: 'space-between',
  },
  userInfoRow: {
    flexDirection: 'row',
    alignItems: "center"
  },
  userName: {
    color: 'white',
    fontSize: 16,

    fontFamily: "Avenir-LT-Std-85-Heavy"
  },
  userId: {
    color: 'white',
    fontSize: 12,
    marginLeft: scale(8),
    fontFamily: "Avenir-LT-Std-35-Light"
  },
  songInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: verticalScale(5),
  },
  songName: {
    color: 'white',
    fontSize: 14,
    fontFamily: "Avenir-LT-Std-35-Light"
  },
  listContent: {
    paddingBottom: moderateScale(40),
  },
});

export default MediaPage;

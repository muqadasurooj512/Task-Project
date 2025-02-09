
import React from 'react';
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
import Icon from 'react-native-vector-icons/FontAwesome5';
import { scale, verticalScale, moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import Logo from '../../../assets/svg/LogoSvg.svg';

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
  const renderItem = ({ item }) => (
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
              {item.answers.map((answer, index) => (
                <TouchableOpacity key={index} style={styles.answerBox}>
                  <Text style={styles.answer}>{answer}</Text>
                </TouchableOpacity>
              ))}
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
            <Icon name="paper-plane" size={scale(20)} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.iconButtonsContainer}>
          <Image source={require('../../../assets/svg/image.png')} style={styles.profileImage} />
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="arrow-up" size={scale(20)} color="white" />
            <Text style={styles.iconCount}>12.3k</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="arrow-down" size={scale(20)} color="white" />
            <Text style={styles.iconCount}>142</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="comment" size={scale(20)} color="white" />
            <Text style={styles.iconCount}>48</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="retweet" size={scale(20)} color="white" />
            <Text style={styles.iconCount}>48</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="bookmark" size={scale(20)} color="white" />
            <Text style={styles.iconCount}>48</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="share-alt" size={scale(20)} color="white" />
            <Text style={styles.iconCount}>48</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomInfoContainer}>
          <View style={styles.userInfoRow}>
            <Text style={styles.userName}>{item.userName}</Text>
            <Text style={styles.userId}>{item.userId}</Text>
          </View>
          <View style={styles.songInfoRow}>
            <Text style={styles.songName} numberOfLines={1}>{item.songName}</Text>
            <Icon name="music" size={scale(16)} color="white" />
          </View>
        </View>
      </View>
    </View>
  );

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

export default MediaPage;

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
    width: '75%',
  },
  answerBox: {
    backgroundColor: 'transparent',
    padding: scale(15),
    borderRadius: moderateScale(43),
    marginBottom: verticalScale(20),
    alignItems: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 1,
    borderWidth: 1,
    borderColor: 'rgba(94, 58, 139, 0.3)',
  },
  answer: {
    fontSize: scale(16),
    color: 'white',
    textAlign: 'center',
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
  }
});

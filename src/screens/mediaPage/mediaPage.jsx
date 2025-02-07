
// import React from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   StatusBar,
//   TouchableOpacity,
//   Image,
//   ScrollView,
//   SafeAreaView
// } from 'react-native';
// import Logo from '../../../assets/svg/LogoSvg.svg';
// import Icon from 'react-native-vector-icons/FontAwesome5';
// import { scale, verticalScale, moderateVerticalScale, moderateScale } from 'react-native-size-matters';

// const MediaPage = () => {
//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <ScrollView contentContainerStyle={styles.container}>
//         <StatusBar barStyle="dark-content" backgroundColor="red" />

//         {/* Top Bar with Send Icon */}
//         <View style={styles.topBar}>
//           <Logo/>
//           <View style={styles.tabContainer}>
//             <Text style={styles.tabText}>For You</Text>
//             <Text style={styles.tabText}>Following</Text>
//           </View>
//           <TouchableOpacity style={styles.sendIconContainer}>
//             <Icon name="paper-plane" size={scale(20)} color="black" />
//           </TouchableOpacity>
//         </View>

//         <View style={styles.content}>
//           {/* Profile Image in a Circle */}
//           <Image
//             source={require('../../../assets/svg/image.png')}
//             style={styles.profileImage}
//           />

//           {/* Action Icons */}
//           <View style={styles.iconButtonsContainer}>
//             <TouchableOpacity style={styles.iconButton}>
//               <Icon name="arrow-up" size={scale(20)} color="black" />
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.iconButton}>
//               <Icon name="arrow-down" size={scale(20)} color="black" />
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.iconButton}>
//               <Icon name="comment" size={scale(20)} color="black" />
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.iconButton}>
//               <Icon name="retweet" size={scale(20)} color="black" />
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.iconButton}>
//               <Icon name="bookmark" size={scale(20)} color="black" />
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.iconButton}>
//               <Icon name="share-alt" size={scale(20)} color="black" />
//             </TouchableOpacity>
//           </View>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default MediaPage;

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     backgroundColor: '#fff',
//   },
//   topBar: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: moderateVerticalScale(18),
//   },
//   tabContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   tabText: {
//     fontSize: scale(14),
//     marginHorizontal: scale(8),
//   },
//   sendIconContainer: {
//     padding: scale(8),
//   },
//   content: {
//     flex: 1,
//     alignItems: 'flex-end',
//     marginEnd:moderateScale(15),
//     marginTop: verticalScale(120),
//   },
//   profileImage: {
//     width: scale(40),
//     height: scale(40),
//     borderRadius: scale(25),
//     marginBottom: verticalScale(10),
//   },
//   iconButtonsContainer: {
//     alignItems: 'center',
//   },
//   iconButton: {
//     marginVertical: verticalScale(15),
//   },
// });
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
  FlatList
} from 'react-native';
import Logo from '../../../assets/svg/LogoSvg.svg';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { scale, verticalScale, moderateVerticalScale, moderateScale } from 'react-native-size-matters';

const MediaPage = () => {
  const content = [
    {
      type: 'media',
      image: require('../../../assets/svg/reel_image.png'),
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {/* Reel Background */}
        <Image source={require('../../../assets/svg/reel_image.png')} style={styles.reelBackground} />

        {/* Foreground Content */}
        <ScrollView>
          <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />

          {/* Top Bar with Logo and Tabs */}
          <View style={styles.topBar}>
            <Logo />
            <View style={styles.tabContainer}>
              <Text style={styles.tabText}>For You</Text>
              <Text style={styles.tabText}>Following</Text>
            </View>
            <TouchableOpacity style={styles.sendIconContainer}>
              <Icon name="paper-plane" size={scale(20)} color="black" />
            </TouchableOpacity>
          </View>

          {/* Profile Image and Icons */}
          <View style={styles.content}>
            <Image source={require('../../../assets/svg/image.png')} style={styles.profileImage} />
            <View style={styles.iconButtonsContainer}>
              <TouchableOpacity style={styles.iconButton}>
                <Icon name="arrow-up" size={scale(20)} color="black" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <Icon name="arrow-down" size={scale(20)} color="black" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <Icon name="comment" size={scale(20)} color="black" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <Icon name="retweet" size={scale(20)} color="black" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <Icon name="bookmark" size={scale(20)} color="black" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <Icon name="share-alt" size={scale(20)} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default MediaPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  reelBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop:moderateVerticalScale(30),
    padding: moderateVerticalScale(20),
    zIndex: 1,
  },
  tabContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tabText: {
    fontSize: scale(14),
    marginHorizontal: scale(8),
  },
  sendIconContainer: {
    padding: scale(8),
  },
  content: {
    flex: 1,
    alignItems: 'flex-end',
    marginEnd: moderateScale(15),
    marginTop: verticalScale(150),
    zIndex: 1,
  },
  profileImage: {
    width: scale(40),
    height: scale(40),
    borderRadius: scale(25),
    marginBottom: verticalScale(10),
  },
  iconButtonsContainer: {
    alignItems: 'center',
  },
  iconButton: {
    marginVertical: verticalScale(15),
  },
});

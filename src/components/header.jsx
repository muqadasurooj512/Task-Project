// import React from 'react';
// import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';

// const Header = () => {
//   return (
//     <View style={styles.header}>
//       {/* Logo Image */}
//       <Image source={require('../../assets/svg/log2.png')} style={styles.logo} />

//       {/* Gradient Border Effect */}
//       <LinearGradient
//         colors={['#000AFF', '#6F00FF', '#FF0000']}
//         style={styles.gradientBorder}
//         start={{ x: 0, y: 0 }}
//         end={{ x: 1, y: 1 }}
//       >
//         {/* Post Button */}
//         <TouchableOpacity style={styles.postButton} onPress={() => console.log("Posted!")}>
//           <Text style={styles.postButtonText}>Post</Text>
//         </TouchableOpacity>
//       </LinearGradient>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   logo: {
//     width: 100,
//     height: 40,
//     resizeMode: 'contain',
//   },
//   gradientBorder: {
//     borderRadius: 25,
//     padding: 2,
//   },
//   postButton: {
//     backgroundColor: '#000',
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     borderRadius: 25,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   postButtonText: {
//     color: '#FFF',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default Header;
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const Header = () => {
  return (
    <View style={styles.header}>
      {/* Logo Image */}
      <Image source={require('../../assets/svg/log2.png')} style={styles.logo} />

      {/* Gradient Border Effect */}
      <LinearGradient
        colors={['#000AFF', '#6F00FF', '#FF0000']}
        style={styles.gradientBorder}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        {/* Post Button */}
        <TouchableOpacity style={styles.postButton} onPress={() => console.log('Posted!')}>
          <MaterialIcons name="send" size={moderateScale(20)} color="#FFF" style={styles.icon} />
          <Text style={styles.postButtonText}>Post</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: verticalScale(20),
  },
  logo: {
    width: scale(100),
    height: verticalScale(40),
    resizeMode: 'contain',
  },
  gradientBorder: {
    borderRadius: moderateScale(25),
    padding: moderateScale(2),
  },
  postButton: {
    backgroundColor: '#000',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scale(20),
    paddingVertical: verticalScale(10),
    borderRadius: moderateScale(25),
    justifyContent: 'center',
  },
  postButtonText: {
    color: '#FFF',
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    marginLeft: scale(5),
  },
  icon: {
    marginRight: scale(5),
  },
});

export default Header;

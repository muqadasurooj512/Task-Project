
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { scale, verticalScale, moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import Arrow from '../../assets/svg/arrow.svg';
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
          {/* <MaterialIcons name="send" size={moderateScale(20)} color="#FFF" style={styles.icon} /> */}
          <Text style={styles.postButtonText}>Post</Text>
               <Arrow width={moderateScale(12)} height={moderateScale(14)} />
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
    marginTop:moderateVerticalScale(50)
  },
  logo: {
    width: scale(90),
    height: verticalScale(29),
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
    paddingVertical: verticalScale(8),
    borderRadius: moderateScale(25),
    justifyContent: 'center',
  },
  postButtonText: {
    color: '#FFF',
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    marginLeft: scale(5),
    marginRight: scale(5),
  },
  icon: {
    marginLeft: scale(10),
  },
});

export default Header;

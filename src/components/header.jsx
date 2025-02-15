
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { scale, verticalScale, moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import Arrow from '../../assets/svg/arrow.svg';
import Cross from "../../assets/svg/cross2.svg"

const Header = ({ showCrossIcon, onCrossIconPress, onSubmit, isPostEnabled }) => {
  return (
    <View style={styles.header}>
      {showCrossIcon && (
        <TouchableOpacity onPress={onCrossIconPress} style={styles.logoContainer}>
          <Image source={require('../../assets/svg/log2.png')} style={styles.logo} />
        </TouchableOpacity>
      )}

      {/* Gradient Border Effect */}
      <LinearGradient
        colors={isPostEnabled ? ["#000AFF", "#6F00FF", "#FF0000"] : ["#555", "#555", "#555"]}
        style={styles.gradientBorder}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        {/* Post Button */}
        <TouchableOpacity style={styles.postButton} onPress={onSubmit} disabled={!isPostEnabled}>
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
    marginTop: moderateVerticalScale(60),
    paddingHorizontal: scale(15),
  },
  iconContainer: {
    position: 'absolute',
    left: scale(10),
  },
  logoContainer: {
    flex: 1,
  },
  logo: {
    width: scale(80),
    height: verticalScale(25),
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
    paddingHorizontal: scale(18),
    paddingVertical: verticalScale(5),
    borderRadius: moderateScale(43),
    justifyContent: 'center',
  },
  postButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontFamily: "AvenirLTStd65-Medium",
    marginLeft: 5,
    marginRight: 10,
  },
});

export default Header;

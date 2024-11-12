import {  StyleSheet,  View } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
const SplashScreen = () => {
  return (

    <View style={styles.Container}>
      <LottieView
      source={require("../../components/animation/logo.json")}
      style={styles.Image}
      autoPlay
      loop/>
    </View>



  );
}

export default SplashScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#4CAF50"
  },
  Image: {
    width: 250,
    height:250,

  },
});

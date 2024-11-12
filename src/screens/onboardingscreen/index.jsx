import { StyleSheet, View } from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
const OnboardingScreen = () => {
  const navigation = useNavigation();
const handleDone=()=>{
  navigation.navigate('SignIn');
}
  return (
    <View style={styles.container}>
      <Onboarding
      onDone={handleDone}
      onSkip={handleDone}
        pages={[
          {
            backgroundColor: '#f7c1c1',
            image: (
              <LottieView
                source={require('../../components/animation/onboardingone.json')}
                autoPlay
                loop
                style={styles.animation}
              />
            ),
            title: 'Discover Your Next Read',
            subtitle: 'Browse a vast collection of books tailored to your taste.',
          },
          {
            backgroundColor: '#fad29d',
            image: (
              <LottieView
                source={require('../../components/animation/onboardingtwo.json')}
                autoPlay
                loop
                style={styles.animation}
              />
            ),
            title: 'Track Your Reading Progress',
            subtitle: 'Set goals and keep track of what you’re reading.',
          },
          {
            backgroundColor: '#dcb0f0',
            image: (
              <LottieView
                source={require('../../components/animation/onboardingthree.json')}
                autoPlay
                loop
                style={styles.animation}
              />
            ),
            title: 'Create Your Bookshelf',
            subtitle: 'Save and organize your favorite books for easy access.',
          },
        ]}
        titleStyles={styles.title}
        subtitleStyles={styles.subtitle}
        containerStyles={styles.onboardingContainer}
      />
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',

  },
  animation: {
    width:300,
    height:300,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#000000',
    textAlign: 'center',
  },
  onboardingContainer: {
    paddingHorizontal:15
  },
});

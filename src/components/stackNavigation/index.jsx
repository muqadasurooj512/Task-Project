import React from 'react'
import SignUP from '../../auth/signUp';
import SignIn from '../../auth/signIn';
import Details from '../../screens/details';
import BookPublish from '../../screens/bookpublish';
import { getAuth } from '@react-native-firebase/auth';
import OnboardingScreen from '../../screens/onboardingscreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MyTabs from '../bottomtabnavigation';
import PDFViewer from '../../screens/pdfviewer';
import BookMark from '../../screens/bookmark';

const Stack= createNativeStackNavigator();

const AppNavigation = () => {
  const auth = getAuth()
  const user = auth.currentUser
  return (
    <Stack.Navigator initialRouteName={user? 'HomeScreen':'OnboardingScreen'} screenOptions={{ headerShown: false }}>
      <Stack.Screen name='OnboardingScreen' component={OnboardingScreen}/>
      <Stack.Screen name='SignUp' component={SignUP}/>
      <Stack.Screen name='SignIn' component={SignIn}/>
      <Stack.Screen name='HomeScreen'   component={MyTabs}/>
      <Stack.Screen name='BookPublish' component={BookPublish} />
      <Stack.Screen name='Details' component={Details} />
      <Stack.Screen name='PDFViewer' component={PDFViewer} />
      <Stack.Screen name='BookMark' component={BookMark} />
    </Stack.Navigator>

  )
}

export default AppNavigation

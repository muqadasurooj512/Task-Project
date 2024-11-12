import { StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/home';
import Icon from 'react-native-vector-icons/FontAwesome5/';
import Icons from 'react-native-vector-icons/Fontisto/';
import Profile from '../../screens/profile';
import BookMark from '../../screens/bookmark';

const MyTabs = () => {
const Tab = createBottomTabNavigator();

  return (

    <Tab.Navigator initialRouteName='TabHomeScreen' screenOptions={{ headerShown: false, tabBarShowLabel:false,

      }}>
      <Tab.Screen name='TabHomeScreen'  component={HomeScreen} options={{title:'', tabBarIcon : ({focused })=>
      (<Icon name='home' size={28} color={focused ? '#f59d05' : '#ebbb68'}/> )
      }}/>
       <Tab.Screen name='BookMark' component={BookMark} options={{title:'', tabBarIcon : ({focused })=>
      (<Icons name='bookmark-alt' size={28} color={focused ? '#f59d05' : '#ebbb68'}/> )}}/>
      <Tab.Screen name='Profile' component={Profile} options={{title:'', tabBarIcon : ({focused })=>
      (<Icon name='user-alt' size={28} color={focused ? '#f59d05' : '#ebbb68'}/> )}}/>
    </Tab.Navigator>
  )
}

export default MyTabs

const styles = StyleSheet.create({})
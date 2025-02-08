import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StackNavigation from './src/layouts/stackNavigation/stackNavigation'
import BottomNavigation from './src/layouts/tabNavigation/tabNavigation'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  return (
   <NavigationContainer>
<StackNavigation/>
   </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
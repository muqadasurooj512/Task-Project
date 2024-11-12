import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const CustomDrawer = (props) => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>Calculation App</Text>
        </View>
        <View style={styles.drawerItems}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>


    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headingContainer: {
    paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 16,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
  },
  drawerItems: {
    flex: 1,
  },
  signOutContainer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  signOutButton: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#f44336',
    borderRadius: 8,
    alignItems: 'center',
  },
  signOutText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

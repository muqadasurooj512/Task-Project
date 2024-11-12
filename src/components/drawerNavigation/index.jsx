import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomDrawer from '../customdrawer';
import CalculationPage from '../../screens/calculationPage/CalculationPage';
import SumHistoryPage from '../../screens/SumHistoryPage/SumHistoryPage';

const DrawerNavigation = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      initialRouteName="CalculationPage"
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerStyle: {
          backgroundColor: '#4CAF50',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        drawerLabelStyle: {
          fontSize: 18,
        },
        drawerActiveTintColor: '#4CAF50',
        drawerInactiveTintColor: '#000',
      }}>

      <Drawer.Screen
        name="CalculationPage"
        component={CalculationPage}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons
              name="calculator"
              size={30}
              color={color}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="SumHistoryPage"
        component={SumHistoryPage}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons
              name="list-circle"
              size={30}
              color={color}
            />
          ),
        }}
      />

    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

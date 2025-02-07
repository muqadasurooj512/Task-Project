import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { scale, verticalScale, moderateVerticalScale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MediaPage from "../../screens/mediaPage/mediaPage";
import AddScreen from "../../screens/addScreen/addScreen";
import ProfilePage from "../../screens/profilePage/profilePage";
import SearchPage from "../../screens/searchPage/searchPage";
import ShopPage from "../../screens/shopPage/shopPage";

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.customButtonContainer} onPress={onPress}>
      <View style={styles.customButton}>
        <Icon name="plus" size={24} color="white" />
      </View>
    </TouchableOpacity>
  );
};

const BottomNavigation = ({ navigation }) => {
  return (
    <Tab.Navigator
      initialRouteName="MediaPage"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "black",
          height: moderateVerticalScale(70),
          shadowColor: "black",
          shadowOpacity: 0.1,
          shadowOffset: { width: 0, height: moderateVerticalScale(2) },
          shadowRadius: 1,
          elevation: 5,
        },
        tabBarLabelPosition: "below-icon",
        tabBarLabelStyle: {
          fontSize: 12,
          marginTop: verticalScale(2),
        },
        tabBarIconStyle: {
          marginTop: verticalScale(8),
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="MediaPage"
        component={MediaPage}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <Icon
              name="home"
              size={24}
              color={focused ? "white" : "gray"}
              style={styles.icon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ShopPage"
        component={ShopPage}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <Icon
              name="shopping-cart"
              size={24}
              color={focused ? "white" : "gray"}
              style={styles.icon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="AddPage"
        component={AddScreen}
        options={{
          tabBarButton: (props) => (
            <CustomTabBarButton
              onPress={() => navigation.replace("AddPage")}
            />
          ),
          tabBarLabel: "",
          tabBarIcon: () => null,
        }}
      />
      <Tab.Screen
        name="SearchPage"
        component={SearchPage}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <Icon
              name="search"
              size={24}
              color={focused ? "white" : "gray"}
              style={styles.icon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProfilePage"
        component={ProfilePage}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <Icon
              name="user"
              size={24}
              color={focused ? "white" : "gray"}
              style={styles.icon}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  customButtonContainer: {
    top: moderateVerticalScale(8),
    justifyContent: "center",
    alignItems: "center",
  },
  customButton: {
    width: scale(30),
    height: scale(30),
    borderRadius: scale(30),
    borderColor: "white",
    borderWidth: 2,  // Added to make the border visible
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: moderateVerticalScale(1) },
    shadowRadius: 1,
    elevation: 5,
  },
  
  icon: {
    width: scale(24),
    height: scale(24),
  },
});

export default BottomNavigation;

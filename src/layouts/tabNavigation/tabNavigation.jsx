
import React, { useState, useRef } from "react";
import { View, TouchableOpacity, StyleSheet, Animated, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import Home from '../../../assets/svg/home.svg';
import Shop from '../../../assets/svg/Shop.svg';
import Search from '../../../assets/svg/search.svg';
import Account from '../../../assets/svg/account.svg';
import Quote from '../../../assets/svg/quote.svg';
import Media from '../../../assets/svg/media.svg';
import Poll from '../../../assets/svg/poll.svg';
import MediaPage from "../../screens/mediaPage/mediaPage";
import ProfilePage from "../../screens/profilePage/profilePage";
import SearchPage from "../../screens/searchPage/searchPage";
import ShopPage from "../../screens/shopPage/shopPage";
import Icon from 'react-native-vector-icons/MaterialIcons'; 
import StackNavigation from "../stackNavigation/stackNavigation";
import { scale, verticalScale, moderateScale, moderateVerticalScale } from 'react-native-size-matters';

const Tab = createBottomTabNavigator();

const FloatingActionButton = ({ onMediaPress, onPollPress, onQuotePress }) => {
  const [expanded, setExpanded] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;

  const toggleMenu = () => {
    const toValue = expanded ? 0 : 1;
    setExpanded(!expanded);
    Animated.timing(animation, {
      toValue,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const getStyle = (angle, radius) => {
    return {
      transform: [
        {
          translateX: animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, radius * Math.cos(angle)],
          }),
        },
        {
          translateY: animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, radius * Math.sin(angle)],
          }),
        },
      ],
      opacity: animation,
    };
  };

  return (
    <View style={styles.fabContainer}>
     
      <Animated.View style={[styles.option, getStyle(-Math.PI / 3, 150)]}>
     
        <TouchableOpacity style={styles.fabOption} onPress={onQuotePress}>
          
          <Poll width={moderateScale(24)} height={moderateScale(24)} />
          <Text style={styles.label}>Poll</Text>
        </TouchableOpacity>
      </Animated.View>
      <Animated.View style={[styles.option, getStyle(-Math.PI / 2, 150)]}>
        <TouchableOpacity style={styles.fabOption} onPress={onMediaPress}>
          <Media width={moderateScale(24)} height={moderateScale(24)} />
          <Text style={styles.label}>Media</Text>
        </TouchableOpacity>
      </Animated.View>
      <Animated.View style={[styles.option, getStyle(-2 * Math.PI / 3, 150)]}>
        <TouchableOpacity style={styles.fabOption} onPress={onPollPress}>
          <Quote width={moderateScale(24)} height={moderateScale(24)} />
          <Text style={styles.label}>Quote</Text>
        </TouchableOpacity>
      </Animated.View>
      <TouchableOpacity style={styles.simpleFab} onPress={toggleMenu}>
      <Icon name={expanded ? "close" : "add"} size={moderateScale(30)} color="white" />
       
      </TouchableOpacity>
      
    </View>
  );
};

const BottomNavigation = () => {
  const navigation = useNavigation();

  const handleMediaPress = () => {
    navigation.navigate('CameraScreen');
  };

  const handlePollPress = () => {
    navigation.navigate('QuoteScreen');
  };

  const handleQuotePress = () => {
    navigation.navigate('PollScreen');
  };

  return (
    <Tab.Navigator
      initialRouteName="MediaPage"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "black", 
          height: verticalScale(70),
          shadowColor: "black",
          shadowOpacity: 0.1,
          shadowOffset: { width: 0, height: 2 },
          shadowRadius: 1,
          elevation: 5,
        },
        tabBarLabelPosition: "below-icon",
        tabBarLabelStyle: {
          fontSize: moderateScale(12),
          marginTop: 2,
          color: "#fff", 
        },
        tabBarIconStyle: {
          marginTop: 8,
          color: "white", 
        },
        tabBarActiveTintColor: "white", 
        tabBarInactiveTintColor: "white", 
      }}
    >
      <Tab.Screen
        name="MediaPage"
        component={MediaPage}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <Home width={moderateScale(22)} height={moderateScale(22)} />
          ),
        }}
      />
      <Tab.Screen
        name="ShopPage"
        component={ShopPage}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <Shop width={moderateScale(22)} height={moderateScale(22)} />
          ),
        }}
      />
      <Tab.Screen
        name="StackNavigation"
        component={StackNavigation}
        options={{
          tabBarButton: () => (
            <FloatingActionButton
              onMediaPress={handleMediaPress}
              onPollPress={handlePollPress}
              onQuotePress={handleQuotePress}
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
            <Search width={moderateScale(22)} height={moderateScale(22)} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfilePage"
        component={ProfilePage}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <Account width={moderateScale(22)} height={moderateScale(22)} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  fabContainer: {
    position: "absolute",
    marginTop: moderateVerticalScale(8),
    alignSelf: "center",
    alignItems: "center",
    overflow: "visible",
  },
  simpleFab: {
    backgroundColor: "black",
    borderRadius: 80,
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    borderColor: "white",
    borderWidth: 2,
  },
  fabOption: {
    width: moderateScale(64),
    height: moderateScale(80),
    backgroundColor: "rgba(114, 116, 117, 0.6)",
    borderRadius: 10,
    justifyContent: "center",
      borderColor:"hsla(263, 51.10%, 35.30%, 0.60)",
    borderWidth:2,
    alignItems: "center",
    marginBottom: moderateScale(10),
  },
  label: {
    color: "white",
    marginTop: moderateScale(4),
    fontSize: moderateScale(12),
  },
  option: {
    position: "absolute",
  },
  icon: {
    width: moderateScale(24),
    height: moderateScale(24),
  },
});

export default BottomNavigation;

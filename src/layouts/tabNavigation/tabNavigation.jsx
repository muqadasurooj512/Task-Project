
// import React, { useState } from "react";
// import { View, TouchableOpacity, StyleSheet, Modal, Animated, Text } from "react-native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Icon from 'react-native-vector-icons/FontAwesome5';
// import { scale, verticalScale, moderateVerticalScale, moderateScale } from 'react-native-size-matters';
// import MediaPage from "../../screens/mediaPage/mediaPage";
// import AddScreen from "../../screens/addScreen/addScreen";
// import ProfilePage from "../../screens/profilePage/profilePage";
// import SearchPage from "../../screens/searchPage/searchPage";
// import ShopPage from "../../screens/shopPage/shopPage";
// import { useNavigation } from "@react-navigation/native";
// import StackNavigation from "../stackNavigation/stackNavigation";
// const Tab = createBottomTabNavigator();

// // Action Button Component
// const ActionButton = ({ isExpanded, onToggle }) => {
//   const [animation] = useState(new Animated.Value(0));
//   const navigation = useNavigation();

//   const translateY = animation.interpolate({
//     inputRange: [0, 1],
//     outputRange: [300, 0],
//   });

//   const showButtons = () => {
//     Animated.spring(animation, {
//       toValue: 1,
//       useNativeDriver: true,
//     }).start();
//   };

//   const hideButtons = () => {
//     Animated.timing(animation, {
//       toValue: 0,
//       duration: 200,
//       useNativeDriver: true,
//     }).start(() => onToggle(false));
//   };

//   return (
//     <View style={styles.actionButtonContainer}>
//       <TouchableOpacity
//         style={styles.mainButton}
//         onPress={() => {
//           if (isExpanded) {
//             hideButtons();
//           } else {
//             onToggle(true);
//             showButtons();
//           }
//         }}
//       >
//         <Icon name={isExpanded ? "times" : "plus"} size={28} color="white" />
//       </TouchableOpacity>

//       <Modal transparent visible={isExpanded} animationType="none" onRequestClose={hideButtons}>
//         <TouchableOpacity style={styles.modalOverlay} activeOpacity={1} onPress={hideButtons}>
//           <Animated.View style={[styles.buttonContainer, { transform: [{ translateY }] }]}>
//             <TouchableOpacity
//               style={styles.actionButton}
//               onPress={() => {
//                 hideButtons();
//                 navigation.replace("QuoteScreen");
//               }}
//             >
//               <Icon name="quote-left" size={24} color="white" />
//               <Text style={styles.buttonText}>Quote</Text>
//             </TouchableOpacity>

//             <TouchableOpacity
//               style={styles.actionButton}
//               onPress={() => {
//                 hideButtons();
//                 navigation.replace("CameraScreen");
//               }}
//             >
//               <Icon name="image" size={24} color="white" />
//               <Text style={styles.buttonText}>Media</Text>
//             </TouchableOpacity>

//             <TouchableOpacity
//               style={styles.actionButton}
//               onPress={() => {
//                 hideButtons();
//                 navigation.replace("PollScreen");
//               }}
//             >
//               <Icon name="question-circle" size={24} color="white" />
//               <Text style={styles.buttonText}>Question</Text>
//             </TouchableOpacity>
//           </Animated.View>
//         </TouchableOpacity>
//       </Modal>
//     </View>
//   );
// };

// const BottomNavigation = () => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   return (
//     <Tab.Navigator
//       initialRouteName="MediaPage"
//       screenOptions={{
//         headerShown: false,
//         tabBarStyle: {
//           position: "absolute",
//           backgroundColor: "black",
//           height: moderateVerticalScale(70),
//           shadowColor: "black",
//           shadowOpacity: 0.1,
//           shadowOffset: { width: 0, height: moderateVerticalScale(2) },
//           shadowRadius: 1,
//           elevation: 5,
//         },
//         tabBarLabelPosition: "below-icon",
//         tabBarLabelStyle: {
//           fontSize: 12,
//           marginTop: verticalScale(2),
//         },
//         tabBarIconStyle: {
//           marginTop: verticalScale(8),
//         },
//         tabBarActiveTintColor: "white",
//         tabBarInactiveTintColor: "gray",
//       }}
//     >
//       <Tab.Screen
//         name="MediaPage"
//         component={MediaPage}
//         options={{
//           tabBarLabel: "",
//           tabBarIcon: ({ focused }) => (
//             <Icon
//               name="home"
//               size={24}
//               color={focused ? "white" : "gray"}
//               style={styles.icon}
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="ShopPage"
//         component={ShopPage}
//         options={{
//           tabBarLabel: "",
//           tabBarIcon: ({ focused }) => (
//             <Icon
//               name="shopping-cart"
//               size={24}
//               color={focused ? "white" : "gray"}
//               style={styles.icon}
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="StackNavigation"
//         component={StackNavigation}
//         options={{
//           tabBarButton: () => <ActionButton isExpanded={isExpanded} onToggle={setIsExpanded} />, 
//           tabBarLabel: "",
//           tabBarIcon: () => null,
//         }}
//       />
//       <Tab.Screen
//         name="SearchPage"
//         component={SearchPage}
//         options={{
//           tabBarLabel: "",
//           tabBarIcon: ({ focused }) => (
//             <Icon
//               name="search"
//               size={24}
//               color={focused ? "white" : "gray"}
//               style={styles.icon}
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="ProfilePage"
//         component={ProfilePage}
//         options={{
//           tabBarLabel: "",
//           tabBarIcon: ({ focused }) => (
//             <Icon
//               name="user"
//               size={24}
//               color={focused ? "white" : "gray"}
//               style={styles.icon}
//             />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

// const styles = StyleSheet.create({
//   actionButtonContainer: {
    
//       top: moderateVerticalScale(8),
//     justifyContent: "center",
//    alignItems: "center",
//   },
//   mainButton: {
//     height: scale(30),
//     width:scale(30),
//     borderRadius: scale(30),
//     borderColor: "white",
//     borderWidth: 2,  // Added to make the border visible
//     backgroundColor: "black",
//     justifyContent: "center",
//     alignItems: "center",
//     shadowColor: "black",
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: moderateVerticalScale(1) },
//     shadowRadius: 1,
//     elevation: 5,
//   },
//   modalOverlay: {
//     flex: 1,
//     backgroundColor: "rgba(0, 0, 0, 0.6)",
//     justifyContent: "flex-end",
//   },
//   buttonContainer: {
//     flexDirection: "row",
//     justifyContent: "space-evenly",
//      padding: moderateScale(20),
   
//     marginBottom:moderateVerticalScale(70)
//   },
//   actionButton: {
//     backgroundColor: "rgba(128, 90, 213, 0.8)",
//     borderRadius: 16,
//     paddingHorizontal: moderateScale(8),
//     paddingVertical:moderateVerticalScale(25),
//     alignItems: "center",
//     width: 100,
//   },
//   buttonText: {
//     color: "white",
//     marginTop: 8,
//     fontSize: 14,
//   },
//   icon: {
//     width: scale(24),
//     height: scale(24),
//   },
// });

// export default BottomNavigation;
import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Modal, Animated, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { scale, verticalScale, moderateVerticalScale, moderateScale } from 'react-native-size-matters';
import MediaPage from "../../screens/mediaPage/mediaPage";
import ProfilePage from "../../screens/profilePage/profilePage";
import SearchPage from "../../screens/searchPage/searchPage";
import ShopPage from "../../screens/shopPage/shopPage";
import { useNavigation } from "@react-navigation/native";
import StackNavigation from "../stackNavigation/stackNavigation";

const Tab = createBottomTabNavigator();

const ActionButton = ({ isExpanded, onToggle }) => {
  const [animation] = useState(new Animated.Value(0));
  const navigation = useNavigation();

  const translateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [300, 0],
  });

  const showButtons = () => {
    Animated.spring(animation, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const hideButtons = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => onToggle(false));
  };

  return (
    <View style={styles.actionButtonContainer}>
      <TouchableOpacity
        style={styles.mainButton}
        onPress={() => {
          if (isExpanded) {
            hideButtons();
          } else {
            onToggle(true);
            showButtons();
          }
        }}
      >
        <Icon name={isExpanded ? "times" : "plus"} size={28} color="white" />
      </TouchableOpacity>

      <Modal transparent visible={isExpanded} animationType="none" onRequestClose={hideButtons}>
        <TouchableOpacity style={styles.modalOverlay} activeOpacity={1} onPress={hideButtons}>
          <Animated.View style={[styles.buttonContainer, { transform: [{ translateY }] }]}>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => {
                hideButtons();
                navigation.navigate("QuoteScreen"); // Fixed from replace to navigate
              }}
            >
              <Icon name="quote-left" size={24} color="white" />
              <Text style={styles.buttonText}>Quote</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => {
                hideButtons();
                navigation.navigate("CameraScreen"); // Fixed from replace to navigate
              }}
            >
              <Icon name="image" size={24} color="white" />
              <Text style={styles.buttonText}>Media</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => {
                hideButtons();
                navigation.navigate("PollScreen"); // Fixed from replace to navigate
              }}
            >
              <Icon name="question-circle" size={24} color="white" />
              <Text style={styles.buttonText}>Poll</Text>
            </TouchableOpacity>
          </Animated.View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const BottomNavigation = () => {
  const [isExpanded, setIsExpanded] = useState(false);

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
        name="StackNavigation"
        component={StackNavigation}
        options={{
          tabBarButton: () => <ActionButton isExpanded={isExpanded} onToggle={setIsExpanded} />,
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
  actionButtonContainer: {
    top: moderateVerticalScale(8),
    justifyContent: "center",
    alignItems: "center",
  },
  mainButton: {
    height: scale(30),
    width: scale(30),
    borderRadius: scale(30),
    borderColor: "white",
    borderWidth: 2,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: moderateVerticalScale(1) },
    shadowRadius: 1,
    elevation: 5,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    justifyContent: "flex-end",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: moderateScale(20),
    marginBottom: moderateVerticalScale(70),
  },
  actionButton: {
    backgroundColor: "rgba(128, 90, 213, 0.8)",
    borderRadius: 16,
    paddingHorizontal: moderateScale(8),
    paddingVertical: moderateVerticalScale(25),
    alignItems: "center",
    width: 100,
  },
  buttonText: {
    color: "white",
    marginTop: 8,
    fontSize: 14,
  },
  icon: {
    width: scale(24),
    height: scale(24),
  },
});

export default BottomNavigation;

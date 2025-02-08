// import React, { useState } from "react";
// import { View, TouchableOpacity, Text, Modal, StyleSheet, Animated } from "react-native";
// import Icon from "react-native-vector-icons/MaterialCommunityIcons";
// import { useNavigation } from "@react-navigation/native";  // ✅ Ensuring navigation works

// export const ActionButton = () => {
//   const [modalVisible, setModalVisible] = useState(false);
//   const [animation] = useState(new Animated.Value(0));
//   const navigation = useNavigation();  // ✅ Fixing navigation issue

//   const showModal = () => {
//     setModalVisible(true);
//     Animated.spring(animation, {
//       toValue: 1,
//       useNativeDriver: true,
//     }).start();
//   };

//   const hideModal = () => {
//     Animated.timing(animation, {
//       toValue: 0,
//       duration: 200,
//       useNativeDriver: true,
//     }).start(() => setModalVisible(false));
//   };

//   const translateY = animation.interpolate({
//     inputRange: [0, 1],
//     outputRange: [300, 0],
//   });

//   return (
//     <View>
//       <TouchableOpacity onPress={showModal}>
//         <Icon name="plus" size={24} color="black" />
//       </TouchableOpacity>

//       <Modal
//         transparent
//         visible={modalVisible}
//         animationType="none"
//         onRequestClose={hideModal}
//       >
//         <TouchableOpacity
//           style={styles.modalOverlay}
//           activeOpacity={1}
//           onPress={hideModal}
//         >
//           <Animated.View
//             style={[styles.buttonContainer, { transform: [{ translateY }] }]}
//           >
//             <TouchableOpacity
//               style={styles.actionButton}
//               onPress={() => {
//                 hideModal();
//                 navigation.replace("AddPage");  // ✅ Fixed navigation
//               }}
//             >
//               <Icon name="format-quote-open" size={24} color="white" />
//               <Text style={styles.buttonText}>Quote</Text>
//             </TouchableOpacity>
//           </Animated.View>
//         </TouchableOpacity>
//       </Modal>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   modalOverlay: {
//     flex: 1,
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//     justifyContent: "flex-end",
//   },
//   buttonContainer: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     padding: 20,
//     paddingBottom: 40,
//   },
//   actionButton: {
//     backgroundColor: "rgba(128, 90, 213, 0.6)",
//     borderRadius: 12,
//     padding: 16,
//     alignItems: "center",
//     width: 100,
//   },
//   buttonText: {
//     color: "white",
//     marginTop: 8,
//     fontSize: 12,
//   },
// });

// export default ActionButton;
import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Modal,
  StyleSheet,
  Animated,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

const ActionButton = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [animation] = useState(new Animated.Value(0));
  const navigation = useNavigation();

  const toggleModal = () => {
    if (isExpanded) {
      hideButtons();
    } else {
      showButtons();
    }
  };

  const showButtons = () => {
    setModalVisible(true);
    setIsExpanded(true);
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
    }).start(() => {
      setModalVisible(false);
      setIsExpanded(false);
    });
  };

  const translateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [300, 0],
  });

  return (
    <View>
      <TouchableOpacity onPress={toggleModal} style={styles.mainButton}>
        <Icon
          name={isExpanded ? "close" : "plus"}
          size={24}
          color="white"
        />
      </TouchableOpacity>

      <Modal
        transparent
        visible={modalVisible}
        animationType="none"
        onRequestClose={hideButtons}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={hideButtons}
        >
          <Animated.View
            style={[styles.buttonContainer, { transform: [{ translateY }] }]}
          >
            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => {
                hideButtons();
                navigation.replace("QuotePage");
              }}
            >
              <Icon name="format-quote-open" size={24} color="white" />
              <Text style={styles.buttonText}>Quote</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => {
                hideButtons();
                navigation.replace("MediaPage");
              }}
            >
              <Icon name="image" size={24} color="white" />
              <Text style={styles.buttonText}>Media</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => {
                hideButtons();
                navigation.replace("QuestionPage");
              }}
            >
              <Icon name="comment-question" size={24} color="white" />
              <Text style={styles.buttonText}>Question</Text>
            </TouchableOpacity>
          </Animated.View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  mainButton: {
    backgroundColor: "black",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 30,
    right: 30,
    elevation: 5,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 20,
    paddingBottom: 40,
  },
  actionButton: {
    backgroundColor: "rgba(128, 90, 213, 0.6)",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    width: 100,
  },
  buttonText: {
    color: "white",
    marginTop: 8,
    fontSize: 12,
  },
});

export default ActionButton;
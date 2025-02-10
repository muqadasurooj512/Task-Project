import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Add from "../../assets/svg/add1.png"; // Ensure the path is correct
import Delete from "../../assets/svg/delete.png"; // Ensure the path is correct

const QuestionComponent = () => {
  const [question, setQuestion] = useState("What’s your favorite dish?");
  const [options, setOptions] = useState(["TV & Snacks", "Card games w friends"]);
  const [isCustomQuestion, setIsCustomQuestion] = useState(false);

  const addNewQuestion = () => {
    setQuestion("");
    setOptions([""]);
    setIsCustomQuestion(true);
  };

  const addOption = () => {
    if (options.length < 3) {
      setOptions([...options, ""]);
    }
  };

  const updateOption = (text, index) => {
    const newOptions = [...options];
    newOptions[index] = text;
    setOptions(newOptions);
  };

  const deleteOption = (index) => {
    const newOptions = options.filter((_, i) => i !== index);
    setOptions(newOptions);
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <TextInput
          style={styles.headerText}
          placeholder="What’s your question?"
          placeholderTextColor="#AAAAAA"
          value={question}
          onChangeText={setQuestion}
          multiline={true} // Allows wrapping text
        />
        <TouchableOpacity onPress={addNewQuestion} style={styles.iconContainer}>
          <Image source={Add} style={styles.icon} />
        </TouchableOpacity>
      </View>

      {/* Options Section */}
      <View style={styles.optionsWrapper}>
        {options.map((option, index) => (
          <View key={index} style={styles.optionContainer}>
            <TextInput
              style={styles.optionInput}
              placeholder="Option"
              placeholderTextColor="#AAAAAA"
              value={option}
              onChangeText={(text) => updateOption(text, index)}
            />
            <TouchableOpacity onPress={() => deleteOption(index)} style={styles.deleteIconContainer}>
              <Image source={Delete} style={styles.icon} />
            </TouchableOpacity>
          </View>
        ))}
      </View>

      {/* Display message if 3 options are added */}
      {options.length === 3 && (
        <Text style={styles.maxOptionsText}>You have added 3 options.</Text>
      )}

      {/* Add Option Button (Visible only if options are less than 3) */}
      {options.length < 3 && (
        <TouchableOpacity style={styles.addButton} onPress={addOption}>
          <Text style={styles.addButtonText}>Add Option</Text>
          <Image source={Add} style={styles.icon} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    padding: scale(20),
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: verticalScale(20),
  },
  headerText: {
    color: "#FFF",
    fontSize: moderateScale(18),
    fontWeight: "bold",
    flex: 1,
    paddingVertical: verticalScale(10),
    borderBottomWidth: 1,
    borderBottomColor: "#444",
    marginRight: scale(10),
  },
  iconContainer: {
    padding: scale(5),
  },
  icon: {
    width: scale(24),
    height: scale(24),
    resizeMode: "contain",
  },
  optionsWrapper: {
    gap: moderateScale(10), // Adds consistent spacing between options
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#222",
    borderRadius: moderateScale(20),
    paddingHorizontal: scale(15),
    paddingVertical: verticalScale(8),
    justifyContent: "space-between",
  },
  optionInput: {
    color: "#FFF",
    fontSize: moderateScale(16),
    flex: 1,
    marginRight: scale(10),
  },
  deleteIconContainer: {
    padding: scale(5),
  },
  addButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#FFF",
    borderRadius: moderateScale(25),
    paddingVertical: verticalScale(12),
    paddingHorizontal: scale(20),
    marginTop: verticalScale(10),
    borderWidth: 2,
  },
  addButtonText: {
    color: "#FFF",
    fontSize: moderateScale(16),
    marginRight: scale(5),
  },
  maxOptionsText: {
    color: "#FF4444",
    fontSize: moderateScale(14),
    textAlign: "center",
    marginTop: verticalScale(5),
  },
});

export default QuestionComponent;

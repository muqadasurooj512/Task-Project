import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const QuestionComponent = () => {
  const [options, setOptions] = useState(["TV & Snacks", "Card games w friends"]);

  const addOption = () => {
    setOptions([...options, ""]);
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
        <Text style={styles.headerText}>What’s your question ?</Text>
      </View>

      {/* Options Section */}
      {options.map((option, index) => (
        <View key={index} style={styles.optionContainer}>
          <TouchableOpacity onPress={() => deleteOption(index)}>
            {/* Placeholder for Delete Icon */}
          </TouchableOpacity>
          <TextInput
            style={styles.optionInput}
            placeholder="Option"
            placeholderTextColor="#AAAAAA"
            value={option}
            onChangeText={(text) => updateOption(text, index)}
          />
        </View>
      ))}

      {/* Add Option Button */}
      <TouchableOpacity style={styles.addButton} onPress={addOption}>
        <Text style={styles.addButtonText}>Add Option</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    padding: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#222',
    borderRadius: 25,
    marginBottom: 15,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  optionInput: {
    color: '#FFF',
    fontSize: 16,
    flex: 1,
    marginLeft: 10,
  },
  addButton: {
    borderWidth: 1,
    borderColor: '#FFF',
    borderRadius: 25,
    paddingVertical: 10,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default QuestionComponent;

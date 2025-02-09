import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const InputSection = ({ text, setText }) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>What are your thoughts?</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        placeholderTextColor="#ffffff"
        multiline
        value={text}
        onChangeText={setText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    position: 'relative',
  },
  inputLabel: {
    color: '#ffffff',
    fontSize: 14,
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#000000',
    color: '#FFF',
    fontSize: 16,
    padding: 10,
    borderRadius: 10,
    height: 300,
    marginBottom: 20,
    textAlignVertical: 'top',
  },
});

export default InputSection;

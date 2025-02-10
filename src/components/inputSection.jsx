
import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

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
    fontSize: scale(14), // Use scale for font size
    marginBottom: verticalScale(5), // Use verticalScale for margin
  },
  input: {
    backgroundColor: '#000000',
    color: '#FFF',
    fontSize: moderateScale(16), // Use moderateScale for font size
    padding: moderateScale(10), // Use moderateScale for padding
    borderRadius: moderateScale(10), // Use moderateScale for border radius
    height: verticalScale(200), // Use verticalScale for height
    marginBottom: verticalScale(20), // Use verticalScale for margin
    textAlignVertical: 'top',
  },
});

export default InputSection;

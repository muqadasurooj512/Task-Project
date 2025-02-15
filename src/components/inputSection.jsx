
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const InputSection = ({ text, setText }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="What are your thoughts?"
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
    marginHorizontal: moderateScale(10),
  },
  input: {
    backgroundColor: '#000000',
    color: '#FFF',
    fontSize: moderateScale(16),
    padding: moderateScale(10),
    borderRadius: moderateScale(15),
    height: verticalScale(200),
    marginBottom: verticalScale(20),
    textAlignVertical: 'top',
    fontFamily: "AvenirLTStd65-Medium",
    borderBottomWidth: 1,
    borderBottomColor: '#808080',
  },
});

export default InputSection;

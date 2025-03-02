
import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TextInput } from 'react-native';
import { scale, verticalScale, moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import myImage from "../../assets/svg/uploaded1.png";

const { width } = Dimensions.get('window');

const ImageRowWithCaption = () => {
    return (
        <View style={{ marginHorizontal:moderateScale(15), marginBottom:moderateVerticalScale(30)}}>
          
            <TextInput
                style={styles.captionInput}
                placeholder="Add a caption"
                placeholderTextColor="#AAAAAA"
            />
        </View>
    );
};

const styles = StyleSheet.create({
  
    captionInput: {
        borderColor: '#333',
        color: '#FFF',
        fontSize: 14, 
        fontFamily:"Avenir-LT-Std-35-Light",
    }
});

export default ImageRowWithCaption;


import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TextInput } from 'react-native';
import { scale, verticalScale, moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import myImage from "../../assets/svg/uploaded1.png";

const { width } = Dimensions.get('window');

const ImageRowWithCaption = () => {
    return (
        <View>
            {/* <View style={styles.imageRow}>
                <Image source={myImage} style={styles.image} />
                <Image source={myImage} style={styles.image} />
                <Image source={myImage} style={styles.image} />
            </View> */}
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
        fontSize: moderateScale(16), // Use moderateScale for font size
        padding: moderateScale(15), // Use moderateScale for padding
       
        // height: verticalScale(50), // Use verticalScale for height
        marginVertical:moderateVerticalScale(5)
    }
});

export default ImageRowWithCaption;

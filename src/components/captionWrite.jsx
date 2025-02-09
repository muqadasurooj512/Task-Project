import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TextInput } from 'react-native';
import myImage from "../../assets/svg/uploaded1.png"
const { width } = Dimensions.get('window');

const ImageRowWithCaption = () => {
    return (
        <View>
            < View style={styles.imageRow} >
                <Image source={myImage} style={styles.image} />
                <Image source={myImage} style={styles.image} />
                <Image source={myImage} style={styles.image} />

            </View >
            <TextInput
                style={styles.captionInput}
                placeholder="Add a caption"
                placeholderTextColor="#AAAAAA"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    imageRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 15,
        marginTop: 20,
    },
    image: {
        borderRadius: 10,
        margin: 5,
    },
    captionInput: {
        borderColor: '#333',
        color: '#FFF',
        fontSize: 16,
        padding: 15,
        paddingTop: 10,
        height:100,
        margin:10,
    },
});

export default ImageRowWithCaption;

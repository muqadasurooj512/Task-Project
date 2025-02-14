
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert, ScrollView,ImageBackground } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import { scale, verticalScale, moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';

const CameraScreen = () => {
  const navigation = useNavigation();

  // Open media picker for photos or videos
  const openMediaPicker = (mediaType) => {
    ImagePicker.openPicker({
      multiple: true,
      mediaType: mediaType,
    })
      .then(mediaFiles => {
        const mediaData = mediaFiles.map(file => ({
          path: file.path,
          type: file.mime.startsWith('image') ? 'photo' : 'video',
        }));
        navigation.replace('ImageShow', { mediaFiles: mediaData });
      })
      .catch(err => console.log('Media selection canceled', err));
  };

  // Capture video using the camera
  const captureVideo = () => {
    ImagePicker.openCamera({
      mediaType: 'video',
    })
      .then(video => {
        const videoData = { path: video.path, type: 'video' };
        navigation.replace('ImageShow', { mediaFiles: [videoData] });
      })
      .catch(err => console.log('Video capture canceled', err));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground 
        source={require('../../../assets/svg/Background.png')}
        style={styles.backgroundImage}
      >
      <View style={styles.overlay}>
        {/* Capture Video Button */}
        <TouchableOpacity style={styles.captureButton} onPress={captureVideo}>
          <View />
        </TouchableOpacity>

        <View style={styles.toggleContainer}>
          {/* Open Image Picker */}
          <TouchableOpacity onPress={() => openMediaPicker('photo')}>
            <Text style={styles.toggleText}>Photo</Text>
          </TouchableOpacity>

          {/* Open Video Picker */}
          <TouchableOpacity onPress={() => openMediaPicker('video')}>
            <Text style={styles.toggleText}>Video</Text>
          </TouchableOpacity>
        </View>
      </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
    backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
        position: 'absolute',
    bottom: verticalScale(5),
    alignItems: 'center',
  },
  captureButton: {
    width: moderateScale(80),
    height: moderateScale(80),
    borderRadius: moderateScale(40),
    backgroundColor: 'white',
    borderWidth: moderateScale(5),
    borderColor:"rgba(110, 49, 224, 0.6)",
    
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: scale(150),
    marginTop: verticalScale(20),
    marginBottom:moderateVerticalScale(30),
  },
  toggleText: {
    color: 'white',
    fontFamily:"Avenir-LT-Std-85-Heavy",
    fontSize:16,
  },
});

export default CameraScreen;

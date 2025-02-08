import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert, PermissionsAndroid, Platform } from 'react-native';
// import { Camera, useCameraDevices } from 'react-native-vision-camera';
import ImagePicker from 'react-native-image-crop-picker';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import RNFS from 'react-native-fs';

const CameraScreen = () => {
  // const camera = useRef(null);
  // const devices = useCameraDevices();
  // const device = devices.back;
  // const [isRecording, setIsRecording] = useState(false);

  // useEffect(() => {
  //   requestPermissions();
  // }, []);

  // const requestPermissions = async () => {
  //   const cameraStatus = await Camera.requestCameraPermission();
  //   const microphoneStatus = await Camera.requestMicrophonePermission();

  //   if (Platform.OS === 'android') {
  //     await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);
  //   }

  //   if (cameraStatus !== 'authorized' || microphoneStatus !== 'authorized') {
  //     Alert.alert('Permission Denied', 'Camera and microphone permissions are required');
  //   }
  // };

  const openImagePicker = () => {
    ImagePicker.openPicker({
      mediaType: 'photo',
    })
      .then(image => {
        Alert.alert('Photo Selected', `Path: ${image.path}`);
      })
      .catch(err => console.log('Image selection canceled', err));
  };

  // const recordVideo = async () => {
  //   if (camera.current) {
  //     if (isRecording) {
  //       camera.current.stopRecording();
  //       setIsRecording(false);
  //     } else {
  //       setIsRecording(true);
  //       try {
  //         await camera.current.startRecording({
  //           onRecordingFinished: video => {
  //             setIsRecording(false);
  //             saveVideo(video.path);
  //             Alert.alert('Video Recorded', `Saved at: ${video.path}`);
  //           },
  //           onRecordingError: error => {
  //             setIsRecording(false);
  //             console.error('Recording error:', error);
  //           },
  //         });
  //       } catch (error) {
  //         console.error('Recording error:', error);
  //       }
  //     }
  //   }
  // };

  // const saveVideo = async (path) => {
  //   const destinationPath = `${RNFS.DownloadDirectoryPath}/recorded_video.mp4`;
  //   try {
  //     await RNFS.moveFile(path, destinationPath);
  //     Alert.alert('Success', `Video saved to ${destinationPath}`);
  //   } catch (error) {
  //     console.error('Error saving video:', error);
  //   }
  // };

  // if (!device) return <Text>Loading Camera...</Text>;

  return (
    <View style={styles.container}>
      {/* <Camera
        ref={camera}
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        video={true}
        audio={true}
      /> */}
      <View style={styles.overlay}>
        {/* Capture Button */}
        <TouchableOpacity  style={styles.captureButton}>
          <View  />
        </TouchableOpacity>

        {/* Photo/Video Toggle */}
        <View style={styles.toggleContainer}>
          <TouchableOpacity onPress={openImagePicker}>
            <Text style={styles.toggleText}>Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity >
            <Text style={styles.toggleText}>Video</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    position: 'absolute',
    bottom: verticalScale(50),
    width: '100%',
    alignItems: 'center',
  },
  captureButton: {
    width: moderateScale(80),
    height: moderateScale(80),
    borderRadius: moderateScale(40),
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: moderateScale(5),
    borderColor: 'blue',
  },
  innerButton: {
    width: moderateScale(70),
    height: moderateScale(70),
    backgroundColor: 'white',
    borderRadius: moderateScale(35),
    borderWidth: moderateScale(3),
    borderColor: 'red',
  },
  recording: {
    backgroundColor: 'green',
    borderColor: 'darkgreen',
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: scale(150),
    marginTop: verticalScale(20),
  },
  toggleText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: moderateScale(16),
  },
});

export default CameraScreen;

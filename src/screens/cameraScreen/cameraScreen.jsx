// // // import React, { useEffect, useRef, useState } from 'react';
// // // import { View, StyleSheet, Text, TouchableOpacity, Alert, PermissionsAndroid, Platform } from 'react-native';
// // // // import { Camera, useCameraDevices } from 'react-native-vision-camera';
// // // import ImagePicker from 'react-native-image-crop-picker';
// // // import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
// // // import RNFS from 'react-native-fs';
// // //  import { useNavigation } from '@react-navigation/native';
// // // const CameraScreen = () => {
// // //   // const camera = useRef(null);
// // //   // const devices = useCameraDevices();
// // //   // const device = devices.back;
// // //   // const [isRecording, setIsRecording] = useState(false);

// // //   // useEffect(() => {
// // //   //   requestPermissions();
// // //   // }, []);

// // //   // const requestPermissions = async () => {
// // //   //   const cameraStatus = await Camera.requestCameraPermission();
// // //   //   const microphoneStatus = await Camera.requestMicrophonePermission();

// // //   //   if (Platform.OS === 'android') {
// // //   //     await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);
// // //   //   }

// // //   //   if (cameraStatus !== 'authorized' || microphoneStatus !== 'authorized') {
// // //   //     Alert.alert('Permission Denied', 'Camera and microphone permissions are required');
// // //   //   }
// // //   // };

// // //   const navigation = useNavigation();

// // //   const openImagePicker = () => {
// // //     ImagePicker.openPicker({
// // //       multiple: true,
// // //       mediaType: 'photo',
// // //     })
// // //       .then(images => {
// // //         const imagePaths = images.map(img => img.path);
// // //         navigation.navigate('ImageShow', { selectedImages: imagePaths });
// // //       })
// // //       .catch(err => console.log('Image selection canceled', err));
// // //   };
// // //   // const recordVideo = async () => {
// // //   //   if (camera.current) {
// // //   //     if (isRecording) {
// // //   //       camera.current.stopRecording();
// // //   //       setIsRecording(false);
// // //   //     } else {
// // //   //       setIsRecording(true);
// // //   //       try {
// // //   //         await camera.current.startRecording({
// // //   //           onRecordingFinished: video => {
// // //   //             setIsRecording(false);
// // //   //             saveVideo(video.path);
// // //   //             Alert.alert('Video Recorded', `Saved at: ${video.path}`);
// // //   //           },
// // //   //           onRecordingError: error => {
// // //   //             setIsRecording(false);
// // //   //             console.error('Recording error:', error);
// // //   //           },
// // //   //         });
// // //   //       } catch (error) {
// // //   //         console.error('Recording error:', error);
// // //   //       }
// // //   //     }
// // //   //   }
// // //   // };

// // //   // const saveVideo = async (path) => {
// // //   //   const destinationPath = `${RNFS.DownloadDirectoryPath}/recorded_video.mp4`;
// // //   //   try {
// // //   //     await RNFS.moveFile(path, destinationPath);
// // //   //     Alert.alert('Success', `Video saved to ${destinationPath}`);
// // //   //   } catch (error) {
// // //   //     console.error('Error saving video:', error);
// // //   //   }
// // //   // };

// // //   // if (!device) return <Text>Loading Camera...</Text>;

// // //   return (
// // //     <View style={styles.container}>
// // //       {/* <Camera
// // //         ref={camera}
// // //         style={StyleSheet.absoluteFill}
// // //         device={device}
// // //         isActive={true}
// // //         video={true}
// // //         audio={true}
// // //       /> */}
// // //       <View style={styles.overlay}>
// // //         {/* Capture Button */}
// // //         <TouchableOpacity  style={styles.captureButton}>
// // //           <View  />
// // //         </TouchableOpacity>

// // //         {/* Photo/Video Toggle */}
// // //         <View style={styles.toggleContainer}>
// // //           <TouchableOpacity onPress={openImagePicker}>
// // //             <Text style={styles.toggleText}>Photo</Text>
// // //           </TouchableOpacity>
// // //           <TouchableOpacity >
// // //             <Text style={styles.toggleText}>Video</Text>
// // //           </TouchableOpacity>
// // //         </View>
// // //       </View>
// // //     </View>
// // //   );
// // // };

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //   },
// // //   overlay: {
// // //     position: 'absolute',
// // //     bottom: verticalScale(50),
// // //     width: '100%',
// // //     alignItems: 'center',
// // //   },
// // //   captureButton: {
// // //     width: moderateScale(80),
// // //     height: moderateScale(80),
// // //     borderRadius: moderateScale(40),
// // //     backgroundColor: 'white',
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //     borderWidth: moderateScale(5),
// // //     borderColor: 'blue',
// // //   },
// // //   innerButton: {
// // //     width: moderateScale(70),
// // //     height: moderateScale(70),
// // //     backgroundColor: 'white',
// // //     borderRadius: moderateScale(35),
// // //     borderWidth: moderateScale(3),
// // //     borderColor: 'red',
// // //   },
// // //   recording: {
// // //     backgroundColor: 'green',
// // //     borderColor: 'darkgreen',
// // //   },
// // //   toggleContainer: {
// // //     flexDirection: 'row',
// // //     justifyContent: 'space-between',
// // //     width: scale(150),
// // //     marginTop: verticalScale(20),
// // //   },
// // //   toggleText: {
// // //     color: 'black',
// // //     fontWeight: 'bold',
// // //     fontSize: moderateScale(16),
// // //   },
// // // });

// // // export default CameraScreen;
// // import React from 'react';
// // import { View, StyleSheet, Text, TouchableOpacity, Alert, ImageBackground } from 'react-native';
// // import ImagePicker from 'react-native-image-crop-picker';
// // import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
// // import { useNavigation } from '@react-navigation/native';

// // const CameraScreen = () => {
// //   const navigation = useNavigation();

// //   const openImagePicker = () => {
// //     ImagePicker.openPicker({
// //       multiple: true,
// //       mediaType: 'photo',
// //     })
// //       .then(images => {
// //         const imagePaths = images.map(img => img.path);
// //         navigation.navigate('ImageShow', { selectedImages: imagePaths });
// //       })
// //       .catch(err => console.log('Image selection canceled', err));
// //   };

// //   return (
// //     <ImageBackground 
// //       source={require('../../../assets/svg/Background.png')} // Replace with your image URL or local image path
// //       style={styles.backgroundImage}
// //     >
// //       <View style={styles.overlay}>
// //         <TouchableOpacity style={styles.captureButton}>
// //           <View />
// //         </TouchableOpacity>

// //         <View style={styles.toggleContainer}>
// //           <TouchableOpacity onPress={openImagePicker}>
// //             <Text style={styles.toggleText}>Photo</Text>
// //           </TouchableOpacity>
// //           <TouchableOpacity>
// //             <Text style={styles.toggleText}>Video</Text>
// //           </TouchableOpacity>
// //         </View>
// //       </View>
// //     </ImageBackground>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   backgroundImage: {
// //     flex: 1,
// //     resizeMode: 'cover',
// //   },
// //   overlay: {
// //     position: 'absolute',
// //     bottom: verticalScale(50),
// //     width: '100%',
// //     alignItems: 'center',
// //   },
// //   captureButton: {
// //     width: moderateScale(80),
// //     height: moderateScale(80),
// //     borderRadius: moderateScale(40),
// //     backgroundColor: 'white',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     borderWidth: moderateScale(5),
// //     borderColor: 'blue',
// //   },
// //   toggleContainer: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     width: scale(150),
// //     marginTop: verticalScale(20),
// //   },
// //   toggleText: {
// //     color: 'white',
// //     fontWeight: 'bold',
// //     fontSize: moderateScale(16),
// //   },
// // });

// // export default CameraScreen;
// import React from 'react';
// import { View, StyleSheet, Text, TouchableOpacity, Alert, ImageBackground } from 'react-native';
// import ImagePicker from 'react-native-image-crop-picker';
// import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
// import { useNavigation } from '@react-navigation/native';

// const CameraScreen = () => {
//   const navigation = useNavigation();

//   // Open image picker for photos or videos
//   const openMediaPicker = (mediaType) => {
//     ImagePicker.openPicker({
//       mediaType: mediaType, // 'photo' for images, 'video' for videos
//     })
//       .then(media => {
//         if (mediaType === 'photo') {
//           navigation.navigate('ImageShow', { selectedImages: [media.path] });
//         } else {
//           Alert.alert('Video Selected', `Video path: ${media.path}`);
//         }
//       })
//       .catch(err => console.log('Media selection canceled', err));
//   };

//   // Capture video using the camera
//   const captureVideo = () => {
//     ImagePicker.openCamera({
//       mediaType: 'video',
//     })
//       .then(video => {
//         Alert.alert('Video Captured', `Saved at: ${video.path}`);
//       })
//       .catch(err => console.log('Video capture canceled', err));
//   };

//   return (
//     <ImageBackground 
//       source={require('../../../assets/svg/Background.png')}
//       style={styles.backgroundImage}
//     >
//       <View style={styles.overlay}>
//         {/* Capture Video Button */}
//         <TouchableOpacity style={styles.captureButton} onPress={captureVideo}>
//           <View />
//         </TouchableOpacity>

//         <View style={styles.toggleContainer}>
//           {/* Open Image Picker */}
//           <TouchableOpacity onPress={() => openMediaPicker('photo')}>
//             <Text style={styles.toggleText}>Photo</Text>
//           </TouchableOpacity>

//           {/* Open Video Picker */}
//           <TouchableOpacity onPress={() => openMediaPicker('video')}>
//             <Text style={styles.toggleText}>Video</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   backgroundImage: {
//     flex: 1,
//     resizeMode: 'cover',
//   },
//   overlay: {
//     position: 'absolute',
//     bottom: verticalScale(50),
//     width: '100%',
//     alignItems: 'center',
//   },
//   captureButton: {
//     width: moderateScale(80),
//     height: moderateScale(80),
//     borderRadius: moderateScale(40),
//     backgroundColor: 'white',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderWidth: moderateScale(5),
//     borderColor: 'blue',
//   },
//   toggleContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: scale(150),
//     marginTop: verticalScale(20),
//   },
//   toggleText: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: moderateScale(16),
//   },
// });

// export default CameraScreen;
// CameraScreen.js
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert, ImageBackground } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
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
        navigation.navigate('ImageShow', { mediaFiles: mediaData });
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
        navigation.navigate('ImageShow', { mediaFiles: [videoData] });
      })
      .catch(err => console.log('Video capture canceled', err));
  };

  return (
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
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
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
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: scale(150),
    marginTop: verticalScale(20),
  },
  toggleText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: moderateScale(16),
  },
});

export default CameraScreen;
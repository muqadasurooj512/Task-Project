

import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, Alert, Image } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { firebase } from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import Icons from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import DocumentPicker from 'react-native-document-picker';

const BookPublish = () => {
  const navigation = useNavigation();
  const [image, setImage] = useState(null);
  const [book, setBook] = useState('');
  const [author, setAuthor] = useState('');
  const [about, setAbout] = useState('');
  const [overview, setOverview] = useState('');
  const [document, setDocument] = useState(null);

  const handleImageSelection = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.error('ImagePicker Error: ', response.error);
      } else {
        setImage(response.assets[0]);
      }
    });
  };

  const handleDocumentSelection = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });
      setDocument(res[0]);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled the document picker');
      } else {
        throw err;
      }
    }
  };

  const uploadFile = async (filePath) => {
    const reference = storage().ref(filePath);
    await reference.putFile(filePath);
    return await reference.getDownloadURL();
  };

  const writeData = async () => {
    if (!book || !author || !about || !overview || !image || !document) {
      Alert.alert('Error', 'Please fill in all fields and select both an image and a document.');
      return;
    }

    try {
      // Upload image
      const imageUrl = await uploadFile(image.uri);
      // Upload document
      const documentUrl = await uploadFile(document.uri);

      await firebase.firestore().collection('PublishBook').add({
        book,
        author,
        about,
        overview,
        image: imageUrl,
        document: documentUrl,
      });

      resetForm();
      navigation.navigate('HomeScreen');
    } catch (error) {
      console.error('Error writing data:', error.message);
      Alert.alert('Error', 'There was an error uploading your data. Please try again.');
    }
  };

  const resetForm = () => {
    setBook('');
    setAuthor('');
    setAbout('');
    setOverview('');
    setImage(null);
    setDocument(null);
  };

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} style={styles.drawerButton}>
          <Icons name="chevron-left" size={25} color="#f59d05" />
        </TouchableOpacity>
        <Text style={styles.text}>Publish Book</Text>
      </View>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
      <TouchableOpacity style={styles.imageButton} onPress={handleImageSelection}>
          {image ? (
            <Image source={{ uri: image.uri }} style={styles.image} />
          ) : (
            <Text style={styles.chooseImageText}>Choose an Image</Text>
          )}
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Book Title"
          value={book}
          onChangeText={setBook}
        />
        <TextInput
          style={styles.input}
          placeholder="Author"
          value={author}
          onChangeText={setAuthor}
        />
        <TextInput
          style={styles.input}
          placeholder="About the Book"
          value={about}
          onChangeText={setAbout}
        />
        <TextInput
          style={styles.input}
          placeholder="Overview"
          value={overview}
          onChangeText={setOverview}
        />



        <TouchableOpacity style={styles.documentButton} onPress={handleDocumentSelection}>
          <Text style={styles.chooseDocument}>Choose Document (PDF)</Text>
        </TouchableOpacity>

        {document && <Text style={styles.documentPreview}>{document.name}</Text>}

        <TouchableOpacity style={styles.button} onPress={writeData}>
          <Text style={styles.buttonText}>Publish</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  drawerButton: {
    padding: 5,
  },
  text: {
    fontSize: 24,
    marginLeft: 80,
    fontWeight: 'bold',
    color: '#0c0c0b',
  },
  imageButton: {
    width: '100%',
    height: 200,
    borderColor: 'gray',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  chooseImageText: {
    color: 'gray',
  },
  documentButton: {
    padding: 10,
    marginVertical: 10,
  },
  input: {
    height: 40,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#f59d05',
    borderRadius: 10,
    padding: 12,
    marginVertical: 10,
    alignItems: 'center',
    elevation: 3,
    marginHorizontal: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  scroll: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  chooseDocument: {
    fontWeight: '700',
    fontSize: 16,
  },
  documentPreview: {
    marginVertical: 10,
    fontSize: 16,
  },
});

export default BookPublish;

import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  ScrollView
} from 'react-native';
import StarRating from 'react-native-star-rating-widget';
import { useRoute, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icons from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { firebase } from '@react-native-firebase/firestore';

const Details = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { item } = route.params;

  const [rating, setRating] = useState(0);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [bookName, setBookName] = useState(item.book);
  const [author, setAuthor] = useState(item.author);
  const [overview, setOverview] = useState(item.overview);
  const [about, setAbout] = useState(item.about);

  useEffect(() => {
    const loadRating = async () => {
      const savedRating = await AsyncStorage.getItem(`rating_${item.id}`);
      if (savedRating) {
        setRating(parseFloat(savedRating));
      }
    };

    const checkBookmark = async () => {
      const bookmarks = await AsyncStorage.getItem('bookmarks');
      const bookmarkList = bookmarks ? JSON.parse(bookmarks) : [];
      setIsBookmarked(bookmarkList.some(bookmark => bookmark.id === item.id));
    };

    loadRating();
    checkBookmark();
  }, [item.id]);

  const handleRatingChange = async (newRating) => {
    setRating(newRating);
    await AsyncStorage.setItem(`rating_${item.id}`, newRating.toString());
  };

  const toggleBookmark = async () => {
    const bookmarks = await AsyncStorage.getItem('bookmarks');
    const bookmarkList = bookmarks ? JSON.parse(bookmarks) : [];

    if (isBookmarked) {
      const updatedBookmarks = bookmarkList.filter(bookmark => bookmark.id !== item.id);
      await AsyncStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
      setIsBookmarked(false);
    } else {
      bookmarkList.push({
        id: item.id,
        book: item.book,
        author: item.author,
        image: item.image
      });
      await AsyncStorage.setItem('bookmarks', JSON.stringify(bookmarkList));
      setIsBookmarked(true);
    }
  };

  const handleUpdate = async () => {
    if (!item.id) return;
    try {
      const docRef = firebase.firestore().collection('BookPublish').doc(item.id);
      const doc = await docRef.get();

      if (!doc.exists) {
        console.error("No such document!");
        return;
      }

      await docRef.update({
        book: bookName,
        author,
        about,
        overview,
      });

      console.log('Updated!');
      setModalVisible(false);
      navigation.navigate('Details', { item: { ...item, book: bookName, author, overview, about } });
    } catch (error) {
      console.error('Error updating data: ', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} style={styles.drawerButton}>
          <Icons name="chevron-left" size={28} color="#f59d05" />
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleBookmark} style={styles.drawerButton}>
          <Icon
            name={isBookmarked ? "favorite" : "favorite-outline"}
            size={28}
            color="#f59d05"
          />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: item.image }} style={styles.image} />
        </View>
        <View>
          <Text style={styles.name}>{item.book}</Text>
          <Text style={styles.author}>{item.author}</Text>
          <View style={styles.star}>
            <StarRating
              rating={rating}
              onChange={handleRatingChange}
              starSize={30}
            />
          </View>
          <Text style={styles.textName}>About the Author</Text>
          <Text style={styles.text}>{item.about}</Text>
          <Text style={styles.textName}>Overview</Text>
          <Text style={styles.text}>{item.overview}</Text>
          <View style={styles.buttoncontainer}>
            <TouchableOpacity
              style={styles.pdfButton}
              onPress={() => navigation.navigate('PDFViewer', { uri: item.document })}
            >
              <Text style={styles.pdfButtonText}>View PDF</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.pdfButton}
              onPress={() => setModalVisible(true)}
            >
              <Text style={styles.pdfButtonText}>Update</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Update Modal */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.label}>Book Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Book Name"
              value={bookName}
              onChangeText={setBookName}
            />
            <Text style={styles.label}>Author Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Author Name"
              value={author}
              onChangeText={setAuthor}
              multiline
            />
            <Text style={styles.label}>Overview</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Overview"
              value={overview}
              onChangeText={setOverview}
              multiline
            />
            <Text style={styles.label}>About the Author</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter About the Author"
              value={about}
              onChangeText={setAbout}
              multiline
            />
            <TouchableOpacity style={styles.button} onPress={handleUpdate}>
              <Text style={styles.buttonText}>Update</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 15,
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  drawerButton: {
    padding: 5,
  },
  text: {
    fontSize: 18,
    color: "#161616",
    marginHorizontal: 20,
    marginBottom: 10,
    textAlign: "justify",
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },
  textName: {
    fontSize: 22,
    color: "#141414",
    fontWeight: "bold",
    marginHorizontal: 20,
    marginBottom: 10,
  },
  name: {
    fontSize: 26,
    color: "#181717",
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center"
  },
  author: {
    fontSize: 17,
    color: "#181717",
    marginBottom: 15,
    textAlign: "center"
  },
  pdfButton: {
    backgroundColor: '#f59d05',
    paddingHorizontal: 55,
    paddingVertical: 8,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 15
  },
  pdfButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  },
  star: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  label: {
    marginTop: 15,
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    borderBottomColor: '#4c4c4d',
    borderBottomWidth: 1,
    padding: 10,
    fontSize: 16,
    marginTop: 5,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#f59d05',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  closeButton: {
    marginTop: 20,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#f59d05',
    fontSize: 16,
  },
  buttoncontainer: {
    flexDirection: "row",
    justifyContent: "center",
  }
});

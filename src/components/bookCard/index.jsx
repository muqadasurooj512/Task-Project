import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { firebase } from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';

const BookCard = ({ searchQuery }) => {
  const navigation = useNavigation();
  const [publish, setPublish] = useState([]);

  useEffect(() => {
    const unsubscribe = firebase.firestore().collection('PublishBook').onSnapshot(
      snapshot => {
        const bookData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPublish(bookData);
      },
      error => {
        console.log("Error fetching book data:", error);
      }
    );

    return () => unsubscribe();
  }, []);

  const filteredBooks = publish.filter(book => {
    const bookTitle = (book.book || '').toLowerCase();
    const bookAuthor = (book.author || '').toLowerCase();
    const lowerCaseQuery = searchQuery.toLowerCase();

    return (
      bookTitle.includes(lowerCaseQuery) ||
      bookAuthor.includes(lowerCaseQuery)
    );
  });

  const renderBookItem = ({ item }) => {
    return (
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Details', { item })}>
          <View style={styles.item}>
            {item.image && <Image source={{ uri: item.image }} style={styles.image} />}
            <Text style={styles.textName}>{item.book}</Text>
            <Text style={styles.textAuthor}>{item.author}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={{ paddingBottom: 270 }}>
      <FlatList
        data={filteredBooks}
        renderItem={renderBookItem}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default BookCard;

const styles = StyleSheet.create({
  item: {
    width: 170,
    height: 230,
    backgroundColor: "#f0e4d0",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 7,
    marginVertical: 20,
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginHorizontal: 10,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  textName: {
    marginTop: 10,
    fontSize: 16,
    color: "#030303",
    fontWeight: "bold",
    textAlign: "center",
  },
  textAuthor: {
    fontSize: 14,
    color: "#4e4c4c",
    textAlign: "center",
  },
});

import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const BookMark = () => {
  const navigation = useNavigation();
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const fetchBookmarks = async () => {
      const savedBookmarks = await AsyncStorage.getItem('bookmarks');
      const bookmarkList = savedBookmarks ? JSON.parse(savedBookmarks) : [];
      console.log('Fetched bookmarks:', bookmarkList);
      setBookmarks(bookmarkList);
    };

    fetchBookmarks();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Details', { item })} style={styles.item}>
       <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.itemText}>{item.book}</Text>
        <Text style={styles.authorText}>{item.author}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.text}>BookMark</Text>
      </View>
      <FlatList
        data={bookmarks}
        keyExtractor={(item) => item.id ? item.id.toString() : item.book}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

export default BookMark;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#ffffff',
  },
  main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0c0c0b",
  },
  list: {
    paddingBottom: 20,
    marginHorizontal: 15,
  },
  item: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 75,
    marginRight: 15,
    borderRadius: 5,
  },
  textContainer: {
    flex: 1,
  },
  itemText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "black",
  },
  authorText: {
    fontSize: 16,
    color: '#555',
  },
});

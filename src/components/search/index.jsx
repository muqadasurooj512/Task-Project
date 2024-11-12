import { StyleSheet, TextInput, View } from 'react-native'
import { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Search = ({ icon, onSearch }) => {
  const [query, setQuery] = useState('');
  return (
    <View style={styles.searchType} >
      <Ionicons name={icon} size={20} color="gray" />
      <TextInput
        style={styles.input}
        placeholder="Search"
        value={query}
        onChangeText={(text) => {
          setQuery(text);
          onSearch(text);
        }}
      />
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  searchType: {
    backgroundColor: "#d4d0d0",
    flexDirection: "row",
    alignItems: "center",

    borderRadius: 10,
    paddingHorizontal: 15,
    marginHorizontal: 10,
    marginVertical: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 7
  },
  input: {
    paddingLeft: 10,
    fontSize: 18,
    color: "#928e8e",
    width:270
  }
})
// PDFViewer.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Pdf from 'react-native-pdf';

const PDFViewer = ({ route }) => {
  const { uri } = route.params;

  return (
    <View style={styles.container}>
      <Pdf
        source={{ uri, cache: true }}
        style={styles.pdf}
        onError={(error) => {
          console.error('PDF Error: ', error);
        }}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page, numberOfPages) => {
          console.log(`current page: ${page}`);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  pdf: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default PDFViewer;

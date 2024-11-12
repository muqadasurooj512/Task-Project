import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, Button } from 'react-native';
import axios from 'axios';

const SumHistoryPage = () => {
  const [history, setHistory] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchHistory = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get('http://192.168.18.244:5000/history');
      setHistory(response.data);
    } catch (error) {
      if (error.response) {
        setError('Server error: Unable to fetch history');
      } else if (error.request) {
        setError('Network error: Server is unreachable');
      } else {
        setError('Error: Something went wrong');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>History</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#4CAF50" />
      ) : error ? (
        <View>
          <Text style={styles.error}>{error}</Text>
          <Button title="Retry" onPress={fetchHistory} style={{backgroundColor:"#4CAF50"}}/>
        </View>
      ) : (
        <FlatList
          data={history}
          keyExtractor={(item) => item.timestamp}
          renderItem={({ item }) => (
            <View style={styles.historyItem}>
              <Text style={styles.historyText}>
                {`${item.num1} + ${item.num2} = ${item.sum}`}
              </Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ddf1dd',
  },
  heading: {
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: '600',
    color: '#333',
  },
  historyItem: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  historyText: {
    fontSize: 16,
    color: '#333',
  },
  error: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default SumHistoryPage;

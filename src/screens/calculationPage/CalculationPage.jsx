import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';

const CalculationPage = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleAdd = async () => {
    if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
      setError('Please enter valid numbers');
      return;
    }

    setError('');
    try {
      const response = await axios.post('http://192.168.18.244:5000/add', {
        num1: parseFloat(num1),
        num2: parseFloat(num2),
      });
      setResult(response.data.sum);
    } catch (error) {
      setError('Error calculating sum');
    }
  };

  return (
    <View style={styles.container}>
      <Icons
                    name="calculate"
                    size={100}
                    color="#4CAF50"
                    style={styles.icon}
                />
      <Text style={styles.title}>Calculate Number</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={num1}
        onChangeText={setNum1}
        placeholder="Number 1"
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={num2}
        onChangeText={setNum2}
        placeholder="Number 2"
      />
      <TouchableOpacity style={styles.button} onPress={handleAdd}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>

      {error && <Text style={styles.error}>{error}</Text>}
      {result !== null && <Text style={styles.result}>Result: {result}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ddf1dd',
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 30,
    fontWeight: '600',
    color: '#333',
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    borderRadius: 5,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  result: {
    fontSize: 18,
    marginTop: 20,
    fontWeight: '500',
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
  historyContainer: {
    marginTop: 30,
  },
  historyHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  historyItem: {
    fontSize: 16,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  icon:{
    marginBottom:30,
  alignSelf:"center",
    justifyContent:"center"
  }
});

export default CalculationPage;

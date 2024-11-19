import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Text } from 'react-native';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === 'Pratham@gmail.com' && password === '1234') {
      navigation.navigate('MainScreen');
    } else {
      Alert.alert('Invalid Credentials');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Please Register Yourself</Text>
      <View style={styles.formContainer}>
        <TextInput
          placeholder="Enter Email"
          style={styles.input}
          keyboardType="email-address"
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Enter Password"
          style={styles.input}
          secureTextEntry ={true}
          onChangeText={setPassword}   // a callback function
        />
        <Button title="Login" onPress={handleLogin} color="#4CAF50" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    padding: 20,
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 28,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginTop: 30,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderWidth: 2,
    borderColor: 'green',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
    color: 'black',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
});

import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, ScrollView, Button } from 'react-native';

export default function Parent({ navigation }) {
  const [fatherName, setFatherName] = useState('');
  const [fatherMobile, setFatherMobile] = useState('');
  const [motherName, setMotherName] = useState('');
  const [motherMobile, setMotherMobile] = useState('');

  const handleSubmit = () => {
    // Check if all fields are filled
    if (!fatherName || !fatherMobile || !motherName || !motherMobile) {
      alert("Please fill in all details.");
    } else {
      // If all fields are filled, proceed to the Academic screen
      alert(`Father's Name: ${fatherName}, Father's Mobile: ${fatherMobile}, Mother's Name: ${motherName}, Mother's Mobile: ${motherMobile}`);
      
      // Navigate to the Academic screen
      navigation.navigate('Academic');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
     <Text style={styles.headerText1}>Parent's Information</Text>
      <Text style={styles.headerText}>Father's Name</Text>
      <TextInput
        placeholder="Father's Name"
        style={styles.input}
        value={fatherName}
        onChangeText={setFatherName}
      />

      <Text style={styles.headerText}>Father's Mobile Number</Text>
      <TextInput
        placeholder="Father's Mobile Number"
        style={styles.input}
        value={fatherMobile}
        onChangeText={setFatherMobile}
        keyboardType="numeric"
      />

      <Text style={styles.headerText}>Mother's Name</Text>
      <TextInput
        placeholder="Mother's Name"
        style={styles.input}
        value={motherName}
        onChangeText={setMotherName}
      />

      <Text style={styles.headerText}>Mother's Mobile Number</Text>
      <TextInput
        placeholder="Mother's Mobile Number"
        style={styles.input}
        value={motherMobile}
        onChangeText={setMotherMobile}
        keyboardType="numeric"
      />

      <Button title="Submit" onPress={handleSubmit} color="#4CAF50" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'pink',
    flex: 1,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  headerText1:{
    fontSize: 33,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 20,
    color:'green', 
    marginLeft:'30'
  }
});
import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, ScrollView, Button,TouchableOpacity } from 'react-native';
import styles from '../styles.js';



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
    <ScrollView style={styles.container}>
     <Text style={styles.text1}>Parent's Information</Text>
      <Text style={styles.label}>Father's Name</Text>
      <TextInput
        placeholder="Father's Name"
        placeholderTextColor="#333" 
        style={styles.input}
        value={fatherName}
        onChangeText={setFatherName}
      />

      <Text style={styles.label}>Father's Mobile Number</Text>
      <TextInput
        placeholder="Father's Mobile Number"
        placeholderTextColor="#333" 
        style={styles.input}
        value={fatherMobile}
        onChangeText={setFatherMobile}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Mother's Name</Text>
      <TextInput
        placeholder="Mother's Name"
        placeholderTextColor="#333" 
        style={styles.input}
        value={motherName}
        onChangeText={setMotherName}
      />

      <Text style={styles.label}>Mother's Mobile Number</Text>
      <TextInput
        placeholder="Mother's Mobile Number"
        placeholderTextColor="#333" 
        style={styles.input}
        value={motherMobile}
        onChangeText={setMotherMobile}
        keyboardType="numeric"
      />



        {/* Submit Button */}
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>NEXT</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
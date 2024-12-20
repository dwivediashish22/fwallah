import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, Button, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from '../styles.js';

export default function Academic({ navigation }) {
  const [schoolName, setSchoolName] = useState('');
  const [currentClass, setCurrentClass] = useState('');
  const [stream, setStream] = useState('');
  const [extraActivities, setExtraActivities] = useState('');

  const handleSubmit = () => {
    // Check if all fields are filled
    if (!schoolName || !currentClass || !stream || !extraActivities) {
      Alert.alert('Incomplete Details', 'Please fill in all credentials.');
    } else {
      // Navigate to the AdditionalDetails screen
      navigation.navigate('Career');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Fill in Your Academic Details</Text>

      <Text style={styles.label}>School Name</Text>
      <TextInput
        style={styles.input}
        placeholder="School's Name"
        placeholderTextColor="#333" 
        value={schoolName}
        onChangeText={setSchoolName}
      />

      <Text style={styles.label}>Current Class/Standard</Text>
      <TextInput
        style={styles.input}
        placeholder="Current Class"
        placeholderTextColor="#333" 
        keyboardType='numeric'
        value={currentClass}
        onChangeText={setCurrentClass}
      />

      <Text style={styles.label}>Which Stream</Text>
      <Picker
        selectedValue={stream}
        style={styles.picker}
        onValueChange={(itemValue) => setStream(itemValue)}
      >
        <Picker.Item label="Select Stream" value="" />
        <Picker.Item label="Science" value="science" />
        <Picker.Item label="Commerce" value="commerce" />
        <Picker.Item label="Arts" value="arts" />
      </Picker>

      <Text style={styles.label}>Extra Activities</Text>
      <TextInput
      style={[styles.input, { height: 90 }]}
        placeholder="Extra Activities"
        placeholderTextColor="#333" 
        value={extraActivities}
        multiline
        onChangeText={setExtraActivities}
      />

      <Button title="NEXT" onPress={handleSubmit} color="green" />
    </View>
  );
}


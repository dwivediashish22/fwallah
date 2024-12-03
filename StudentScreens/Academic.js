import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, Button, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

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
      <Text style={styles.headerText}>Fill in Your Academic Details</Text>

      <Text style={styles.label}>School Name</Text>
      <TextInput
        style={styles.input}
        placeholder="School's Name"
        value={schoolName}
        onChangeText={setSchoolName}
      />

      <Text style={styles.label}>Current Class/Standard</Text>
      <TextInput
        style={styles.input}
        placeholder="Current Class"
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
        value={extraActivities}
        multiline
        onChangeText={setExtraActivities}
      />

      <Button title="Submit" onPress={handleSubmit} color="#4CAF50" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'pink',
    flex: 1,
  },
  headerText: {
    fontSize: 29,
    fontWeight: 'bold',
    color: '',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#333',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 6,
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  picker: {
    height: 60,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    marginVertical: 10,
    backgroundColor: '#fff',
  },
});

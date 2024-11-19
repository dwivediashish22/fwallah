import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function Register({ navigation }) {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    gender: '',
    qualification: '',
    country: '',
    message: '',
  });

  const handleSubmit = () => {
    const { name, age, email, gender, qualification, country, message } = formData;

    if (!name && !age && !email && !gender && !qualification && !country && !message) {
      Alert.alert('Empty Form', 'Please fill in at least one field.');
    } else {
      Alert.alert('Form Submitted', JSON.stringify(formData));  // formData holds the input value in the form
      navigation.navigate('MainScreen');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Please Register Yourself</Text>

      <TextInput
        placeholder="Name"
        style={styles.input}
        onChangeText={(text) => setFormData({ ...formData, name: text })}
      />
      <TextInput
        placeholder="Age"
        style={styles.input}
        keyboardType="numeric"
        onChangeText={(text) => setFormData({ ...formData, age: text })}
      />
      <TextInput
        placeholder="Email"
        style={styles.input}
        keyboardType="email-address"
        onChangeText={(text) => setFormData({ ...formData, email: text })}
      />

      {/* Gender Dropdown */}
      <Text style={styles.label}>Gender</Text>
      <Picker
        selectedValue={formData.gender}
        style={styles.picker}
        onValueChange={(itemValue) => setFormData({ ...formData, gender: itemValue })}
      >
        <Picker.Item label="Select Gender" value="" />
        <Picker.Item label="Male" value="male" />
        <Picker.Item label="Female" value="female" />
      </Picker>

      {/* Qualification Dropdown */}
      <Text style={styles.label}>Highest Qualification</Text>
      <Picker
        selectedValue={formData.qualification}
        style={styles.picker}
        onValueChange={(itemValue) => setFormData({ ...formData, qualification: itemValue })}
      >
        <Picker.Item label="Select Qualification" value="" />
        <Picker.Item label="10th" value="10th" />
        <Picker.Item label="12th" value="12th" />
        <Picker.Item label="Graduate" value="graduate" />
        <Picker.Item label="Post Graduate" value="post graduate" />
      </Picker>

      {/* Country Dropdown */}
      <Text style={styles.label}>Country</Text>
      <Picker
        selectedValue={formData.country}  // This binds the currently selected value of the dropdown to the country property in your formData state. 
        style={styles.picker}
        onValueChange={(itemValue) => setFormData({ ...formData, country: itemValue })}
      >
        <Picker.Item label="Select Country" value="" />
        <Picker.Item label="🇮🇳 India" value="India" />
      </Picker>

      <TextInput
        placeholder="Type your message here"
        style={[styles.input, { height: 100 }]}
        multiline
        onChangeText={(text) => setFormData({ ...formData, message: text })}
      />

      <Button title="Submit" onPress={handleSubmit} color="#4CAF50" borderColor="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, backgroundColor: 'pink' ,},
  input: {
    borderWidth: 2,
    borderColor: "black",
    marginBottom: 10,
    padding: 8,
    borderRadius: 4,
    backgroundColor: '#FD5E53',
    textColor: "white",
  },
  picker: {
    borderWidth: 2,
    borderColor: "black",
    marginBottom: 20,
    padding: 8,
    borderRadius: 4,
    backgroundColor: '#FD5E53',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    fontSize: 28,
    color: 'black',
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 20,
  },
});

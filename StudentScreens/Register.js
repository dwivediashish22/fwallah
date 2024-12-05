import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Text, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import RNPickerSelect from 'react-native-picker-select';

export default function Register({ navigation }) {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    gender: '',
    address: '',
    dob: '',
  });

  // Generate options for day, month, and year
  const days = Array.from({ length: 31 }, (_, i) => ({ label: `${i + 1}`, value: i + 1 }));
  const months = [
    { label: 'January', value: 1 },
    { label: 'February', value: 2 },
    { label: 'March', value: 3 },
    { label: 'April', value: 4 },
    { label: 'May', value: 5 },
    { label: 'June', value: 6 },
    { label: 'July', value: 7 },
    { label: 'August', value: 8 },
    { label: 'September', value: 9 },
    { label: 'October', value: 10 },
    { label: 'November', value: 11 },
    { label: 'December', value: 12 },
  ];
  const years = Array.from({ length: 2024 - 1985 + 1 }, (_, i) => ({ label: `${1985 + i}`, value: 1985 + i }));

  const handleSubmit = () => {
    const { name, number, email, gender, address, dob } = formData;
    // Validate if any field is empty
    if (!name || !number || !email || !gender || !address || !dob.day || !dob.month || !dob.year) {
      Alert.alert('Incomplete Form', 'You need to fill all the details.');
      return;
    }
    // If all fields are filled
    Alert.alert('Form Submitted', JSON.stringify(formData));
    navigation.navigate('Parent');
  };
  

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.text1}>Please Enter The Details</Text>

        <Text style={styles.label}>Full Name</Text>
        <TextInput
          placeholder="Name"
          placeholderTextColor="#dcdcdc" 
          style={styles.input}
          onChangeText={(text) => setFormData({ ...formData, name: text })}
        />

        <Text style={styles.label}>Mobile Number</Text>
        <TextInput
          placeholder="Mobile Number"
          placeholderTextColor="#dcdcdc" 
          style={styles.input}
          keyboardType="numeric"
          onChangeText={(text) => setFormData({ ...formData, number: text })}
        />

        <Text style={styles.label}>Email Address</Text>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#dcdcdc" 
          style={styles.input}
          keyboardType="email-address"
          onChangeText={(text) => setFormData({ ...formData, email: text })}
        />

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

        <Text style={styles.label}>Your D.O.B</Text>
        <View style={styles.dobContainer}>
        <View style={styles.dobInputContainer }>
    <RNPickerSelect
      onValueChange={(value) => setFormData({ ...formData, dob: { ...formData.dob, day: value } })}
      items={days}
      placeholder={{ label: 'Day', value: null }}
      placeholderTextColor="#dcdcdc" 
      style={pickerSelectStyles}
    />
    </View>
   <View style={styles.dobInputContainer}>
    <RNPickerSelect
      onValueChange={(value) => setFormData({ ...formData, dob: { ...formData.dob, month: value } })}
      items={months}
      placeholder={{ label: 'Month', value: null }}
      placeholderTextColor="#dcdcdc" 
      style={pickerSelectStyles}
    />
  </View>
  <View style={styles.dobInputContainer}>
    <RNPickerSelect
      onValueChange={(value) => setFormData({ ...formData, dob: { ...formData.dob, year: value } })}
      items={years}
      placeholder={{ label: 'Year', value: null }}
      placeholderTextColor="#dcdcdc" 
      style={pickerSelectStyles}
    />
  </View>
</View>

        <Text style={styles.label}>Your Address</Text>
        <TextInput
          placeholder="Type your address here"
          placeholderTextColor="#dcdcdc" 
          style={[styles.input, { height: 90 }]}
          multiline
          onChangeText={(text) => setFormData({ ...formData, address: text })}
        />

        <View style={styles.buttonContainer}>
          <Button title="Submit" onPress={handleSubmit} color="#4CAF50" />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 20,
    paddingTop: 20,
  },
  container: {
    padding: 20,
    backgroundColor: 'dimgray',
  },
  input: {
    borderWidth: 2,
    borderColor: 'black',
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 6,
    backgroundColor: 'gray',
    fontSize: 16,
    color: '#dcdcdc',
    height: 50,
   
  },
  picker: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 6,
    marginBottom: 10,
    height: 55,
    backgroundColor: 'gray',
    justifyContent: 'center',
    color:"#dcdcdc"

  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'black',
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
  },
  text1: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  dobContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '',
    marginBottom: 10,
  },
  dobInputContainer: {
  flex: 1, 
  marginHorizontal: 5, 
  backgroundColor: 'gray', 
  borderWidth: 1,
  borderColor: 'black',
  borderRadius: 6,
  justifyContent: 'center',
  height: 50, 
},
text1:{
  fontSize: 29,
  fontWeight: '600',
  textAlign: 'center',
  marginBottom: 25,
},
});

const pickerSelectStyles = {
  inputIOS: {
    height: 50, 
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: 'gray', 
    fontSize: 16,
    color: '#dcdcdc',
  },
  inputAndroid: {
    height: 60, 
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: 'gray',
    fontSize: 16,
    color: '#dcdcdc',
    
  },
};

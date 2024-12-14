import React, { useState } from 'react';
import styles from '../styles.js';
import { View, TextInput, Button, StyleSheet, Alert, Text, ScrollView, TouchableOpacity } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';


export default function StudentBasic ({ navigation }) {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    gender: '',
    address: '',
    dob: '',
  });

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const handleDateConfirm = (date) => {
    setFormData({
      ...formData,
      dob: date.toISOString().split('T')[0], // Format date as YYYY-MM-DD
    });
    setDatePickerVisibility(false);
  };

  const handleSubmit = () => {
    const { name, number, email, gender, address, dob } = formData;

    if (!name || !number || !email || !gender || !address || !dob) {
      Alert.alert('Incomplete Form', 'You need to fill all the details.');
      return;
    }

    Alert.alert('Form Submitted', JSON.stringify(formData));
    navigation.navigate('Guardian-Info');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.text1}>Please Enter your Basic Information</Text>

        <Text style={styles.label}>Full Name</Text>
        <TextInput
          placeholder="Name"
          placeholderTextColor="#333"
          style={styles.input}
          onChangeText={(text) => setFormData({ ...formData, name: text })}
        />

        <Text style={styles.label}>Mobile Number</Text>
        <TextInput
          placeholder="Mobile Number"
          placeholderTextColor="#333"
          style={styles.input}
          keyboardType="numeric"
          onChangeText={(text) => setFormData({ ...formData, number: text })}
        />

        <Text style={styles.label}>Email Address</Text>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#333"
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
        <View style={styles.dobInputContainer}>
          <TextInput
            placeholder="Select Date of Birth"
            placeholderTextColor="#333"
            style={[styles.input, { flex: 1 }]}
            value={formData.dob}
            editable={false} // Make this field readonly
          />
          <TouchableOpacity onPress={() => setDatePickerVisibility(true)} style={styles.calendarIcon}>
            <Ionicons name="calendar-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleDateConfirm}
          onCancel={() => setDatePickerVisibility(false)}
        />

        <Text style={styles.label}>Your Address</Text>
        <TextInput
          placeholder="Type your address here"
          placeholderTextColor="#333"
          style={[styles.input, { height: 90 }]}
          multiline
          onChangeText={(text) => setFormData({ ...formData, address: text })}
        />

        <View style={styles.buttonContainer}>
          <Button title="NEXT" onPress={handleSubmit} color="#4CAF50" />
        </View>
      </View>
    </ScrollView>
  );
}
import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Text, ScrollView, TouchableOpacity } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useCountryStateDistrict } from '../ConstantApi';
import styles from '../styles.js';

export default function Personal() {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    gender: '',
    address: '',
    dob: '',
    country: '',
    state: '',
    district: '',
  });

  const {
    countries = [],
    states = [],
    districts = [],
    fetchStates,
    fetchDistricts,
  } = useCountryStateDistrict();

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
    navigation.navigate('Professional');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.text1}>Please Enter your Basic Information</Text>

        {/* Full Name */}
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          placeholder="Name"
          placeholderTextColor="#333"
          style={styles.input}
          onChangeText={(text) => setFormData({ ...formData, name: text })}
        />

        {/* Mobile Number */}
        <Text style={styles.label}>Mobile Number</Text>
        <TextInput
          placeholder="Mobile Number"
          placeholderTextColor="#333"
          style={styles.input}
          keyboardType="numeric"
          onChangeText={(text) => setFormData({ ...formData, number: text })}
        />

        {/* Email Address */}
        <Text style={styles.label}>Email Address</Text>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#333"
          style={styles.input}
          keyboardType="email-address"
          onChangeText={(text) => setFormData({ ...formData, email: text })}
        />

        {/* Gender */}
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

        {/* Date of Birth */}
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

        {/* Country */}
        <Text style={styles.label}>Country</Text>
        <Picker
          selectedValue={formData.country}
          style={styles.picker}
          onValueChange={(itemValue) => {
            setFormData({ ...formData, country: itemValue, state: '', district: '' });
            fetchStates(itemValue);
          }}
        >
          <Picker.Item label="Select Country" value="" />
          {countries.map((country) => (
            <Picker.Item key={country.id} label={country.name} value={country.id} />
          ))}
        </Picker>

        {/* State */}
        <Text style={styles.label}>State</Text>
        <Picker
          selectedValue={formData.state}
          style={styles.picker}
          onValueChange={(itemValue) => {
            setFormData({ ...formData, state: itemValue, district: '' });
            fetchDistricts(itemValue);
          }}
        >
          <Picker.Item label="Select State" value="" />
          {states.map((state) => (
            <Picker.Item key={state.id} label={state.name} value={state.id} />
          ))}
        </Picker>

        {/* District */}
        <Text style={styles.label}>District</Text>
        <Picker
          selectedValue={formData.district}
          style={styles.picker}
          onValueChange={(itemValue) => setFormData({ ...formData, district: itemValue })}
        >
          <Picker.Item label="Select District" value="" />
          {districts.map((district) => (
            <Picker.Item key={district.id} label={district.name} value={district.id} />
          ))}
        </Picker>

        {/* Address */}
        <Text style={styles.label}>Your Address</Text>
        <TextInput
          placeholder="Type your address here"
          placeholderTextColor="#333"
          style={[styles.input, { height: 90 }]}
          multiline
          onChangeText={(text) => setFormData({ ...formData, address: text })}
        />

        {/* Submit Button */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>NEXT</Text>
      </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Alert, Text, ScrollView, TouchableOpacity } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles.js';

export default function StudentBasic({ navigation }) {
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

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch countries on initial render
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://api1.he.nic.in/aishemasterservice/api/country');
        const data = await response.json();
        setCountries(data || []); // Fallback to empty array if data is null
      } catch (error) {
        console.error('Error fetching countries:', error);
        Alert.alert('Error', 'Failed to load countries.');
      }
    };

    fetchCountries();
  }, []);

  // Fetch states when country changes
  useEffect(() => {
    if (formData.country) {
      const fetchStates = async () => {
        setLoading(true);
        try {
          const response = await fetch(
            `https://api1.he.nic.in/aishemasterservice/api/state?country=${formData.country}`
          );
          const data = await response.json();
          setStates(data || []); // Fallback to empty array if data is null
        } catch (error) {
          console.error('Error fetching states:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchStates();
      // Clear previously selected state and district
      setFormData((prevFormData) => ({ ...prevFormData, state: '', district: '' }));
      setDistricts([]); // Clear districts
    } else {
      setStates([]); // Clear states if no country is selected
    }
  }, [formData.country]);

  // Fetch districts when state changes
  useEffect(() => {
    if (formData.state) {
      const fetchDistricts = async () => {
        try {
          const response = await fetch(
            `https://api1.he.nic.in/aishemasterservice/api/district/${formData.state}`
          );
          const data = await response.json();
          setDistricts(data || []); // Fallback to empty array if data is null
        } catch (error) {
          console.error('Error fetching districts:', error);
        }
      };

      fetchDistricts();
      // Clear previously selected district
      setFormData((prevFormData) => ({ ...prevFormData, district: '' }));
    } else {
      setDistricts([]); // Clear districts if no state is selected
    }
  }, [formData.state]);

  const handleDateConfirm = (date) => {
    setFormData({
      ...formData,
      dob: date.toISOString().split('T')[0], // Format date as YYYY-MM-DD
    });
    setDatePickerVisibility(false);
  };

  const handleSubmit = () => {
    const { name, number, email, gender, address, dob, country, state, district } = formData;

    if (!name || !number || !email || !gender || !address || !dob || !country || !state || !district) {
      Alert.alert('Incomplete Form', 'You need to fill all the details.');
      return;
    }

    Alert.alert('Form Submitted', JSON.stringify(formData));
    navigation.navigate('Guardian-Info'); // Ensure Guardian-Info is registered in the navigator
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

        <Text style={styles.label}>Country</Text>
        <Picker
          selectedValue={formData.country}
          style={styles.picker}
          onValueChange={(itemValue) => setFormData({ ...formData, country: itemValue })}
        >
          <Picker.Item label="Select Country" value="" />
          {countries.map((country, index) => (
            <Picker.Item key={`country-${index}`} label={country.name} value={country.id || index} />
          ))}
        </Picker>

        <Text style={styles.label}>State</Text>
        <Picker
          selectedValue={formData.state}
          style={styles.picker}
          onValueChange={(itemValue) => setFormData({ ...formData, state: itemValue })}
        >
          <Picker.Item label="Select State" value="" />
          {states.map((state, index) => (
            <Picker.Item key={`state-${index}`} label={state.name} value={state.id || index} />
          ))}
        </Picker>

        <Text style={styles.label}>District</Text>
        <Picker
          selectedValue={formData.district}
          style={styles.picker}
          onValueChange={(itemValue) => setFormData({ ...formData, district: itemValue })}
        >
          <Picker.Item label="Select District" value="" />
          {districts.map((district, index) => (
            <Picker.Item key={`district-${index}`} label={district.name} value={district.id || index} />
          ))}
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

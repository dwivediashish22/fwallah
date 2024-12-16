import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Alert, Text, ScrollView, TouchableOpacity } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';


export default function ConstantApi({ navigation }) {
  const [formData, setFormData] = useState({
   
    country: '',
    state: '',
    district: '',
  });
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
          console.log('Countries:', data); // Log countries response
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
}
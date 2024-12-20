import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';
import * as DocumentPicker from 'expo-document-picker'; // For uploading resume
import styles from '../styles.js';

const Additional = () => {
  const [learningPreference, setLearningPreference] = useState('');
  const [hobbies, setHobbies] = useState('');
  const [availability, setAvailability] = useState('');
  const [preferredDate, setPreferredDate] = useState(new Date());
  const [preferredTime, setPreferredTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [hearAboutUs, setHearAboutUs] = useState('');
  const [resume, setResume] = useState(null);

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setPreferredDate(selectedDate);
    }
  };

  const handleTimeChange = (event, selectedTime) => {
    setShowTimePicker(false);
    if (selectedTime) {
      setPreferredTime(selectedTime);
    }
  };

  const handleResumeUpload = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: 'application/pdf', // Only allow PDF files
        copyToCacheDirectory: true,
      });
  
      console.log('Document Picker Result:', result);
  
      if (!result.canceled && result.assets && result.assets.length > 0) {
        const file = result.assets[0];
        setResume(file); // Save the first file in assets
        Alert.alert('Success', `Resume uploaded: ${file.name}`);
      } else if (result.canceled) {
        Alert.alert('Cancelled', 'No document was selected.');
      } else {
        Alert.alert('Error', 'No valid document found in the selection.');
      }
    } catch (error) {
      console.error('Error in handleResumeUpload:', error);
      Alert.alert('Error', 'An unexpected error occurred during file selection.');
    }
  };

  const handleSubmit = () => {
    if (!resume) {
      Alert.alert('Error', 'Please upload your resume before submitting.');
      return;
    }
    Alert.alert('Success', 'Form submitted successfully!');
    // Submit form data to the server or process further
  };

  return (
    <ScrollView style={styles.container}>
    <Text style={styles.text1}>Add Your Additional Details</Text>
      {/* Learning Preference */}
      <Text style={styles.label}>Learning Preference</Text>
      <TextInput
        style={styles.input}
        placeholder="Learning Preference"
        placeholderTextColor="#333"
        value={learningPreference}
        onChangeText={setLearningPreference}
      />

      {/* Interests and Hobbies */}
      <Text style={styles.label}>Interests and Hobbies</Text>
      <TextInput
        style={styles.input}
        placeholder="Interests and Hobbies"
        placeholderTextColor="#333"
        value={hobbies}
        onChangeText={setHobbies}
      />

      {/* Availability for Counselling */}
      <Text style={styles.label}>Availability for Counselling Session</Text>
      <Picker
        selectedValue={availability}
        style={styles.picker}
        onValueChange={(itemValue) => setAvailability(itemValue)}
      >
        <Picker.Item label="Yes" value="yes" />
        <Picker.Item label="No" value="no" />
      </Picker>

      {/* Preferred Date */}
      <Text style={styles.label}>Preferred Date</Text>
      <TouchableOpacity
        style={styles.datePickerButton}
        onPress={() => setShowDatePicker(true)}
      >
        <Ionicons name="calendar-outline" size={24} color="#333" />
        <Text style={styles.datePickerText}>{preferredDate.toDateString()}</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={preferredDate}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}

      {/* Preferred Time */}
      <Text style={styles.label}>Preferred Time</Text>
      <TouchableOpacity
        style={styles.datePickerButton}
        onPress={() => setShowTimePicker(true)}
      >
        <Ionicons name="time-outline" size={24} color="#333" />
        <Text style={styles.datePickerText}>
          {preferredTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </Text>
      </TouchableOpacity>
      {showTimePicker && (
        <DateTimePicker
          value={preferredTime}
          mode="time"
          display="default"
          onChange={handleTimeChange}
        />
      )}

      {/* How Did You Hear About Us */}
      <Text style={styles.label}>How Did You Hear About Us</Text>
      <Picker
        selectedValue={hearAboutUs}
        style={styles.picker}
        onValueChange={(itemValue) => setHearAboutUs(itemValue)}
      >
        <Picker.Item label="Friend" value="friend" />
        <Picker.Item label="Social Media" value="social_media" />
        <Picker.Item label="Website" value="website" />
      </Picker>

      {/* Upload Resume */}
      <Text style={styles.label}>Upload Resume</Text>
      <TouchableOpacity style={styles.pasteButton} onPress={handleResumeUpload}>
        <Text style={styles.buttonText}>
          {resume ? `Uploaded: ${resume.name}` : 'Upload Resume'}
        </Text>
      </TouchableOpacity>

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};


export default Additional;

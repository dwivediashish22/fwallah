import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { useNavigation } from '@react-navigation/native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Ionicons } from '@expo/vector-icons'; // For calendar icon (expo)

const WorkPre = () => {
  const navigation = useNavigation();

  const [areaOfExpertise, setAreaOfExpertise] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [sessionalModel, setSessionalModel] = useState('');
  const [availability, setAvailability] = useState(''); // Holds the selected date
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false); // Controls date picker visibility

  const handleDateConfirm = (date) => {
    setAvailability(date.toISOString().split('T')[0]); // Format date as YYYY-MM-DD
    setDatePickerVisibility(false);
  };

  const handleSubmit = () => {
    if (!areaOfExpertise || !targetAudience || !sessionalModel || !availability) {
      Alert.alert('Error', 'Please fill out all fields before submitting.');
      return;
    }
    navigation.navigate('ProfessionalAchievement');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>ADD YOUR WORK PREFERENCES</Text>

      <Text style={styles.subHeading}>Area Of Expertise</Text>
      <View style={styles.pickerContainer}>
        <RNPickerSelect
          onValueChange={(value) => setAreaOfExpertise(value)}
          items={[
            { label: 'Engineering Careers', value: 'engineering' },
            { label: 'Study Abroad', value: 'study_abroad' },
            { label: 'Skill Development', value: 'skill_development' },
            { label: 'Etc', value: 'etc' },
          ]}
          style={pickerSelectStyles}
          placeholder={{ label: 'Select your area of expertise', value: null }}
        />
      </View>

      <Text style={styles.subHeading}>Target Audience</Text>
      <View style={styles.pickerContainer}>
        <RNPickerSelect
          onValueChange={(value) => setTargetAudience(value)}
          items={[
            { label: 'High School', value: 'high_school' },
            { label: 'Intermediate', value: 'intermediate' },
            { label: 'Graduate', value: 'graduate' },
            { label: 'Working Professional', value: 'working_professional' },
          ]}
          style={pickerSelectStyles}
          placeholder={{ label: 'Select your target audience', value: null }}
        />
      </View>

      <Text style={styles.subHeading}>Professional Sessional Models</Text>
      <View style={styles.pickerContainer}>
        <RNPickerSelect
          onValueChange={(value) => setSessionalModel(value)}
          items={[
            { label: 'Online', value: 'online' },
            { label: 'Offline', value: 'offline' },
            { label: 'Hybrid', value: 'hybrid' },
          ]}
          style={pickerSelectStyles}
          placeholder={{ label: 'Select your sessional model', value: null }}
        />
      </View>

      <Text style={styles.subHeading}>Availability</Text>
      <TouchableOpacity
        style={[styles.pickerContainer1, { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }]}
        onPress={() => setDatePickerVisibility(true)}
      >
        <Text style={{ color: availability ? '#333' : 'gray', fontSize: 16 }}>
          {availability || 'Select your availability date'}
        </Text>
        <Ionicons name="calendar-outline" size={24} color="black" />
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={() => setDatePickerVisibility(false)}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>NEXT</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'silver',
  },
  heading: {
    fontSize: 34,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
    textAlign: 'center',
  },
  subHeading: {
    fontSize: 22,
    fontWeight: '500',
    color: 'black',
    marginBottom: 5,
    marginTop: 10,
  },
  label: {
    fontSize: 17,
    color: 'black',
    marginBottom: 5,
  },
  pickerContainer: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 5,
    backgroundColor: 'white',
    marginBottom: 20,
    padding: -15,
  },
  pickerContainer1: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 15,
    backgroundColor: 'white',
    marginBottom: 20,
    padding: 15,
  },
  button: {
    marginTop: 30,
    backgroundColor: 'green',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 35,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

const pickerSelectStyles = {
  inputIOS: {
    fontSize: 14,
    color: '#333',
    backgroundColor: 'transparent',
  },
  inputAndroid: {
    fontSize: 14,
    color: '#333',
    backgroundColor: 'transparent',
    borderRadius: 15,
  },
};

export default WorkPre;
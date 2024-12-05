import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { useNavigation } from '@react-navigation/native';

const WorkPre = () => {
  const navigation = useNavigation();

  const [areaOfExpertise, setAreaOfExpertise] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [sessionalModel, setSessionalModel] = useState('');
  const [availabilityDay, setAvailabilityDay] = useState('');
  const [availabilityDate, setAvailabilityDate] = useState('');
  const [availabilityMonth, setAvailabilityMonth] = useState('');
  const [availabilityYear, setAvailabilityYear] = useState('');

  const handleSubmit = () => {
    if (
      !areaOfExpertise ||
      !targetAudience ||
      !sessionalModel ||
      !availabilityDay ||
      !availabilityDate ||
      !availabilityMonth ||
      !availabilityYear
    ) {
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
      
      <Text style={styles.label}>Day of the Week</Text>
      <View style={styles.pickerContainer}>
        <RNPickerSelect
          onValueChange={(value) => setAvailabilityDay(value)}
          items={[
            { label: 'Sunday', value: 'sunday' },
            { label: 'Monday', value: 'monday' },
            { label: 'Tuesday', value: 'tuesday' },
            { label: 'Wednesday', value: 'wednesday' },
            { label: 'Thursday', value: 'thursday' },
            { label: 'Friday', value: 'friday' },
            { label: 'Saturday', value: 'saturday' },
          ]}
          style={pickerSelectStyles}
          placeholder={{ label: 'Select a day of the week', value: null }}
          placeholderTextColor="#dcdcdc"
        />
      </View>

      <Text style={styles.label}>Date of the Month</Text>
      <View style={styles.pickerContainer}>
        <RNPickerSelect
          onValueChange={(value) => setAvailabilityDate(value)}
          items={Array.from({ length: 31 }, (_, i) => ({
            label: (i + 1).toString(),
            value: i + 1,
          }))}
          style={pickerSelectStyles}
          placeholder={{ label: 'Select a date (1-31)', value: null }}
        />
      </View>

      <Text style={styles.label}>Month</Text>
      <View style={styles.pickerContainer}>
        <RNPickerSelect
          onValueChange={(value) => setAvailabilityMonth(value)}
          items={[
            { label: 'January', value: 'january' },
            { label: 'February', value: 'february' },
            { label: 'March', value: 'march' },
            { label: 'April', value: 'april' },
            { label: 'May', value: 'may' },
            { label: 'June', value: 'june' },
            { label: 'July', value: 'july' },
            { label: 'August', value: 'august' },
            { label: 'September', value: 'september' },
            { label: 'October', value: 'october' },
            { label: 'November', value: 'november' },
            { label: 'December', value: 'december' },
          ]}
          style={pickerSelectStyles}
          placeholder={{ label: 'Select a month', value: null }}
        />
      </View>

      <Text style={styles.label}>Year</Text>
      <View style={styles.pickerContainer}>
        <RNPickerSelect
          onValueChange={(value) => setAvailabilityYear(value)}
          items={Array.from({ length: 36 }, (_, i) => ({
            label: (1985 + i).toString(),
            value: 1985 + i,
          }))}
          style={pickerSelectStyles}
          placeholder={{ label: 'Select a year (1985-2020)', value: null }}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'dimgray',
  },
  heading: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#333',
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
    backgroundColor: 'gray',
    color:'white',
    marginBottom: 20,
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
    color: 'white',
    backgroundColor: 'transparent',
  },
};

export default WorkPre;
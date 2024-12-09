
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert,ScrollView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { useNavigation } from '@react-navigation/native';

const Professional = () => {
  const navigation = useNavigation();

  const [bachelor, setBachelor] = useState('');
  const [master, setMaster] = useState('');
  const [certification, setCertification] = useState('');
  const [psychology, setPsychology] = useState('');
  const [careerGuidance, setCareerGuidance] = useState('');

  const handleSubmit = () => {
    if (!bachelor || !master || !certification || !psychology || !careerGuidance) {
      Alert.alert('Error', 'Please fill out all fields before submitting.');
      return;
    }
    navigation.navigate('WorkPre');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Add Professional Information</Text>

      <Text style={styles.subHeading}>Bachelor</Text>
      <View style={styles.pickerContainer}>
        <RNPickerSelect
          onValueChange={(value) => setBachelor(value)}
          items={[
            { label: 'BA', value: 'BA' },
            { label: 'BTECH', value: 'BTECH' },
            { label: 'BSC', value: 'BSC' },
            { label: 'BCA', value: 'BCA' },
            { label: 'OTHER', value: 'OTHER' },
          ]}
          style={pickerSelectStyles}
          placeholder={{ label: 'Select your Bachelor degree', value: null }}
        />
      </View>

      <Text style={styles.subHeading}>Master</Text>
      <View style={styles.pickerContainer}>
        <RNPickerSelect
          onValueChange={(value) => setMaster(value)}
          items={[
            { label: 'MBA', value: 'MBA' },
            { label: 'MA', value: 'MA' },
            { label: 'MTECH', value: 'MTECH' },
            { label: 'MSC', value: 'MSC' },
            { label: 'OTHER', value: 'OTHER' },
          ]}
          style={pickerSelectStyles}
          placeholder={{ label: 'Select your Master degree', value: null }}
        />

      </View>

      <Text style={styles.subHeading}>Certification</Text>
      <View style={styles.pickerContainer}>
        <RNPickerSelect
          onValueChange={(value) => setCertification(value)}
          items={[
            { label: 'Yes', value: 'Yes' },
            { label: 'No', value: 'No' },
          ]}
          style={pickerSelectStyles}
          placeholder={{ label: 'Do you have certifications?', value: null }}
        />
      </View>

      <Text style={styles.subHeading}>Psychology</Text>
      <View style={styles.pickerContainer}>
        <RNPickerSelect
          onValueChange={(value) => setPsychology(value)}
          items={[
            { label: 'Yes', value: 'Yes' },
            { label: 'No', value: 'No' },
          ]}
          style={pickerSelectStyles}
          placeholder={{ label: 'Do you have knowledge of psychology?', value: null }}
        />
      </View>

      <Text style={styles.subHeading}>Career Guidance</Text>
      <View style={styles.pickerContainer}>
        <RNPickerSelect
          onValueChange={(value) => setCareerGuidance(value)}
          items={[
            { label: 'Yes', value: 'Yes' },
            { label: 'No', value: 'No' },
          ]}
          style={pickerSelectStyles}
          placeholder={{ label: 'Do you offer career guidance?', value: null }}
        />
      </View>

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
    fontSize: 21,
    fontWeight: '500',
    color: 'black',
    marginBottom: 5,
    marginTop: 10,
  },
  pickerContainer: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 5,
    backgroundColor: '#f0f8ff',
    padding: 0,
    marginBottom: 20,
    height: 55,
    color: "",
    placeholderTextColor:"#333" 
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
    color: 'white',
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
  },
};

export default Professional;

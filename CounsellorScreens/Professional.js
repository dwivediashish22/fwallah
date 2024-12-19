
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert,ScrollView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles.js';

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
      <Text style={styles.text1}>Add Professional Information</Text>

      <Text style={styles.label}>Bachelor</Text>
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

      <Text style={styles.label}>Master</Text>
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

      <Text style={styles.label}>Certification</Text>
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

      <Text style={styles.label}>Psychology</Text>
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

      <Text style={styles.label}>Career Guidance</Text>
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

const pickerSelectStyles = {
  inputIOS: {
    fontSize: 14,
    color: '#333',
    backgroundColor: 'transparent',
  },
  inputAndroid: {
    fontSize: 14,
    color: 'black',
     placeholderTextColor:"black",
    backgroundColor: 'transparent',
  },
};

export default Professional;
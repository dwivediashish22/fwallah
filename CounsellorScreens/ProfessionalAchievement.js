import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProfessionalAchievement = () => {
  const [workHistory, setWorkHistory] = useState('');
  const [awards, setAwards] = useState('');
  const [publications, setPublications] = useState('');
  const navigation = useNavigation();

  const handleSubmit = () => {
    if (!workHistory.trim()) {
      Alert.alert('Error', 'Work History is required.');
      return;
    }

    // Navigate to Miscellaneous screen
    navigation.navigate('Miscellaneous', {
      workHistory,
      awards,
      publications,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add your Professional Achievement</Text>

      {/* Work History */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Work History</Text>
        <TextInput
          style={styles.input}
          placeholder="List of Organisations where you worked"
          placeholderTextColor="gray"
          value={workHistory}
          onChangeText={setWorkHistory}
          required
        />
      </View>

      {/* Awards and Recognition */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Awards and Recognition (Optional)</Text>
        <TextInput
          style={styles.input}
          placeholder="Awards and recognition (Optional)"
          placeholderTextColor="gray"
          value={awards}
          onChangeText={setAwards}
        />
      </View>

      {/* Publication and Research */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Publication and Research (Optional)</Text>
        <TextInput
          style={styles.input}
          placeholder="Publication and research (Optional)"
          placeholderTextColor="gray"
          value={publications}
          onChangeText={setPublications}
        />
      </View>

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>NEXT</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'silver',
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    justifyContent: "center",
    marginBottom: 20,
    color: '#333',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 21,
    fontWeight: '600',
    marginBottom: 5,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    backgroundColor: 'white',
    color: '#333',
  },
  submitButton: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfessionalAchievement;

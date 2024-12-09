import React, { useState } from 'react';
import { View, Text, TextInput,  StyleSheet, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import { ScrollView } from 'react-native-web';

const Career = () => {
  const [careerField, setCareerField] = useState('');
  const [careerGoals, setCareerGoals] = useState('');
  const [careerChallenges, setCareerChallenges] = useState('');
  const [previousCounseling, setPreviousCounseling] = useState('');
  const navigation = useNavigation();

  const handleSubmit = () => {
    if (
      !careerField.trim() ||
      !careerGoals.trim() ||
      !careerChallenges.trim() ||
      !previousCounseling.trim()
    ) {
      Alert.alert('Error', 'Please fill in all the credentials.');
    } else {
      navigation.navigate('Additional');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Career Counseling Related Details</Text>

      {/* Area of Interest / Preferred Career Field */}
      <Text style={styles.label}>Area of Interest / Preferred Career Field</Text>
      <TextInput
        style={styles.input}
        placeholder="Career Field"
        placeholderTextColor="#333" 
        value={careerField}
        onChangeText={setCareerField}
      />

      {/* Current Career Goals */}
      <Text style={styles.label}>Current Career Goals</Text>
      <TextInput
        style={styles.input}
        placeholder="Current Career Goals"
        placeholderTextColor="#333" 
        value={careerGoals}
        onChangeText={setCareerGoals}
      />

      {/* Challenges in Career Planning */}
      <Text style={styles.label}>Challenges in Career Planning</Text>
      <TextInput
        style={styles.input}
        placeholder="Challenges in Career Planning"
        placeholderTextColor="#333" 
        value={careerChallenges}
        onChangeText={setCareerChallenges}
      />

      {/* Previous Counseling Experience */}
      <Text style={styles.label}>Previous Counseling Experience</Text>
      <Picker
        selectedValue={previousCounseling}
        style={styles.picker}
        onValueChange={(itemValue) => setPreviousCounseling(itemValue)}
      >
        <Picker.Item label="Select an option" value="" />
        <Picker.Item label="Yes" value="yes" />
        <Picker.Item label="No" value="no" />
      </Picker>

      {/* Submit Button */}
      <View style={styles.buttonContainer}>
          <Button title="NEXT" onPress={handleSubmit} color="#4CAF50" />
        </View>
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
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  label: {
    fontSize:21,
    marginBottom:10,
    color: " black",
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    backgroundColor:'#f0f8ff',
    height: 55,
    color: '#333',
  },
  picker: {
    height: 59,
    marginBottom: 20,
    backgroundColor: "#f0f8ff",
    color: '#333',
  },
  buttonContainer: {
      marginTop: -10,
  },
});

export default Career;

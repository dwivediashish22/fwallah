import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet,  } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Additional = () => {
  const [learningPreference, setLearningPreference] = useState('');
  const [hobbies, setHobbies] = useState('');
  const [availability, setAvailability] = useState('');
  const [preferredDay, setPreferredDay] = useState('');
  const [preferredTime, setPreferredTime] = useState('');
  const [hearAboutUs, setHearAboutUs] = useState('');

  return (
    <View style={styles.container}>
      {/* Learning Preference */}
      <Text style={styles.header}>Learning Preference</Text>
      <TextInput
        style={styles.input}
        placeholder="Learning Preference"
        placeholderTextColor="#dcdcdc" 
        value={learningPreference}
        onChangeText={setLearningPreference}
      />

      {/* Interests and Hobbies */}
      <Text style={styles.label}>Interests and Hobbies</Text>
      <TextInput
        style={styles.input}
        placeholder="Interests and Hobbies"
        placeholderTextColor="#dcdcdc" 
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

      {/* Preferred Day and Time */}
      <Text style={styles.label}>Preferred Day</Text>
      <Picker
        selectedValue={preferredDay}
        style={styles.picker}
        onValueChange={(itemValue) => setPreferredDay(itemValue)}
      >
        {[...Array(31).keys()].map((day) => (
          <Picker.Item key={day} label={`Day ${day + 1}`} value={`Day ${day + 1}`} />
        ))}
      </Picker>

      <Text style={styles.label}>Preferred Time</Text>
      <Picker
        selectedValue={preferredTime}
        style={styles.picker}
        onValueChange={(itemValue) => setPreferredTime(itemValue)}
      >
        {[...Array(24).keys()].map((hour) =>
          [...Array(60).keys()].filter((minute) => minute % 15 === 0).map((minute) => (
            <Picker.Item
              key={`${hour}:${minute}`}
              label={`${hour}:${minute < 10 ? `0${minute}` : minute}`}
              value={`${hour}:${minute}`}
            />
          ))
        )}
      </Picker>

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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'dimgray',
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  header:{
     fontSize: 26,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    backgroundColor:"gray"
  },
  picker: {
    height: 60,
    padding: 0,
    marginBottom: 20,
    backgroundColor:"gray",
    color:"#dcdcdc"
  },
});

export default Additional;

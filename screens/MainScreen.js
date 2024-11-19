import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function MainScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.heading}>SCHOLARSHIP PROGRAMS</Text>
        <TouchableOpacity style={[styles.button, styles.scholarshipButton]}>
          <Text style={styles.buttonText}>10th Programs</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.scholarshipButton]}>
          <Text style={styles.buttonText}>12th Programs</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.scholarshipButton]}>
          <Text style={styles.buttonText}>Graduation Programs</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.box}>
        <Text style={styles.heading}>GUIDANCE PROGRAMS</Text>
        <TouchableOpacity style={[styles.button, styles.guidanceButton]}>
          <Text style={styles.buttonText}>Job Programs</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.guidanceButton]}>
          <Text style={styles.buttonText}>Career Programs</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.guidanceButton]}>
          <Text style={styles.buttonText}>Future Programs</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: 'lightblue',
    paddingTop: 10,
  },
  box: {
    width: '100%',
    padding: 15,
    marginBottom: 20,
    backgroundColor: 'yellow',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'black',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: 'red',
  },
  button: {
    marginBottom: 15,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#aaa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scholarshipButton: {
    backgroundColor: '#4CAF50', 
    borderColor: '#388E3C',
  },
  guidanceButton: {
    backgroundColor: '#2196F3', 
    borderColor: '#1976D2',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});

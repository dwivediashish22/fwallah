import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require('../assets/lklk.jpg')} // Ensure this path is correct
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.text}>Welcome! Please select an option below</Text>
      </View>
      <View style={styles.buttonContainer}>
        {/* Student Button */}
        <TouchableOpacity
          style={[styles.button, styles.greenButton]}
          onPress={() => navigation.navigate('QuickSetup')}
        >
          <Text style={styles.buttonText}>Student</Text>
        </TouchableOpacity>

        {/* Counsellor Button */}
        <TouchableOpacity
          style={[styles.button, styles.greenButton]}
          onPress={() => navigation.navigate('QuickSetup1')}
        >
          <Text style={styles.buttonText}>Counsellor</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    marginBottom: 50,
    fontWeight: 'bold',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    width: '70%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
    elevation: 5, // Adds shadow to the button
  },
  greenButton: {
    backgroundColor: '#4CAF50', // Green color
  },
  buttonText: {
    color: 'white',
    fontSize: 19,
    fontWeight: 'bold',
  },
});


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
      source={require('../assets/Home.jpg')}
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
          onPress={() => navigation.navigate('StudentProfile')}
        >
          <Text style={styles.buttonText}>Student</Text>
        </TouchableOpacity>

        {/* Counsellor Button */}
        <TouchableOpacity
          style={[styles.button, styles.greenButton]}
          onPress={() => navigation.navigate('CounsellorProfile')}
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
    width:"70%",
    padding: 12, 
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 20, // Rounded corners (increase for more curvature)
    elevation: 83, // Adds a shadow on Android
    shadowColor: 'white', // Shadow color for iOS
  },
  greenButton: {
    backgroundColor: 'orange',
    borderCurve:10, 
     // Green color
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
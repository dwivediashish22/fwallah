import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styles from '../styles.js';

export default function QuickSetup1({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer1}>
      <View style={styles.container}>
        <Text style={styles.text1}>Press Login To Add Email and Password</Text>
        <Text style={styles.label1}>OR</Text>
        <Text style={styles.text1}>Press Register to register Yourself</Text>
      </View>
      <View style={styles.buttonContainer1}>
        {/* Register Button */}
        <TouchableOpacity
          style={[styles.button1, styles.greenButton]}
          onPress={() => navigation.navigate('Personal')} // Navigates to 'Personal' screen
        >
          <Text style={styles.buttonText1}>Register</Text>
        </TouchableOpacity>

        {/* Login Button */}
        <TouchableOpacity
          style={[styles.button1, styles.greenButton]}
          onPress={() => navigation.navigate('Login1')} // Navigates to 'Login1' screen
        >
          <Text style={styles.buttonText1}>Login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

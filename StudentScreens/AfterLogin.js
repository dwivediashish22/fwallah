import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import styles from '../styles';

export default function AfterLogin({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Welcome! You are successfully Logged In.</Text>
      <Text style={styles.text1}>Press any button below:</Text>

      <View style={styles.buttonContainer1}>
        {/* Register Button */}
        <TouchableOpacity
          style={[styles.button1, styles.greenButton]}
          onPress={() => navigation.navigate('Dashboard')} // navigates to 'Personal' screen
        >
          <Text style={styles.buttonText1}>DASHBOARD</Text>
        </TouchableOpacity>

        {/* Login Button */}
        <TouchableOpacity
          style={[styles.button1, styles.greenButton]}
          onPress={() => navigation.navigate('Report')} // Navigates to 'Login1' screen
        >
          <Text style={styles.buttonText1}>REPORT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

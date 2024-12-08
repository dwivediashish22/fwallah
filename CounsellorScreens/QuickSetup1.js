import React from 'react';
import { Text,View, Button, StyleSheet, ImageBackground } from 'react-native';

export default function QuickSetup1({ navigation }) {
  return (
    <ImageBackground
    source={require('../assets/polo.jpg')}

    style={styles.background}
  >
    <View style={styles.container}>
      <Text style={styles.text} >Press Login To Add Email and Password</Text>
      <Text style={styles.text} color='white'>OR</Text>
      <Text style={styles.text}>Press Register To register Yourself</Text>
      </View>
    <View style={styles.buttonContainer}>
      <Button title="Register" onPress={() => navigation.navigate('Personal')} color="green"/>
      <Button title="Login" onPress={() => navigation.navigate('Login1')} color="green" />
    </View>
     </ImageBackground> 
  );
};


const styles = StyleSheet.create({
  background: { flex: 1, justifyContent: 'center',color:"lightblue" },
  container: { flex: 1, justifyContent: 'center', alignItems: 'center',marginBottom:200 },
  text: { fontSize: 32, color: 'white',marginLeft:10},
 buttonContainer: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around', width: '80%', color:'white',marginTop:150,
    marginLeft:40, border:5,marginBottom:50,
   
  }
});

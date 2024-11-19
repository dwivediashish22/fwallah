import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground
   source={require('C:/Users/user/Desktop/Development/React native/Fourth/MyApp/assets/bobo.png')}
      style={styles.background}>

      <View style={styles.container}>
        <Text style={styles.text}>     Welcome !      Please select an option below</Text>
        </View>
        <View style={styles1.buttonContainer}>
          <Button title="Student" onPress={() => navigation.navigate('QuickSetup')} />
          <Button title="Scholar" onPress={() => navigation.navigate('')} />
        </View>
    
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, justifyContent: 'center',  },
  container: { alignItems: 'center', padding: 20 },
  text: { fontSize: 38, color: 'white', marginBottom: 160, marginTop:-190 },

});

const styles1 = StyleSheet.create({
  
  buttonContainer: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around', width: '80%', color:'white',marginTop:150,
    marginLeft:40, border:5,
   },
});

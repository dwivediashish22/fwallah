import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import QuickSetup from './screens/QuickSetup';
import Register from './screens/Register';
import Login from './screens/Login';
import MainScreen from './screens/MainScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>  {/* parent component like div tag */}
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="QuickSetup" component={QuickSetup} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
      </Stack.Navigator>    
       {/* it is used to navigate between different screens  */}
    </NavigationContainer>
  );
}


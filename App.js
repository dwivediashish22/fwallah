import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Student Screens
import HomeScreen from './StudentScreens/HomeScreen';
import QuickSetup from './StudentScreens/QuickSetup';
import Login from './StudentScreens/Login';
import Register from './StudentScreens/Register';
import Parent from './StudentScreens/Parent';
import Academic from './StudentScreens/Academic';
import Career from './StudentScreens/Career';
import Additional from './StudentScreens/Additional';
// Counsellor Screens
import QuickSetup1 from './CounsellorScreens/QuickSetup1';
import Login1 from './CounsellorScreens/Login1';
import Personal from './CounsellorScreens/Personal';
import Professional from './CounsellorScreens/Professional';
import WorkPre from './CounsellorScreens/WorkPre';
import ProfessionalAchievement from './CounsellorScreens/ProfessionalAchievement';
import Miscellaneous from './CounsellorScreens/Miscellaneous';

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
         {/* student screens */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="QuickSetup" component={QuickSetup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Parent" component={Parent} />
        <Stack.Screen name="Academic" component={Academic} />
        <Stack.Screen name="Career" component={Career} />
        <Stack.Screen name="Additional" component={Additional}/>
         {/* counsellor screens */}
         <Stack.Screen name="QuickSetup1" component={QuickSetup1} />
        <Stack.Screen name="Login1" component={Login1}/>
        <Stack.Screen name="Personal" component={Personal}/>
        <Stack.Screen name="Professional" component={Professional}/>
        <Stack.Screen name="WorkPre" component={WorkPre}/>
        <Stack.Screen name="ProfessionalAchievement" component={ProfessionalAchievement}/>
        <Stack.Screen name="Miscellaneous" component={Miscellaneous}/>
      </Stack.Navigator>
    </NavigationContainer>
  )};

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
// // Tab Navigator for Student Screens
// function StudentTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="QuickSetup" component={QuickSetup} />
//       <Tab.Screen name="Login" component={Login} />
//       <Tab.Screen name="Register" component={Register} />
//       <Tab.Screen name="Parent" component={Parent} />
//       <Tab.Screen name="Academic" component={Academic} />
//       <Tab.Screen name="Career" component={Career} />
//       <Tab.Screen name="Additional" component={Additional} />
//     </Tab.Navigator>
//   );
// }

// // Tab Navigator for Counsellor Screens
// function CounsellorTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="QuickSetup1" component={QuickSetup1} />
//       <Tab.Screen name="Login1" component={Login1} />
//       <Tab.Screen name="Personal" component={Personal} />
//       <Tab.Screen name="Professional" component={Professional} />
//       <Tab.Screen name="WorkPre" component={WorkPre} />
//       <Tab.Screen name="ProfessionalAchievement" component={ProfessionalAchievement} />
//       <Tab.Screen name="Miscellaneous" component={Miscellaneous} />
//     </Tab.Navigator>
//   );
// }

// // Main App Navigator
// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         {/* Home Screen */}
//         <Stack.Screen name="Home" component={HomeScreen} />
//         {/* Student and Counsellor Tab Navigators */}
//         <Stack.Screen name="StudentScreens" component={StudentTabs} />
//         <Stack.Screen name="CounsellorScreens" component={CounsellorTabs} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
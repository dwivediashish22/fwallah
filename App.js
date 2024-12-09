import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text, StyleSheet } from 'react-native';

// Import HomeScreen
import HomeScreen from './StudentScreens/HomeScreen';

// Student Screens
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
const TopTab = createMaterialTopTabNavigator();

// Header Component to display screen name above the tabs
function ScreenHeader({ title }) {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
}

// Student Tabs Section
function StudentTabs() {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarStyle: {
          flexDirection: 'column', // Arrange tabs vertically
          backgroundColor: 'silver', // Set a clean background
          width: "100%",
        },
        tabBarActiveTintColor: 'green', // Active tab color
        tabBarInactiveTintColor: 'black', // Inactive tab color
        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: 'bold',
          textAlign: 'center',
          transform: [{ rotate: '360 deg' }], // Rotate text to appear vertically
        },
        tabBarIndicatorStyle: {
          backgroundColor: 'green', // Highlight the active tab
          width: 35,
          height: 3, // Adjust to a vertical indicator
        },
        tabBarItemStyle: {
          justifyContent: 'center',
          alignItems: 'center',
          height: 80,
          borderWidth: 1,
        borderColor: 'black',
        marginHorizontal: 1,
        borderWidth:2,
        borderRadius: 9,
        paddingHorizontal: 5,
        
        },
      }}
        tabBarOptions={{
        scrollEnabled: true, // Allow horizontal scrolling
      }}
   
    >
      <TopTab.Screen name="QuickSetup" component={QuickSetup} />
      <TopTab.Screen name="Login" component={Login} />
      <TopTab.Screen name="Register" component={Register} />
      <TopTab.Screen name="Parent" component={Parent} />
      <TopTab.Screen name="Academic" component={Academic} />
      <TopTab.Screen name="Career" component={Career} />
      <TopTab.Screen name="Additional" component={Additional} />
    </TopTab.Navigator>
  );
}

// Counsellor Tabs Section
function CounsellorTabs() {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarStyle: {
          flexDirection: 'column', // Arrange tabs vertically
          backgroundColor: 'silver', // Set a clean background
          width: "100%",
         
        },
        tabBarActiveTintColor: '#adff2f', // Active tab color
        tabBarInactiveTintColor: 'black', // Inactive tab color
        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: 'bold',
          textAlign: 'center',
          transform: [{ rotate: '360 deg' }], // Rotate text to appear vertically
        },
        tabBarIndicatorStyle: {
          backgroundColor: 'green', // Highlight the active tab
          width: 35,
          height: 3, // Adjust to a vertical indicator
        },
        tabBarItemStyle: {
          justifyContent: 'center',
          alignItems: 'center',
          height: 80,
          borderWidth: 1,
        borderColor: 'black',
        marginHorizontal: 1,
        borderRadius: 8,
        paddingHorizontal: 1,
        borderWidth:2,
        backgroundColor: 'grey',
        boxShadow:"9",
        shadowColor: "black",
        },
      }}
    >
      <TopTab.Screen name="QuickSetup1" component={QuickSetup1} />
      <TopTab.Screen name="Login1" component={Login1} />
      <TopTab.Screen name="Personal" component={Personal} />
      <TopTab.Screen name="Professional" component={Professional} />
      <TopTab.Screen name="WorkPre" component={WorkPre} />
      <TopTab.Screen name="ProfessionalAchievement" component={ProfessionalAchievement} />
      <TopTab.Screen name="Miscellaneous" component={Miscellaneous} />
    </TopTab.Navigator>
  );
}


// Main Student Screen with Header & Tabs
function StudentScreen() {
  return (
    <>
      <ScreenHeader title="StudentTabs" />
      <StudentTabs />
    </>
  );
}

// Main Counsellor Screen with Header & Tabs
function CounsellorScreen() {
  return (
    <>
      <ScreenHeader title="CounsellorTabs" />
      <CounsellorTabs />
    </>
  );
}

// Main App Component
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        {/* Home Screen */}
        <Stack.Screen name="HomeScreen" component={HomeScreen} />

        {/* Student Tabs */}
        <Stack.Screen
          name="StudentTabs"
          component={StudentScreen}
          options={{ headerShown: false }}
        />

        {/* Counsellor Tabs */}
        <Stack.Screen
          name="CounsellorTabs"
          component={CounsellorScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Style for the screen header
const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'silver',
    paddingVertical: 8,
    alignItems: 'center',
    borderBottomWidth: 0,
    borderBottomColor: 'gray',
    paddingTop:30
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
});

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text, StyleSheet, Image } from 'react-native';

// Import HomeScreen
import HomeScreen from './StudentScreens/HomeScreen';

// Student Screens
import StudentBasic from './StudentScreens/StudentBasic';
import Guardian from './StudentScreens/Guardian-Info';
import Academic from './StudentScreens/Academic';
import Career from './StudentScreens/Career';
import Additional from './StudentScreens/Additional';

// Counsellor Screens
import Personal from './CounsellorScreens/Personal';
import Professional from './CounsellorScreens/Professional';
import WorkPre from './CounsellorScreens/WorkPre';
import ProfessionalAchievement from './CounsellorScreens/ProfessionalAchievement';
import Miscellaneous from './CounsellorScreens/Miscellaneous';

const Stack = createStackNavigator();
const TopTab = createMaterialTopTabNavigator();

// Header Component to display screen name above the tabs with icons
function ScreenHeader({ title }) {
  // Decide which icon to show based on the title
  const iconSource =
    title === "Student's Profile"
      ? require('./assets/student.png') // Path to Student icon
      : require('./assets/counselor.png')
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{title}</Text>
      <Image source={iconSource} style={styles.icon} />
    </View>
  );
}

// Student Tabs Section
function StudentTabs() {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarStyle: {
          flexDirection: 'column', 
          backgroundColor: 'silver', 
          width: "150%",
          paddingLeft: 8,
          paddingRight: 220,
        
        },
        tabBarActiveTintColor: '#9acd32',
        tabBarInactiveTintColor: 'black',
        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: 'bold',
          textAlign: 'center',
          transform: [{ rotate: '360 deg' }],
        },
        tabBarIndicatorStyle: {
          backgroundColor: 'silver',
          width: 35,
          height: 5,
        },
        tabBarItemStyle: {
          justifyContent: 'center',
          alignItems: 'center',
          height: 80,
          borderWidth: 2,
          borderColor: 'black',
          marginHorizontal: 5,
          borderRadius: 9,
          paddingHorizontal: 5,
          backgroundColor: 'gray',
          shadowColor: 'black',
        },
      }}
      tabBarOptions={{
        scrollEnabled: true,
      }}
    >
      <TopTab.Screen name="Student's Basic Info" component={StudentBasic} />
      <TopTab.Screen name="Guardian Info" component={Guardian} />
      <TopTab.Screen name="Academic Info" component={Academic} />
      <TopTab.Screen name="Career Info" component={Career} />
      <TopTab.Screen name="Additional Info" component={Additional} />
    </TopTab.Navigator>
  );
}

// Counsellor Tabs Section
function CounsellorTabs() {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarStyle: {
          flexDirection: 'column', 
          backgroundColor: 'silver',
          width: "150%",
          paddingLeft: 8,
          paddingRight: 220,
        },
        tabBarActiveTintColor: '#9acd32',
        tabBarInactiveTintColor: 'black',
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: 'bold',
          textAlign: 'center',
          transform: [{ rotate: '360 deg' }],
        },
        tabBarIndicatorStyle: {
          backgroundColor: 'silver',
          width: 35,
          height: 3,
        },
        tabBarItemStyle: {
          justifyContent: 'center',
          alignItems: 'center',
          height: 80,
          borderWidth: 2,
          borderColor: 'black',
          marginHorizontal: 1,
          borderRadius: 8,
          paddingHorizontal: 1,
          backgroundColor: 'gray',
          shadowColor: 'black',
        },
      }}
    >
      <TopTab.Screen name="Personal Info" component={Personal} />
      <TopTab.Screen name="Professional Info" component={Professional} />
      <TopTab.Screen name="Work Preference" component={WorkPre} />
      <TopTab.Screen name="Professional Achievement" component={ProfessionalAchievement} />
      <TopTab.Screen name="Miscellaneous" component={Miscellaneous} />
    </TopTab.Navigator>
  );
}

// Main Student Screen with Header & Tabs
function StudentScreen() {
  return (
    <>
      <ScreenHeader title="Student's Profile" />
      <StudentTabs />
    </>
  );
}

// Main Counsellor Screen with Header & Tabs
function CounsellorScreen() {
  return (
    <>
      <ScreenHeader title="Counsellor's Profile" />
      <CounsellorTabs />
    </>
  );
}

// Main App Component
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />

        {/* Student Tabs */}
        <Stack.Screen
          name="StudentProfile"
          component={StudentScreen}
          options={{ headerShown: false }}
        />

        {/* Counsellor Tabs */}
        <Stack.Screen
          name="CounsellorProfile"
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
    paddingVertical: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: 'gray',
    paddingTop: 39,
    paddingBottom: 20,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  icon: {
    width: 40,        // Adjust icon width
    height: 40,       // Adjust icon height
    marginLeft: 10,   // Add spacing between text and icon
  },
});

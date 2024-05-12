// navigation/MainTabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import CommonStyling from '../components/CommonStyling';
import HomeScreen from '../screens/HomeScreen';
import AudioScreen from '../screens/AudioScreen';
import BotScreen from '../screens/BotScreen';
import SleepScreen from '../screens/SleepScreen';
import ProfileScreen from '../screens/ProfileScreen';
// import LoginScreen from '../screens/LoginScreen';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Audio') {
            iconName = focused ? 'music' : 'music-note-outline';
          } else if (route.name === 'Bot') {
            iconName = focused ? 'robot' : 'robot-outline';
          } else if (route.name === 'Sleep') {
            iconName = focused ? 'weather-night' : 'weather-night';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'account' : 'account-outline';
          }

          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#007BFF',
        inactiveTintColor: 'gray',
        
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }} // Hide the header for the 'Home' screen
      />
      <Tab.Screen
        name="Audio"
        component={AudioScreen}
        options={{ headerShown: false }} // Hide the header for the 'Audio' screen
      />
      <Tab.Screen
        name="Bot"
        component={BotScreen}
        options={{ headerShown: false }} // Hide the header for the 'Bot' screen
      />
      <Tab.Screen
        name="Sleep"
        component={SleepScreen}
        options={{ headerShown: false }} // Hide the header for the 'Sleep' screen
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }} // Hide the header for the 'Profile' screen
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;

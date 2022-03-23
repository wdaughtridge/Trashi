import React, { useState } from "react";

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Icons
import { Ionicons } from '@expo/vector-icons';

// Amplify
import Amplify from 'aws-amplify'
import config from './src/aws-exports'
Amplify.configure(config)

// Pages
import Results from './Results';
import Scanner from './Scanner';
import Settings from './Settings';
import Progress from './Progress';
import AppContext from "./AppContext";

function ScannerStackScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Scanner" component={Scanner} />
      <Stack.Screen name="Results" component={Results} />
    </Stack.Navigator>
  );
}

const App = () => {
  // Global settings for all pages.
  // Keeps track of set accessibility settings in a session. 
  // TODO: make data persistent.
  const [soundIsEnabled, setSoundIsEnabled] = useState(false);
  const soundToggleSwitch = () => setSoundIsEnabled(previousState => !previousState);

  const [readIsEnabled, setReadIsEnabled] = useState(false);
  const readToggleSwitch = () => setReadIsEnabled(previousState => !previousState);

  const [darkIsEnabled, setDarkIsEnabled] = useState(false);
  const darkToggleSwitch = () => setDarkIsEnabled(previousState => !previousState);

  const [largeIsEnabled, setLargeIsEnabled] = useState(false);
  const largeToggleSwitch = () => setLargeIsEnabled(previousState => !previousState);

  const settings = {
    soundEnabled: soundIsEnabled,
    readEnabled: readIsEnabled,
    darkEnabled: darkIsEnabled,
    largeEnabled: largeIsEnabled,
    soundToggleSwitch,
    readToggleSwitch,
    darkToggleSwitch,
    largeToggleSwitch,
    numItems: 0
  };

  return (
    <AppContext.Provider value={settings}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              if (route.name === 'Scan') {
                return (
                  <Ionicons
                    name={'barcode'}
                    size={size}
                    color={color}
                  />
                );
              } else if (route.name === 'Settings') {
                return (
                  <Ionicons
                    name={'ios-settings'}
                    size={size}
                    color={color}
                  />
                );
              }else if (route.name === 'Statistics') {
                return (
                  <Ionicons
                    name={'bar-chart'}
                    size={size}
                    color={color}
                  />
                );
              }
            },
            tabBarInactiveTintColor: 'gray',
            tabBarActiveTintColor: '#45B972',
          })}
        >
          
          <Tab.Screen name="Scan" component={ScannerStackScreen} />
          <Tab.Screen name="Statistics" component={Progress} />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
};

export default App;
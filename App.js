import React from 'react';

// Navigation
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

// Amplify
import Amplify from 'aws-amplify'
import config from './src/aws-exports'
Amplify.configure(config)

// Local
import Home from './Home';
import Results from './Results';
import Scanner from './Scanner';
import AddItems from './AddItems';
import AddRegulations from './AddRegulations';
import Settings from './Settings';

import { Ionicons } from '@expo/vector-icons';

function ScannerStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Scanner" component={Scanner} />
      <Stack.Screen name="Results" component={Results} />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Scan') {
            return (
              <Ionicons
                name={
                  'home'
                }
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
          }
        },
        tabBarInactiveTintColor: 'gray',
        tabBarActiveTintColor: 'tomato',
      })}
      >
        <Tab.Screen name="Scan" component={ScannerStackScreen} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
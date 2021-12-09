import React from 'react';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

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

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home' }}
        />
        <Stack.Screen name="Scan" component={Scanner} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Results" component={Results} />
        <Stack.Screen name="AddItems" component={AddItems} />
        <Stack.Screen name="AddRegulations" component={AddRegulations} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
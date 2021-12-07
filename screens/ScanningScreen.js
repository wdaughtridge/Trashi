import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';


function Scanner() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Scanner!</Text>
    </View>
  );
}

function Settings() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Flashlight! this shouldn't be a page, flashlight should just turn on. will need to be added later</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Scanner"
      screenOptions={{
        tabBarActiveTintColor: '#45B972',
      }}
    >
      <Tab.Screen
        name="Scanner"
        component={Scanner}
        options={{
          tabBarLabel: 'Scanner',
          tabBarIcon: ({ color, size }) => (
            <Image style={styles.icon} resizeMode="contain" source={require('../assets/barcode.png')}/>
          ),
        }}
      />
      <Tab.Screen
        name="Flashlight"
        component={Notifications}
        options={{
          tabBarLabel: 'Flashlight',
          tabBarIcon: ({ color, size }) => (
            <Image style={styles.icon} resizeMode="contain" source={require('../assets/flashlight-turn-on.png')}/>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <Image style={styles.icon} resizeMode="contain" source={require('../assets/cog.png')}/>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  navBar: {
    height:50,
    backgroundColor: "#45B972"
  },
  icon: {
    width: 30,
    height: 30
  },
});
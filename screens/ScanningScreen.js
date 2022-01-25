import * as React from 'react';
import { useState } from "react";

import { StyleSheet, Text, View, Image, Switch, Button } from 'react-native';
import { Icon } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ToggleSwitch from 'toggle-switch-react-native';

function Scanner() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Scanner!</Text>
    </View>
  );
}



function Settings() {
  state = false;
  function getState(state) {
    return state;
  }
  function switchState(state) {
    state = !state;
    return state;
  }
  return (
    <View style={{ flex: 1, backgroundColor: "#F4F9FA"  }}>
      <Text style={{justifyContent: 'center', alignItems: 'center'}}>Settings!</Text>
      <ToggleSwitch
        isOn={getState(state)}
        onColor="green"
        offColor="#D3D3D3"
        label="Sound"
        labelStyle={{ color: "#2F2F2F", fontWeight: "400", fontSize:"24", justifyContent: 'left', marginRight: 210, marginLeft: 24, marginVertical: 10}}
        size="medium"
        onToggle={isOn => switchState({state})}
      />
      <ToggleSwitch
        isOn={getState(state)}
        onColor="green"
        offColor="#D3D3D3"
        label="Read text aloud"
        labelStyle={{ color: "#2F2F2F", fontWeight: "400", fontSize:"24", justifyContent: 'left', marginRight: 118, marginLeft: 24, marginVertical: 10}}
        size="medium"
        onToggle={isOn => switchState({state})}
      />
      <ToggleSwitch
        isOn={getState(state)}
        onColor="green"
        offColor="#D3D3D3"
        label="Dark mode"
        labelStyle={{ color: "#2F2F2F", fontWeight: "400", fontSize:"24", justifyContent: 'left', marginRight: 164, marginLeft: 24, marginVertical: 10}}
        size="medium"
        onToggle={isOn => switchState({state})}
      />
      <View style={containerStyle.rowContainer}>
        <Text
          style={{color: "#2F2F2F", fontWeight: "400", fontSize:"24", justifyContent: 'left', marginRight: 76, marginLeft: 24, marginVertical: 10}}
        >
          Text size
        </Text>
        <View style={styles.button1}>
          <Button
            title="-"
            color="#2F2F2F"
            accessibilityLabel="Decrease font size"
          />  
        </View>
        <View style={styles.button2}>
          <Button
            title="+"
            color="#2F2F2F"
            accessibilityLabel="Increase font size"
          />  
        </View>
      </View>

      {/*<Switch
        onValueChange={useState(getState(state))}
      /> */}

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
  button1: {
    fontSize: '',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 26,
    marginHorizontal: 2,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'white',
  },
  button2: {
    fontSize: '30',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 26,
    marginHorizontal: 2,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'white',
  },
});

const containerStyle = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: "#ffffff",
  },
  rowContainer: {
    flexDirection: 'row'
  }
}); 

const textStyle = StyleSheet.create({
  unselectedText: {
      paddingLeft: 45,
      color: "#000000",
      fontWeight: "normal",
  },

}); 
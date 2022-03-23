import React, { useContext } from "react";
import { View, Switch, StyleSheet, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import RecommendationsCard from './RecommendationsCard';
import * as SecureStore from 'expo-secure-store';


// Utility
import AppContext from './AppContext';
import styles from './Styles';

const Progress = ({ navigation }) => {
    const settings = useContext(AppContext);

    //Added SecureStore functionality with error about promise rejection
    var numItems = 0;
    var key = 'numItems';
    /*Dummy data
    SecureStore.setItemAsync('numItems', 5);
    */

    async function getValueFor(key) {
      let result = await SecureStore.getItemAsync(key);
      if (result) {
        numItems = result;
      }
    }
    getValueFor(key)



    return (
        <View style={styles.settingsContainer}>
            <Text style={settings.largeEnabled ? styles.titleTextLarge : styles.titleText}>My Progress</Text>
            <Text style={settings.largeEnabled ? styles.h2Large : styles.h2}>Recycled Items This Month: {numItems}</Text>


            <StatusBar style="auto" />
        </View>
    );
};

export default Progress;
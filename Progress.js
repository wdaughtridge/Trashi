import React, { useContext } from "react";
import { View, Switch, StyleSheet, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import RecommendationsCard from './RecommendationsCard';

// Utility
import AppContext from './AppContext';
import styles from './Styles';

const Progress = ({ navigation }) => {
    const settings = useContext(AppContext);

    return (
        <View style={styles.settingsContainer}>
            <Text style={settings.largeEnabled ? styles.titleTextLarge : styles.titleText}>My Progress</Text> 
            <Text style={settings.largeEnabled ? styles.h2Large : styles.h2}>Recycled Items This Month</Text>

                
            <StatusBar style="auto" />
        </View>
    );
};

export default Progress;
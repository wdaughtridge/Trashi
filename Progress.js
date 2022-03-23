import React, { useContext } from "react";
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// Utility
import AppContext from './AppContext';
import styles from './Styles';

const Progress = ({ navigation }) => {
    const settings = useContext(AppContext);

    return (
        <View style={[styles.settingsContainer, settings.darkEnabled ? styles.backgroundDark : styles.backgroundLight]}>
            <Text style={[settings.largeEnabled ? styles.titleTextLarge : styles.titleText, settings.darkEnabled ? styles.textDark : styles.textLight]}>My Progress</Text> 
            <Text style={[settings.largeEnabled ? styles.h2Large : styles.h2, settings.darkEnabled ? styles.textDark : styles.textLight]}>Recycled Items This Month</Text>        
            <StatusBar style="auto" />
        </View>
    );
};

export default Progress;
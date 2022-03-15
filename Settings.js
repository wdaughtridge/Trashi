import React, { useContext } from "react";
import { View, Switch, StyleSheet, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import RecommendationsCard from './RecommendationsCard';

// Utility
import AppContext from './AppContext';
import styles from './Styles';

const Settings = ({ navigation }) => {
    const settings = useContext(AppContext);

    return (
        <View style={styles.container}>
            <Text style={settings.largeEnabled ? styles.titleTextLarge : styles.titleText}>Settings</Text>
            <RecommendationsCard>
                <Text style={settings.largeEnabled ? styles.h1Large : styles.h1}>Location: </Text>
                <Text style={settings.largeEnabled ? styles.h2Large : styles.h2}>Washington DC</Text>
                <Text style={settings.largeEnabled ? styles.h1Large : styles.h1}>Sound: </Text>
                <Switch
                    thumbColor={settings.soundEnabled ? "#63bf78" : "#767577"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={settings.soundToggleSwitch}
                    value={settings.soundEnabled}
                />
                <Text style={settings.largeEnabled ? styles.h1Large : styles.h1}>Read text aloud: </Text>
                <Switch
                    thumbColor={settings.readEnabled ? "#63bf78" : "#767577"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={settings.readToggleSwitch}
                    value={settings.readEnabled}
                />
                <Text style={settings.largeEnabled ? styles.h1Large : styles.h1}>Dark mode: </Text>
                <Switch
                    thumbColor={settings.darkEnabled ? "#63bf78" : "#767577"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={settings.darkToggleSwitch}
                    value={settings.darkEnabled}
                />
                <Text style={settings.largeEnabled ? styles.h1Large : styles.h1}>Large font: </Text>
                <Switch
                    thumbColor={settings.largeEnabled ? "#63bf78" : "#767577"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={settings.largeToggleSwitch}
                    value={settings.largeEnabled}
                />
            </RecommendationsCard>
            <StatusBar style="auto" />
        </View>
    );
};

export default Settings;
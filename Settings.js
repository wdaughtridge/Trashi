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
        <View style={styles.settingsContainer}>
            <Text style={settings.largeEnabled ? styles.titleTextLarge : styles.titleText}>Settings</Text> 
                <Text style={settings.largeEnabled ? styles.h1Large : styles.h1}>Location: </Text>
                <Text style={settings.largeEnabled ? styles.h2Large : styles.h2}>Washington DC</Text>
                <View style={styles.settingsElement}>
                    <Text style={settings.largeEnabled ? styles.settingsTextLarge : styles.settingsText}>Sound </Text>
                    <Switch
                        thumbColor="#fff"
                        ios_backgroundColor={settings.soundEnabled ? "#45B972" : "#BCBCBC"}
                        onValueChange={settings.soundToggleSwitch}
                        value={settings.soundEnabled}
                        style={styles.settingsToggle}
                    />
                    <Text style={styles.settingsDivider}>

                    </Text>
                </View>
                <View style={styles.settingsElement}>
                    <Text style={settings.largeEnabled ? styles.settingsTextLarge : styles.settingsText}>Read text aloud </Text>
                    <Switch
                        thumbColor="#fff"
                        ios_backgroundColor={settings.readEnabled ? "#45B972" : "#BCBCBC"}
                        onValueChange={settings.readToggleSwitch}
                        value={settings.readEnabled}
                        style={styles.settingsToggle}
                    />
                </View>
                <View style={styles.settingsElement}>
                    <Text style={settings.largeEnabled ? styles.settingsTextLarge : styles.settingsText}>Dark mode </Text>
                    <Switch
                        thumbColor="#fff"
                        ios_backgroundColor={settings.darkEnabled ? "#45B972" : "#BCBCBC"}
                        onValueChange={settings.darkToggleSwitch}
                        value={settings.darkEnabled}
                        style={styles.settingsToggle}
                    />
                </View>
                <View style={styles.settingsElement}>
                    <Text style={settings.largeEnabled ? styles.settingsTextLarge : styles.settingsText}>Large font </Text>
                    <Switch
                        thumbColor="#fff"
                        ios_backgroundColor={settings.largeEnabled ? "#45B972" : "#BCBCBC"}
                        onValueChange={settings.largeToggleSwitch}
                        value={settings.largeEnabled}
                        style={styles.settingsToggle}
                    />
                </View>
            <StatusBar style="auto" />
        </View>
    );
};

export default Settings;
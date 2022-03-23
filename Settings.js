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
        <View style={[styles.settingsContainer, settings.darkEnabled ? styles.backgroundDark : styles.backgroundLight]}>
            <Text style={[styles.font, settings.largeEnabled ? styles.titleTextLarge : styles.titleText, settings.darkEnabled ? styles.textDark : styles.textLight]}>Settings</Text> 
                <Text style={[styles.font, settings.largeEnabled ? styles.h1Large : styles.h1, settings.darkEnabled ? styles.textDark : styles.textLight]}>Location: </Text>
                <Text style={[settings.largeEnabled ? styles.h2Large : styles.h2, settings.darkEnabled ? styles.textDark : styles.textLight]}>Washington, DC</Text>
                <View style={styles.settingsElement}>
                    <Text style={[settings.largeEnabled ? styles.settingsTextLarge : styles.settingsText, settings.darkEnabled ? styles.textDark : styles.textLight]}>Sound </Text>
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
                    <Text style={[settings.largeEnabled ? styles.settingsTextLarge : styles.settingsText, settings.darkEnabled ? styles.textDark : styles.textLight]}>Read text aloud </Text>
                    <Switch
                        thumbColor="#fff"
                        ios_backgroundColor={settings.readEnabled ? "#45B972" : "#BCBCBC"}
                        onValueChange={settings.readToggleSwitch}
                        value={settings.readEnabled}
                        style={styles.settingsToggle}
                    />
                </View>
                <View style={styles.settingsElement}>
                    <Text style={[settings.largeEnabled ? styles.settingsTextLarge : styles.settingsText, settings.darkEnabled ? styles.textDark : styles.textLight]}>Dark mode </Text>
                    <Switch
                        thumbColor="#fff"
                        ios_backgroundColor={settings.darkEnabled ? "#45B972" : "#BCBCBC"}
                        onValueChange={settings.darkToggleSwitch}
                        value={settings.darkEnabled}
                        style={styles.settingsToggle}
                    />
                </View>
                <View style={styles.settingsElement}>
                    <Text style={[settings.largeEnabled ? styles.settingsTextLarge : styles.settingsText, settings.darkEnabled ? styles.textDark : styles.textLight]}>Large font </Text>
                    <Switch
                        thumbColor="#fff"
                        ios_backgroundColor={settings.largeEnabled ? "#45B972" : "#BCBCBC"}
                        onValueChange={settings.largeToggleSwitch}
                        value={settings.largeEnabled}
                        style={styles.settingsToggle}
                    />
                </View>
            <StatusBar style={"auto"}/>
        </View>
    );
};

export default Settings;
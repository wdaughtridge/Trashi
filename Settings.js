import React, { useState } from "react";
import { View, Switch, StyleSheet, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import RecommendationsCard from './RecommendationsCard';

const Settings = ({ navigation }) => {
    const [largeIsEnabled, setLargeIsEnabled] = useState(false);
    const largeToggleSwitch = () => setLargeIsEnabled(previousState => !previousState);

    const [soundIsEnabled, setSoundIsEnabled] = useState(false);
    const soundToggleSwitch = () => setSoundIsEnabled(previousState => !previousState);

    const [readIsEnabled, setReadIsEnabled] = useState(false);
    const readToggleSwitch = () => setReadIsEnabled(previousState => !previousState);

    const [darkIsEnabled, setDarkIsEnabled] = useState(false);
    const darkToggleSwitch = () => setDarkIsEnabled(previousState => !previousState);

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Settings</Text>
            <RecommendationsCard>
                <Text style={styles.h1}>Location: </Text>
                <Text style={styles.h2}>Washington DC</Text>
                <Text style={styles.h1}>Sound: </Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#767577" }}
                    thumbColor={soundIsEnabled ? "#63bf78" : "#ed4c51"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={soundToggleSwitch}
                    value={soundIsEnabled}
                />
                <Text style={styles.h1}>Read text aloud: </Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#767577" }}
                    thumbColor={readIsEnabled ? "#63bf78" : "#ed4c51"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={readToggleSwitch}
                    value={readIsEnabled}
                />
                <Text style={styles.h1}>Dark mode: </Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#767577" }}
                    thumbColor={darkIsEnabled ? "#63bf78" : "#ed4c51"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={darkToggleSwitch}
                    value={darkIsEnabled}
                />
                <Text style={styles.h1}>Large font: </Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#767577" }}
                    thumbColor={largeIsEnabled ? "#63bf78" : "#ed4c51"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={largeToggleSwitch}
                    value={largeIsEnabled}
                />
            </RecommendationsCard>
            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F4F9FA",
        alignItems: 'center',
        justifyContent: 'center',
    },
    h1: {
        marginTop: 20,

        fontSize: 28,
        color: "#2F2F2F",
        // fontFamily: "arial",
        fontWeight: "500",
    },
    h2: {
        marginTop: 20,

        fontSize: 18,
        color: "#2F2F2F",
        // fontFamily: "arial",
        fontWeight: "500",
    },
    image: {
        marginBottom: 10,
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold"
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        marginVertical: 10,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#2F2F2F',
    },
});

export default Settings;
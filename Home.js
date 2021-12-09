import React from 'react';
import { Image, Button, StyleSheet, Text, View, Pressable, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
        <Image style={styles.image} source={require('./assets/trashi-logo.png')}/>

        <Pressable style={styles.button}
            onPress={() => { navigation.navigate('Scan') }}
        >
            <Text style={styles.text}>Scan Barcode</Text>
        </Pressable>

        <Pressable style={styles.button}
            onPress={() => { navigation.navigate('Settings') }}
        >
            <Text style={styles.text}>Settings</Text>
        </Pressable>

        {/* Only for development! */}
            {/* <Pressable style={styles.button}
                onPress={() => {
                    navigation.navigate('Results', { upc: '051000142931' })
                }}
            >
                <Text style={styles.text}>View Test Results</Text>
            </Pressable>

            <Pressable style={styles.button}
                onPress={() => {
                    navigation.navigate('Results', { upc: '-11231' })
                }}
            >
                <Text style={styles.text}>View Failed Result</Text>
            </Pressable>

            <Pressable style={styles.button}
                onPress={() => {
                    navigation.navigate('AddItems')
                }}
            >
                <Text style={styles.text}>Add Items</Text>
            </Pressable>

            <Pressable style={styles.button}
                onPress={() => {
                    navigation.navigate('AddRegulations')
                }}
            >
                <Text style={styles.text}>Add Regulations</Text>
            </Pressable> */}
        {/* Only for development! */}

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

export default Home;
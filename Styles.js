import React, { Component, PropTypes } from 'react';
import { StyleSheet } from 'react-native';

// Global stylesheet for all pages.
// Only add styles here - do not separate out in page files.

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F4F9FA",
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleTextLarge: {
        fontSize: 40,
        fontWeight: "bold"
    },
    titleText: {
        fontSize: 35,
        fontWeight: "bold"
    },
    contentArea: {
        marginTop: 20,
    },
    imageContainer: {
        width: 325,
        height: 120,
        backgroundColor: "#fff",
        borderRadius: 10,
    },
    itemName: {
        marginVertical: 10,
        fontWeight: "bold",
        color: "#2F2F2F",
        fontSize: 25,
        // fontFamily: "arial",
        fontWeight: "200",
    },
    itemNameLarge: {
        marginVertical: 10,
        fontWeight: "bold",
        color: "#2F2F2F",
        fontSize: 30,
        fontWeight: "200",
    },
    x: {
        position: "absolute",
        width: 30,
        height: 30,
        right: 10,
        top: 25,
    },
    h1Large: {
        marginTop: 20,
        fontSize: 30,
        color: "#2F2F2F",
        fontWeight: "500",
    },
    h2Large: {
        marginTop: 20,
        fontSize: 20,
        color: "#2F2F2F",
        fontWeight: "500",
    },
    h1: {
        marginTop: 20,
        fontSize: 25,
        color: "#2F2F2F",
        fontWeight: "500",
    },
    h2: {
        marginTop: 20,
        fontSize: 15,
        color: "#2F2F2F",
        fontWeight: "500",
    },
    recContainer: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
    },
    recIcon: {
        width: 30,
        height: 30,
    },
    recText: {
        fontSize: 15,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
    },
    recTextLarge: {
        fontSize: 20,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    camera: {
        flex: 1,
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleTextLarge: {
        fontSize: 40,
        fontWeight: "bold"
    },
    titleText: {
        fontSize: 35,
        fontWeight: "bold"
    },
    textLarge: {
        fontSize: 20,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    text: {
        fontSize: 15,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    textBlack: {
        fontSize: 15,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
    },
    wrapperCustom: {
        borderRadius: 8,
        padding: 6
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
    buttonContainer: {
        flex: 4,
    },
    rectangle: {
        width: '75%',
        height: 125,
        borderColor: 'black',
        borderWidth: 5,
        borderRadius: 5,
    },
    card: {
        marginTop: 10,
        borderRadius: 10,
        backgroundColor: "#fff",
        elevation: 3,
        shadowOffset: { width: 1, heigh: 1 },
        width: 325,
        padding: 25
    },
    stats: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        marginVertical: 10,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'white',
    }
});

module.exports = styles;
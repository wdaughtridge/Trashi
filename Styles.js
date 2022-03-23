import React, { Component, PropTypes } from 'react';
import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

var { height, phoneWidth } = Dimensions.get('window');


// Global stylesheet for all pages.
// Only add styles here - do not separate out in page files.


const styles = StyleSheet.create({
    textDark: {
        color: "#fff"
    },
    textLight: {
        color: "#2F2F2F"
    },
    backgroundDark: {
        backgroundColor: '#16131D',
    },
    backgroundLight: {
        backgroundColor: '#F4F9FA',
    },
    cardBackgroundDark: {
        backgroundColor: "#25242C",
    },
    cardBackgroundLight: {
        backgroundColor: "#fff",
    },
    flashlightButtonDark: {
        backgroundColor: '#25242C',
        shadowColor: '#0E0E10',
    },
    flashlightButtonLight: {
        backgroundColor: '#fff',
        shadowColor: '#E0DFDF',
    },

    
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerDark: {
        flex: 1,
        backgroundColor: "#16131D",
        justifyContent: 'center',
        alignItems: 'center',
    },
    statusBarStyle: {
        paddingHorizontal: 20, 
        height: 10,
    },
    font : {
        fontFamily: "Avenir",
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
        fontFamily: "Avenir",
        marginVertical: 10,
        fontWeight: "bold",
        color: "#2F2F2F",
        fontSize: 25,
        // fontFamily: "arial",
        fontWeight: "200",
    },
    itemNameLarge: {
        fontFamily: "Avenir",
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
    h1: {
        fontFamily: "Avenir",
        marginTop: 20,
        fontSize: 25,

        fontWeight: "500",
    },
    h1Large: {
        fontFamily: "Avenir",
        marginTop: 20,
        fontSize: 30,

        fontWeight: "500",
    },
    h2Large: {
        fontFamily: "Avenir",
        marginTop: 20,
        fontSize: 20,
        color: "#2F2F2F",
        fontWeight: "500",
    },
    h2: {
        fontFamily: "Avenir",
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
        fontFamily: "Avenir",
        fontSize: 15,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
    },
    recTextLarge: {
        fontFamily: "Avenir",
        fontSize: 20,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
    },
    scanContainer: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    scanContent: {
        flex: 1,
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scanImage: {
        alignItems:'center', 
        justifyContent: "center",
        marginLeft: 100,
        width: 80,
        resizeMode: 'contain',
    },
    borderRadius: {
        borderRadius: 10,
    },
    scannerInstructionText: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'Avenir',
        backgroundColor: 'rgba(52,52,52,0.7)',
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 5,
        overflow: 'hidden'
    },
    scannerInstructionTextLarge: {
        color: '#fff',
        fontSize: 25,
        fontFamily: 'Avenir',
        backgroundColor: 'rgba(52,52,52,0.7)',
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 5,
        overflow: 'hidden'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    camera: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'flex-end',
    },
    titleTextLarge: {
        fontFamily: "Avenir",
        fontSize: 40,
        fontWeight: "bold"
    },
    titleText: {
        fontFamily: "Avenir",
        fontSize: 35,
        fontWeight: "bold"
    },
    textLarge: {
        fontFamily: "Avenir",
        fontSize: 20,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    text: {
        fontFamily: "Avenir",
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
        padding: 20,
        backgroundColor: "black",
        alignItems: 'flex-end',
    },
    flashlightButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 12,
        marginVertical: 10,
        marginRight: 10,
        borderRadius: 100,
        elevation: 3,
        
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 1,
        shadowRadius: 0,
    },
    rectangle: {
        width: '100%',
        height: 150,
        borderColor: '#2F2F2F',
        borderWidth: 5,
        borderRadius: 5,
        marginTop: 0,
    },
    card: {
        marginTop: 10,
        borderRadius: 10,
        elevation: 3,
        shadowOffset: { width: 1, height: 1 },
        width: 325,
        padding: 25
    },
    settingsContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    settingsElement: {
        flexDirection: 'row',
        paddingBottom: 20,
        borderBottomColor: '#DBDBDB',
        borderBottomWidth: 1,
    },
    settingsText: {
        fontFamily: "Avenir",
        marginTop: 20,
        fontSize: 25,
        fontWeight: "300",
        width: 240
    },
    settingsTextLarge: {
        fontFamily: "Avenir",
        marginTop: 20,
        fontSize: 30,
        fontWeight: "300",
        width: 240
    },

    settingsToggle: {
        marginTop: 20,
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
    },
});

module.exports = styles;
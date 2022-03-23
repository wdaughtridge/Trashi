import React, { useState, useEffect, useContext } from 'react';
import { Pressable, StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import { Camera } from 'expo-camera';

// Utility
import AppContext from './AppContext';
import styles from './Styles';

// Icons
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const Scanner = ({ navigation, route }) => {
  // State for radio buttons.
  const settings = useContext(AppContext);
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    console.log(data);
    navigation.navigate('Results', { upc: data });
  };

  const getScannerInstructions = () => {
    return(
      <View>
        {/*<Image style={styles.scanImage} source={require("./assets/holdingphone.png")}/>*/}
        <View style={styles.rectangle} />
        <View style={styles.borderRadius}>
          <Text style={[settings.largeEnabled ? styles.scannerInstructionTextLarge : styles.scannerInstructionText, {alignItems:'center', justifyContent: "center", marginTop:20}]}>Hold phone over a barcode</Text>
        </View>
        
      </View>
    );
  };

  return (
    <View style={styles.scanContainer}>
      <Camera style={styles.camera} type={type} flashMode={flash} onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}>
        <View style={styles.butttonContainer}>
          <TouchableOpacity
            style={[styles.flashlightButton, settings.darkEnabled ? styles.flashlightButtonDark : styles.flashlightButtonLight]}
            onPress={() => {
              setFlash(
                flash === Camera.Constants.FlashMode.off
                  ? Camera.Constants.FlashMode.torch
                  : Camera.Constants.FlashMode.off
              );
            }}>
              <MaterialCommunityIcons name="flashlight" size={24} color={settings.darkEnabled ? "white" : "black"} />
          </TouchableOpacity>
        </View>

        <View style={styles.scanContent}>

          {scanned && <Pressable style={styles.button} onPress={() => setScanned(false)}><Text style={settings.largeEnabled ? styles.textLarge : styles.text}>Tap to Scan Again</Text></Pressable>}
          {!scanned && getScannerInstructions()}
        </View>
      </Camera>
      {/*
      <View style={styles.butttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setType(
              type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
            );
          }}>
          <Text style={settings.largeEnabled ? styles.textLarge : styles.text}> Flip </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setFlash(
              flash === Camera.Constants.FlashMode.off
                ? Camera.Constants.FlashMode.torch
                : Camera.Constants.FlashMode.off
            );
          }}>
          <Text style={settings.largeEnabled ? styles.textLarge : styles.text}> Flash </Text>
        </TouchableOpacity>
      </View>
        */}
    </View>
  );
};

export default Scanner;
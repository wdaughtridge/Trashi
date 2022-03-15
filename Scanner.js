import React, { useState, useEffect, useContext } from 'react';
import { Pressable, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';

// Utility
import AppContext from './AppContext';
import styles from './Styles';

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

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} flashMode={flash} onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}>
        <View style={'flex: 1'}>
          {/* <View style={styles.rectangle} /> */}
          {scanned && <Pressable style={styles.button} onPress={() => setScanned(false)}><Text style={settings.largeEnabled ? styles.textLarge : styles.text}>Tap to Scan Again</Text></Pressable>}
        </View>
        {!scanned && <View style={styles.rectangle} />}
      </Camera>
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
    </View>
  );
};

export default Scanner;